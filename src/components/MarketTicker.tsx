import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  type: "stock" | "crypto" | "forex";
  flashStatus?: "up" | "down" | null;
}

const ACTIVE_ASSETS: TickerItem[] = [
  { symbol: "NVDA", name: "NVIDIA", price: 128.45, change: 2.34, changePercent: 1.85, type: "stock" },
  { symbol: "BTCUSD", name: "Bitcoin", price: 76919.11, change: -495.80, changePercent: -0.64, type: "crypto" },
  { symbol: "EURUSD", name: "EUR/USD", price: 1.1643, change: 0.0017, changePercent: 0.15, type: "forex" },
  { symbol: "TSLA", name: "Tesla", price: 422.24, change: -21.06, changePercent: -4.75, type: "stock" },
  { symbol: "AAPL", name: "Apple", price: 300.23, change: 2.02, changePercent: 0.67, type: "stock" },
  { symbol: "ETHUSD", name: "Ethereum", price: 3450.80, change: 58.40, changePercent: 1.72, type: "crypto" },
  { symbol: "GBPUSD", name: "GBP/USD", price: 1.2540, change: -0.0008, changePercent: -0.06, type: "forex" },
  { symbol: "SOLUSD", name: "Solana", price: 84.76, change: -0.41, changePercent: -0.48, type: "crypto" },
  { symbol: "MSFT", name: "Microsoft", price: 418.50, change: 3.20, changePercent: 0.77, type: "stock" },
  { symbol: "AMD", name: "AMD", price: 424.10, change: -25.60, changePercent: -5.69, type: "stock" },
];

export default function MarketTicker() {
  const [assets, setAssets] = useState<TickerItem[]>(ACTIVE_ASSETS);
  const [isLive, setIsLive] = useState(false);
  const flashTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    return () => {
      Object.values(flashTimers.current).forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const fmpKey = import.meta.env.VITE_FMP_API_KEY;

    if (!fmpKey) {
      console.warn("FMP API Key not found in .env. Running in static demonstration mode.");
      return;
    }

    const fetchLivePrices = async () => {
      try {
        // Fetch all assets in parallel using the active stable single-symbol endpoint
        const fetchPromises = ACTIVE_ASSETS.map(async (asset) => {
          try {
            const res = await fetch(
              `https://financialmodelingprep.com/stable/quote?symbol=${asset.symbol}&apikey=${fmpKey}`
            );
            if (!res.ok) return null;
            const data = await res.json();
            return { symbol: asset.symbol, data };
          } catch (e) {
            console.error(`Failed to fetch live price for ${asset.symbol}:`, e);
            return null;
          }
        });

        const results = await Promise.all(fetchPromises);
        
        setAssets(prevAssets => {
          return prevAssets.map(asset => {
            const result = results.find(r => r && r.symbol === asset.symbol);
            if (result && result.data) {
              const apiData = result.data;
              const newPrice = Number(apiData.price);
              const oldPrice = asset.price;
              
              let flash: "up" | "down" | null = null;
              if (oldPrice > 0 && newPrice !== oldPrice) {
                flash = newPrice > oldPrice ? "up" : "down";
              }

              if (flash) {
                if (flashTimers.current[asset.symbol]) {
                  clearTimeout(flashTimers.current[asset.symbol]);
                }
                flashTimers.current[asset.symbol] = setTimeout(() => {
                  setAssets(current =>
                    current.map(a => a.symbol === asset.symbol ? { ...a, flashStatus: null } : a)
                  );
                }, 1500);
              }

              setIsLive(true);
              return {
                ...asset,
                price: newPrice,
                change: Number(apiData.change),
                changePercent: Number(apiData.changePercentage),
                name: apiData.name || asset.name,
                flashStatus: flash,
              };
            }
            return asset;
          });
        });
      } catch (err) {
        console.error("FMP API Batch fetch error:", err);
      }
    };

    fetchLivePrices();
    
    // Polling every 20 seconds to keep data fresh without hitting rate limit caps
    const interval = setInterval(fetchLivePrices, 20000);
    return () => clearInterval(interval);
  }, []);

  const renderTickerContent = () => (
    <div className="flex items-center gap-10 py-3 whitespace-nowrap animate-marquee">
      {assets.map((asset, i) => {
        const isUp = asset.changePercent >= 0;
        const flash = asset.flashStatus;
        
        let flashClass = "";
        if (flash === "up") flashClass = "bg-emerald-500/10 text-emerald-400 font-bold scale-[1.02] border-emerald-500/30";
        else if (flash === "down") flashClass = "bg-rose-500/10 text-rose-400 font-bold scale-[1.02] border-rose-500/30";

        return (
          <div
            key={`${asset.symbol}-${i}`}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-transparent transition-all duration-300 ${flashClass}`}
          >
            <span className="text-xs font-bold text-foreground/45 bg-foreground/5 px-1.5 py-0.5 rounded tracking-wide">
              {asset.symbol}
            </span>
            <span className="text-sm font-semibold text-foreground/90">{asset.name}</span>
            <span className="text-sm font-mono font-bold text-foreground">
              {asset.price.toLocaleString(undefined, {
                minimumFractionDigits: asset.type === "forex" ? 4 : 2,
                maximumFractionDigits: asset.type === "forex" ? 4 : 2,
              })}
            </span>
            
            <span
              className={`inline-flex items-center gap-0.5 text-xs font-bold ${
                isUp ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {isUp ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              {isUp ? "+" : ""}
              {asset.changePercent.toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden border-y border-gold/15 bg-background/50 backdrop-blur-md z-40 select-none">
      {/* Gradient Shimmers for Depth */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Styled Tag Injection for smooth marquee movement */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Core Scrolling Wrappers */}
      <div className="flex w-max">
        {renderTickerContent()}
        {renderTickerContent()} {/* Duplicate for seamless loop */}
      </div>
      
      {/* Small badge indicating data status */}
      <div className="absolute bottom-1 right-2 z-20 opacity-30 text-[8px] tracking-widest text-foreground font-semibold flex items-center gap-1 pointer-events-none">
        <span className={`w-1 h-1 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-gold"}`} />
        {isLive ? "100% LIVE REAL-TIME DATA" : "STANDBY DEMO DATA"}
      </div>
    </div>
  );
}
