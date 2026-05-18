import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  type: "stock" | "crypto" | "forex" | "commodity";
  flashStatus?: "up" | "down" | null;
}

const INITIAL_ASSETS: TickerItem[] = [
  { symbol: "NVDA", name: "NVIDIA", price: 128.45, change: 2.34, changePercent: 1.85, type: "stock" },
  { symbol: "BTCUSD", name: "Bitcoin", price: 66840.50, change: -420.20, changePercent: -0.62, type: "crypto" },
  { symbol: "EURUSD", name: "EUR/USD", price: 1.0845, change: 0.0012, changePercent: 0.11, type: "forex" },
  { symbol: "TSLA", name: "Tesla", price: 174.20, change: -1.85, changePercent: -1.05, type: "stock" },
  { symbol: "AAPL", name: "Apple", price: 188.30, change: 0.75, changePercent: 0.40, type: "stock" },
  { symbol: "ETHUSD", name: "Ethereum", price: 3450.80, change: 58.40, changePercent: 1.72, type: "crypto" },
  { symbol: "GBPUSD", name: "GBP/USD", price: 1.2540, change: -0.0008, changePercent: -0.06, type: "forex" },
  { symbol: "XAUUSD", name: "Gold", price: 2345.10, change: 12.80, changePercent: 0.55, type: "commodity" },
  { symbol: "MSFT", name: "Microsoft", price: 418.50, change: 3.20, changePercent: 0.77, type: "stock" },
];

export default function MarketTicker() {
  const [assets, setAssets] = useState<TickerItem[]>(INITIAL_ASSETS);
  const [isLive, setIsLive] = useState(false);
  const flashTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      Object.values(flashTimers.current).forEach(clearTimeout);
    };
  }, []);

  // Fetch real-time data if FMP API Key is present, otherwise start high-fidelity simulator
  useEffect(() => {
    const fmpKey = import.meta.env.VITE_FMP_API_KEY;

    if (fmpKey) {
      const fetchFMPPrices = async () => {
        try {
          // FMP Multi-quote endpoint for our core assets
          const symbolsCsv = "AAPL,TSLA,NVDA,MSFT,BTCUSD,ETHUSD,EURUSD,GBPUSD";
          const res = await fetch(
            `https://financialmodelingprep.com/api/v3/quote/${symbolsCsv}?apikey=${fmpKey}`
          );
          
          if (!res.ok) throw new Error("FMP API Network response was not ok");
          const data = await res.json();
          
          if (Array.isArray(data) && data.length > 0) {
            setIsLive(true);
            setAssets(prevAssets => {
              return prevAssets.map(asset => {
                const apiData = data.find(
                  item => item.symbol.toUpperCase() === asset.symbol.toUpperCase()
                );
                
                if (apiData) {
                  const newPrice = apiData.price;
                  const oldPrice = asset.price;
                  let flash: "up" | "down" | null = null;
                  
                  if (newPrice > oldPrice) flash = "up";
                  else if (newPrice < oldPrice) flash = "down";

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

                  return {
                    ...asset,
                    price: apiData.price,
                    change: apiData.change,
                    changePercent: apiData.changesPercentage,
                    flashStatus: flash,
                  };
                }
                return asset;
              });
            });
          }
        } catch (err) {
          console.warn("FMP Live Fetch failed, running in high-fidelity simulation mode:", err);
          runSimulationStep();
        }
      };

      fetchFMPPrices();
      const interval = setInterval(fetchFMPPrices, 15000); // refresh every 15s
      return () => clearInterval(interval);
    } else {
      // Run high-fidelity client simulation
      const interval = setInterval(runSimulationStep, 2500);
      return () => clearInterval(interval);
    }
  }, []);

  const runSimulationStep = () => {
    setAssets(prevAssets => {
      // Pick 2 random assets to fluctuate
      const idx1 = Math.floor(Math.random() * prevAssets.length);
      let idx2 = Math.floor(Math.random() * prevAssets.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * prevAssets.length);
      }

      return prevAssets.map((asset, i) => {
        if (i === idx1 || i === idx2) {
          const pct = (Math.random() * 0.24 - 0.12) / 100; // -0.12% to +0.12%
          const priceMultiplier = 1 + pct;
          const oldPrice = asset.price;
          const newPrice = Number((oldPrice * priceMultiplier).toFixed(asset.type === "forex" ? 4 : 2));
          const diff = Number((newPrice - oldPrice).toFixed(asset.type === "forex" ? 4 : 2));
          
          let flash: "up" | "down" = pct >= 0 ? "up" : "down";
          
          // Clear active timer for this flash
          if (flashTimers.current[asset.symbol]) {
            clearTimeout(flashTimers.current[asset.symbol]);
          }
          
          // Set new clear timer
          flashTimers.current[asset.symbol] = setTimeout(() => {
            setAssets(current =>
              current.map(a => a.symbol === asset.symbol ? { ...a, flashStatus: null } : a)
            );
          }, 1500);

          const newChangePercent = Number((asset.changePercent + pct * 100).toFixed(2));
          const newChange = Number((asset.change + diff).toFixed(asset.type === "forex" ? 4 : 2));

          return {
            ...asset,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
            flashStatus: flash,
          };
        }
        return asset;
      });
    });
  };

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
      {/* Decorative Shimmers */}
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
        {isLive ? "FMP LIVE" : "DYNAMIC DATA SIMULATOR"}
      </div>
    </div>
  );
}
