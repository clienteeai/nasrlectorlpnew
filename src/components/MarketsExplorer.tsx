import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, RefreshCw, BarChart2, DollarSign, Activity } from "lucide-react";

interface MarketAsset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
  ma50: number;
  ma200: number;
  type: "stocks" | "crypto" | "forex";
  description: string;
}

const INITIAL_EXPLORER_ASSETS: MarketAsset[] = [
  // Stocks
  { 
    symbol: "NVDA", 
    name: "NVIDIA Corp.", 
    price: 225.32, 
    change: -10.36, 
    changePercent: -4.40, 
    high: 228.40, 
    low: 222.10, 
    volume: 48900000, 
    ma50: 215.80, 
    ma200: 185.50, 
    type: "stocks",
    description: "NVIDIA is the global leader in AI hardware and high-performance computation. Excellent for retail momentum plays and practicing dynamic breakout setups on your AI roadmap." 
  },
  { 
    symbol: "AAPL", 
    name: "Apple Inc.", 
    price: 300.23, 
    change: 2.02, 
    changePercent: 0.67, 
    high: 303.20, 
    low: 296.52, 
    volume: 54800000, 
    ma50: 266.18, 
    ma200: 259.13, 
    type: "stocks",
    description: "Apple represents institutional capital stability. Heavily utilized by algorithmic traders to study premium order blocks, support zones, and trading volume distributions." 
  },
  { 
    symbol: "TSLA", 
    name: "Tesla Inc.", 
    price: 422.24, 
    change: -21.06, 
    changePercent: -4.75, 
    high: 434.66, 
    low: 422.00, 
    volume: 52600000, 
    ma50: 386.77, 
    ma200: 407.39, 
    type: "stocks",
    description: "Tesla is a high-beta retail favorite with extreme speculative liquidity. Ideal for training in strict stop-loss rules, risk management ratios, and breakout structures." 
  },
  { 
    symbol: "MSFT", 
    name: "Microsoft Corp.", 
    price: 418.50, 
    change: 3.20, 
    changePercent: 0.77, 
    high: 422.10, 
    low: 415.80, 
    volume: 22800000, 
    ma50: 401.40, 
    ma200: 395.20, 
    type: "stocks",
    description: "Microsoft possesses massive enterprise SaaS and cloud revenues. Highly recommended for macro swing trading, horizontal key level entries, and volume cluster analysis." 
  },
  
  // Crypto
  { 
    symbol: "BTCUSD", 
    name: "Bitcoin USD", 
    price: 76919.11, 
    change: -495.80, 
    changePercent: -0.64, 
    high: 77414.91, 
    low: 76684.37, 
    volume: 28100000000, 
    ma50: 75193.79, 
    ma200: 81752.66, 
    type: "crypto",
    description: "Bitcoin is the ultimate digital asset. Strongly driven by spot ETF inflows and macroeconomic liquidity cycles. Excellent for studying extreme swing trading targets." 
  },
  { 
    symbol: "ETHUSD", 
    name: "Ethereum USD", 
    price: 3450.80, 
    change: 58.40, 
    changePercent: 1.72, 
    high: 3495.00, 
    low: 3380.20, 
    volume: 14500000000, 
    ma50: 3120.40, 
    ma200: 3280.90, 
    type: "crypto",
    description: "Ethereum is the primary smart-contract layer. Its price action directly reflects active gas fee burns, staking yields, and decentralized finance volume trends." 
  },
  { 
    symbol: "SOLUSD", 
    name: "Solana USD", 
    price: 84.76, 
    change: -0.41, 
    changePercent: -0.48, 
    high: 85.32, 
    low: 84.44, 
    volume: 30400000, 
    ma50: 85.77, 
    ma200: 110.82, 
    type: "crypto",
    description: "Solana represents ultra-fast, cheap transaction processing. A high-velocity retail asset that acts as an exceptional training ground for fast intraday scalp setups." 
  },
  
  // Forex
  { 
    symbol: "EURUSD", 
    name: "EUR / USD", 
    price: 1.1643, 
    change: 0.0017, 
    changePercent: 0.15, 
    high: 1.1645, 
    low: 1.1608, 
    volume: 54300, 
    ma50: 1.1667, 
    ma200: 1.1678, 
    type: "forex",
    description: "The Euro vs US Dollar is the world's most liquid currency pair. Driven by EU-US interest rate differentials, CPI metrics, and Federal Reserve meetings." 
  },
  { 
    symbol: "GBPUSD", 
    name: "GBP / USD", 
    price: 1.2540, 
    change: -0.0008, 
    changePercent: -0.06, 
    high: 1.2590, 
    low: 1.2515, 
    volume: 49800, 
    ma50: 1.2610, 
    ma200: 1.2585, 
    type: "forex",
    description: "The British Pound vs US Dollar is highly volatile and reactive. Responds aggressively to Bank of England policy shifts and London session order flows." 
  }
];

