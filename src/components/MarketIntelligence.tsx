import React, { useState, useEffect } from "react";
import { Newspaper, Calendar, Globe, ArrowUpRight, TrendingUp, AlertCircle, RefreshCw } from "lucide-react";

interface NewsArticle {
  symbol: string;
  publishedDate: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}

interface CalendarEvent {
  time: string;
  currency: string;
  event: string;
  impact: "high" | "medium" | "low";
  forecast: string;
  previous: string;
}

const MOCK_NEWS_FALLBACK: NewsArticle[] = [
  {
    symbol: "NVDA",
    publishedDate: "2026-05-18 10:12:00",
    title: "NVIDIA Chip Orders Reach Record Highs Amid Global AI Buildout Expansion",
    image: "",
    site: "MarketWatch",
    text: "Demand for Blackwell architecture chips continues to outpace foundry capacity, pushing forward margins above 76%...",
    url: "https://finance.yahoo.com"
  },
  {
    symbol: "BTCUSD",
    publishedDate: "2026-05-18 09:45:00",
    title: "Bitcoin Consolidates Near All-Time Highs as Spot ETF Accumulation Speeds Up",
    image: "",
    site: "Yahoo Finance",
    text: "Wall Street institutional desks added over $420M in net spot ETF purchasing volume over the past 48 hours, creating supply squeeze...",
    url: "https://finance.yahoo.com"
  },
  {
    symbol: "EURUSD",
    publishedDate: "2026-05-18 08:30:00",
    title: "Euro Edges Higher Against Dollar Ahead of Critical Federal Reserve Meeting",
    image: "",
    site: "Bloomberg",
    text: "Macroeconomic currency pairs are tightly holding range structures as central banks signal potential interest rate easing differentials...",
    url: "https://finance.yahoo.com"
  }
];

const CALENDAR_EVENTS: CalendarEvent[] = [
  { time: "Wednesday, 14:30", currency: "USD", event: "Core CPI Inflation (YoY)", impact: "high", forecast: "3.2%", previous: "3.3%" },
  { time: "Wednesday, 20:00", currency: "USD", event: "FOMC Interest Rate Decision", impact: "high", forecast: "4.75%", previous: "5.00%" },
  { time: "Wednesday, 20:30", currency: "USD", event: "FOMC Press Conference", impact: "high", forecast: "--", previous: "--" },
  { time: "Thursday, 13:45", currency: "EUR", event: "ECB Interest Rate Decision", impact: "high", forecast: "3.40%", previous: "3.65%" },
  { time: "Friday, 14:30", currency: "USD", event: "Non-Farm Employment Change (NFP)", impact: "high", forecast: "165K", previous: "175K" },
  { time: "Friday, 14:30", currency: "USD", event: "Unemployment Rate", impact: "medium", forecast: "4.1%", previous: "4.0%" }
];

export default function MarketIntelligence() {
  const [news, setNews] = useState<NewsArticle[]>(MOCK_NEWS_FALLBACK);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState<string>("");

  const fetchLiveNews = async () => {
    const fmpKey = import.meta.env.VITE_FMP_API_KEY;
    if (!fmpKey) return;
    
    setLoading(true);
    try {
      const res = await fetch(
        `https://financialmodelingprep.com/stable/stock_news?limit=5&apikey=${fmpKey}`
      );
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setNews(data.map(item => ({
          symbol: item.symbol || "MARKETS",
          publishedDate: item.publishedDate,
          title: item.title,
          image: item.image || "",
          site: item.site || "Financial Source",
          text: item.text,
          url: item.url
        })));
      }
      setLastSync(new Date().toLocaleTimeString());
    } catch (e) {
      console.error("Failed to fetch stock news:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveNews();
    const interval = setInterval(fetchLiveNews, 60000); // sync news every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="news" className="py-24 relative overflow-hidden bg-background border-t border-gold/10">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Core Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4">
            <Globe className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">MARKET INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Live Global <span className="text-gradient-gold">News & Economic Calendar</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            Monitor macro interest rate events, NFP schedules, and real-time breaking market developments directly sourced from international financial flows.
          </p>
        </div>

        {/* Intelligence Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Block: News Feed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Block Title */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <Newspaper className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg font-bold text-foreground tracking-wide uppercase">
                    Breaking Macro Feed
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {lastSync && (
                    <span className="text-[10px] font-mono text-foreground/45">News synced: {lastSync}</span>
                  )}
                  <button 
                    onClick={fetchLiveNews}
                    disabled={loading}
                    className="p-1.5 rounded bg-navy-lighter hover:border-gold/30 border border-transparent transition-all duration-300 flex items-center justify-center"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-gold" : "text-foreground/60"}`} />
                  </button>
                </div>
              </div>

              {/* News Articles Cards */}
              <div className="space-y-4">
                {news.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-xl border border-border/40 bg-navy-light/30 hover:border-gold/25 hover:bg-navy-light/45 transition-all duration-300 relative group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-wide">
                          <span className="text-gold-light bg-gold/5 px-2 py-0.5 rounded border border-gold/10 uppercase">
                            {item.symbol}
                          </span>
                          <span className="text-foreground/45">{item.site}</span>
                          <span className="text-foreground/35">•</span>
                          <span className="text-foreground/35">{item.publishedDate.split(" ")[1]?.substring(0, 5) || item.publishedDate.substring(11, 16)} GMT</span>
                        </div>

                        <h4 className="text-sm font-bold text-foreground group-hover:text-gold-light transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                        
                        <p className="text-xs text-foreground/55 line-clamp-2 leading-relaxed">
                          {item.text}
                        </p>
                      </div>

                      <div className="p-2 rounded-lg bg-background border border-border/50 text-foreground/45 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right Block: Economic Calendar (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-border/60 bg-navy-light/45 backdrop-blur-md p-6 lg:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Background luxury highlights */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Block Title */}
              <div className="flex items-center gap-2.5 border-b border-border/40 pb-6 mb-6">
                <Calendar className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-lg font-bold text-foreground tracking-wide uppercase">
                  Institutional Calendar
                </h3>
              </div>

              {/* Economic Calendar List */}
              <div className="space-y-4">
                {CALENDAR_EVENTS.map((evt, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl border border-border/40 bg-background/30 flex flex-col justify-between gap-3 font-sans hover:border-gold/15 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-foreground/45 block mb-1">{evt.time}</span>
                        <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                          <span className="px-1.5 py-0.2 rounded bg-foreground/10 text-foreground font-mono text-[9px]">{evt.currency}</span>
                          {evt.event}
                        </h4>
                      </div>

                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        evt.impact === "high" 
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" 
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {evt.impact} impact
                      </span>
                    </div>

                    <div className="flex justify-start gap-8 border-t border-border/20 pt-2 text-[10px] font-mono">
                      <div>
                        <span className="text-foreground/45 block">Forecast:</span>
                        <span className="font-bold text-foreground">{evt.forecast}</span>
                      </div>
                      <div>
                        <span className="text-foreground/45 block">Previous:</span>
                        <span className="font-bold text-foreground">{evt.previous}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* High Impact Alert Banner */}
            <div className="mt-6 p-4 rounded-xl border border-rose-500/25 bg-rose-500/[0.03] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-foreground/75 leading-relaxed">
                <strong className="text-rose-400 font-bold uppercase">Volatility Warning:</strong> High-impact events (red badges) are prime catalysts for slippage, severe spreads expansion, and rapid liquidity spikes. Practicing roadmap management during news releases is vital.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