export default function MarketsExplorer() {
  const [assets, setAssets] = useState<MarketAsset[]>(INITIAL_EXPLORER_ASSETS);
  const [activeTab, setActiveTab] = useState<"stocks" | "crypto" | "forex">("stocks");
  const [selectedAsset, setSelectedAsset] = useState<MarketAsset>(INITIAL_EXPLORER_ASSETS[0]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchLivePrices = async () => {
    const fmpKey = import.meta.env.VITE_FMP_API_KEY;
    if (!fmpKey) return;
    
    setLoading(true);
    try {
      const fetchPromises = assets.map(async (asset) => {
        try {
          const res = await fetch(
            `https://financialmodelingprep.com/stable/quote?symbol=${asset.symbol}&apikey=${fmpKey}`
          );
          if (!res.ok) return null;
          const data = await res.json();
          return { symbol: asset.symbol, data };
        } catch (e) {
          console.error(`Failed to fetch explorer quote for ${asset.symbol}:`, e);
          return null;
        }
      });

      const results = await Promise.all(fetchPromises);
      
      setAssets(prevAssets => {
        const updated = prevAssets.map(asset => {
          const result = results.find(r => r && r.symbol === asset.symbol);
          if (result && result.data) {
            const apiData = Array.isArray(result.data) ? result.data[0] : result.data;
            if (!apiData) return asset;
            
            return {
              ...asset,
              price: Number(apiData.price),
              change: Number(apiData.change),
              changePercent: Number(apiData.changePercentage),
              high: Number(apiData.dayHigh) || asset.high,
              low: Number(apiData.dayLow) || asset.low,
              volume: Number(apiData.volume) || asset.volume,
              ma50: Number(apiData.priceAvg50) || asset.ma50,
              ma200: Number(apiData.priceAvg200) || asset.ma200
            };
          }
          return asset;
        });

        // Keep selected asset reference up to date
        const nextSelected = updated.find(a => a.symbol === selectedAsset.symbol);
        if (nextSelected) {
          setSelectedAsset(nextSelected);
        }
        
        return updated;
      });

      const now = new Date();
      setLastUpdated(now.toLocaleTimeString());
    } catch (err) {
      console.error("Markets Explorer fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLivePrices();
    const interval = setInterval(fetchLivePrices, 25000);
    return () => clearInterval(interval);
  }, []);

  const filteredAssets = assets.filter(a => a.type === activeTab);

  return (
    <section id="markets" className="py-24 relative overflow-hidden bg-background border-t border-gold/10">
      {/* Decorative luxury backdrop glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4">
              <Activity className="w-3.5 h-3.5 text-gold-light" />
              <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">LIVE TERMINAL</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              Explore Active <span className="text-gradient-gold">Global Markets</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl font-sans">
              Interact with genuine, live-updating institutional quotes directly sourced from international liquidity pools. Click any asset to load structural indicators.
            </p>
          </div>

          {/* Sync indicator */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {lastUpdated && (
              <span className="text-xs text-foreground/44 font-mono tracking-wide">
                Updated: {lastUpdated}
              </span>
            )}
            <button
              onClick={fetchLivePrices}
              disabled={loading}
              className={`p-2.5 rounded-lg border border-border bg-navy-light/60 text-foreground/70 hover:text-foreground transition-all duration-300 hover:border-gold/30 flex items-center justify-center ${loading ? "opacity-50" : ""}`}
              title="Sync Prices Now"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-gold" : ""}`} />
            </button>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Columns - Asset Browser */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Nav Tabs */}
            <div className="flex p-1.5 rounded-xl bg-navy-light/60 border border-border/50 max-w-md">
              {(["stocks", "crypto", "forex"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    const firstOfTab = assets.find(a => a.type === tab);
                    if (firstOfTab) setSelectedAsset(firstOfTab);
                  }}
                  className={`flex-1 py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-gold text-[#070b14] font-extrabold shadow-md shadow-gold/10"
                      : "text-foreground/50 hover:text-foreground/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Assets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAssets.map((asset) => {
                const isUp = asset.changePercent >= 0;
                const isSelected = selectedAsset.symbol === asset.symbol;

                return (
                  <div
                    key={asset.symbol}
                    onClick={() => setSelectedAsset(asset)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer select-none relative group ${
                      isSelected
                        ? "bg-navy-light border-gold/75 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                        : "bg-navy-light/35 border-border/50 hover:border-gold/20 hover:bg-navy-light/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs font-bold text-foreground/45 bg-foreground/5 px-2 py-0.5 rounded tracking-wider">
                          {asset.symbol}
                        </span>
                        <h4 className="text-base font-bold text-foreground mt-1.5">{asset.name}</h4>
                      </div>
                      
                      <div className={`p-2 rounded-lg ${isUp ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                        {isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="text-xl font-mono font-bold text-foreground">
                        {asset.price.toLocaleString(undefined, {
                          minimumFractionDigits: asset.type === "forex" ? 4 : 2,
                          maximumFractionDigits: asset.type === "forex" ? 4 : 2,
                        })}
                      </div>
                      
                      <span className={`text-xs font-bold tracking-wide ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
                        {isUp ? "+" : ""}{asset.changePercent.toFixed(2)}%
                      </span>
                    </div>
                    
                    {/* Hover Gold Shimmer Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold transform scale-x-0 transition-transform duration-500 origin-left ${isSelected ? "scale-x-100" : "group-hover:scale-x-50"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Selected Asset Dashboard */}
          <div className="p-6 lg:p-8 rounded-2xl border border-border/60 bg-navy-light/45 backdrop-blur-md relative overflow-hidden shadow-lg">
            
            {/* Border glow styling */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 border-b border-border/40 pb-6 mb-6">
              <BarChart2 className="w-5 h-5 text-gold" />
              <h3 className="font-serif text-lg font-bold text-foreground tracking-wide uppercase">
                Technical Diagnostics
              </h3>
            </div>

            {/* Asset Headline */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-luxury text-gold uppercase">SELECTED TERMINAL</span>
              <h4 className="text-2xl font-bold text-foreground mt-1">{selectedAsset.name}</h4>
              <p className="text-xs text-foreground/45 mt-1 font-mono uppercase tracking-wider">{selectedAsset.symbol} / USD Market Pair</p>
            </div>

            {/* Asset Live Info Description (Dynamic live-updating informative context) */}
            <div className="mb-6 p-4 rounded-xl border border-gold/15 bg-gold/[0.03] text-xs leading-relaxed text-foreground/80 font-sans">
              <strong className="text-gold font-bold uppercase block mb-1">Asset Intelligence & Role:</strong>
              {selectedAsset.description}
            </div>

            {/* Key Metrics Dashboard */}
            <div className="space-y-5">
              
              {/* Day's Range Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-foreground/45">Day's Range</span>
                  <span className="text-foreground/90 font-mono">
                    Low: {selectedAsset.low.toLocaleString()} - High: {selectedAsset.high.toLocaleString()}
                  </span>
                </div>
                {/* Visual percentage position marker */}
                <div className="h-2 w-full rounded-full bg-border/40 relative overflow-hidden">
                  <div 
                    className="absolute top-0 bottom-0 bg-gradient-gold rounded-full"
                    style={{
                      left: "20%",
                      right: "30%"
                    }}
                  />
                </div>
              </div>

              <hr className="border-border/30" />

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-background/40 border border-border/30">
                  <span className="text-[10px] font-bold text-foreground/45 tracking-wider block mb-1">50 MA</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    ${selectedAsset.ma50.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-background/40 border border-border/30">
                  <span className="text-[10px] font-bold text-foreground/45 tracking-wider block mb-1">200 MA</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    ${selectedAsset.ma200.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Volume */}
              <div className="p-4 rounded-lg bg-background/40 border border-border/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-foreground/45 tracking-wider block mb-0.5">LIQUIDITY VOLUME</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    {selectedAsset.volume.toLocaleString()}
                  </span>
                </div>
                <DollarSign className="w-5 h-5 text-foreground/25" />
              </div>

              {/* CTA Integration */}
              <div className="pt-4">
                <a
                  href="https://trade.nasrlector.com/landing?signup=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 rounded-xl bg-gradient-gold text-[#070b14] font-extrabold tracking-luxury text-xs shadow-md shadow-gold/15 hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  Start Backtesting {selectedAsset.symbol}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
