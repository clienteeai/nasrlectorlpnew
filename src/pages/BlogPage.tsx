import React, { useState, useEffect } from "react";
import MarketTicker from "@/components/MarketTicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, BookOpen, Clock, Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react";

interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  description: string;
  content: string;
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/blogArticles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog articles database:", err);
        setIsLoading(false);
      });
  }, []);

  // Filter categories
  const categories = ["All", "Forex", "Crypto", "Stocks & Indices", "Risk Management", "Psychology"];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All" || 
      article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const KEYWORD_MAP: { [keyword: string]: string } = {
    "order block": "mastering-institutional-order-blocks-on-eur-usd-mapping-smart-money-entries",
    "order blocks": "mastering-institutional-order-blocks-on-eur-usd-mapping-smart-money-entries",
    "liquidity sweep": "identifying-liquidity-sweeps-below-swing-lows-a-practical-stop-hunt-strategy",
    "liquidity sweeps": "identifying-liquidity-sweeps-below-swing-lows-a-practical-stop-hunt-strategy",
    "revenge trading": "conquering-revenge-trading-how-to-reset-cortisol-levels-after-a-loss",
    "emotional discipline": "conquering-revenge-trading-how-to-reset-cortisol-levels-after-a-loss",
    "leverage": "understanding-leverage-how-to-prevent-margin-calls-on-high-volatility-feeds",
    "stop loss": "stop-loss-invalidation-zones-sizing-trades-for-structural-rejection-points",
    "stop losses": "stop-loss-invalidation-zones-sizing-trades-for-structural-rejection-points",
    "sizing calculator": "standard-lots-vs-mini-lots-vs-micro-lots-the-sizing-calculator-guide",
    "risk management": "the-mathematics-of-1-risk-how-to-build-your-first-sizing-roadmap",
    "forex": "interest-rate-differentials-how-fed-and-ecb-macro-decisions-drive-forex-trends",
    "crypto": "crypto-liquidity-sweeps-how-high-beta-crypto-exchanges-raid-stop-losses",
    "cryptocurrency": "crypto-liquidity-sweeps-how-high-beta-crypto-exchanges-raid-stop-losses",
    "stocks": "corporate-earnings-releases-hedging-volatility-and-sizing-stocks-positions-safely",
    "stock": "corporate-earnings-releases-hedging-volatility-and-sizing-stocks-positions-safely"
  };

  const parseKeywords = (plainText: string) => {
    const keywords = Object.keys(KEYWORD_MAP).sort((a, b) => b.length - a.length);
    const escaped = keywords.map(kw => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    const tokens = plainText.split(regex);

    return tokens.map((token, idx) => {
      const lowerToken = token.toLowerCase();
      if (KEYWORD_MAP[lowerToken]) {
        const slug = KEYWORD_MAP[lowerToken];
        // Do not link an article to itself
        if (selectedArticle && selectedArticle.slug === slug) {
          return token;
        }
        return (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const target = articles.find((a) => a.slug === slug);
              if (target) {
                setSelectedArticle(target);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-gold font-normal hover:underline cursor-pointer border-b border-dashed border-gold/40 mx-0.5 inline"
          >
            {token}
          </button>
        );
      }
      return token;
    });
  };

  const renderParagraphText = (text: string) => {
    // Regex splits by both bold markdown "**text**" and link markdown "[text](#slug)"
    const regex = /(\*\*.*?\*\*|\[.*?\]\(#.*?\))/g;
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="font-extrabold text-foreground">{parseKeywords(boldText)}</strong>;
      }
      
      if (part.startsWith("[") && part.includes("](#")) {
        const match = part.match(/\[(.*?)\]\(#(.*?)\)/);
        if (match) {
          const linkText = match[1];
          const slug = match[2];
          return (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const target = articles.find((a) => a.slug === slug);
                if (target) {
                  setSelectedArticle(target);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-gold font-normal hover:underline cursor-pointer border-b border-dashed border-gold/40 mx-0.5 inline"
            >
              {linkText}
            </button>
          );
        }
      }
      
      return <span key={index}>{parseKeywords(part)}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Real-time Moving Market Ticker at absolute top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-11 bg-[#0a0a0d]">
        <MarketTicker />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Header for Standalone Page */}
      <section className="relative pt-16 pb-12 overflow-hidden bg-navy-light/10 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4">
            <span className="text-xs font-semibold text-gold tracking-luxury uppercase">EDUCATIONAL WIRE</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            NASR Lector <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-base text-foreground/60 font-sans max-w-2xl mx-auto">
            Browse our comprehensive, search-engine-indexed library of 100+ structural price-action articles, math-risk sizing tutorials, and clinical trading psychology logs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
        {selectedArticle ? (
          /* IMMERSIVE DETAILED ARTICLE READER */
          <article className="max-w-3xl mx-auto glass-card p-6 md:p-12 rounded-2xl animate-fade-in">
            {/* Back Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-2 text-gold font-bold text-sm mb-8 hover:text-gold-light transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Article Desk
            </button>

            {/* Category Pill */}
            <div className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-xs font-bold text-gold uppercase tracking-wider mb-4">
              {selectedArticle.category}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 font-serif">
              {selectedArticle.title}
            </h1>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-foreground/50 border-y border-border/30 py-4 mb-8 font-sans">
              <span className="font-bold text-foreground">By {selectedArticle.author}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gold" />
                {selectedArticle.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gold" />
                {selectedArticle.readTime}
              </span>
            </div>

            {/* Parsed Educational Markdown Content */}
            <div className="prose prose-lg max-w-none text-foreground/80 font-sans leading-relaxed space-y-6">
              {selectedArticle.content.split("\n").map((line, index) => {
                const trimmed = line.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("# ")) {
                  return <h1 key={index} className="text-3xl font-bold font-serif text-foreground mt-8 mb-4">{trimmed.replace("# ", "")}</h1>;
                }
                if (trimmed.startsWith("## ")) {
                  return <h2 key={index} className="text-2xl font-bold font-serif text-foreground mt-6 mb-3">{trimmed.replace("## ", "")}</h2>;
                }
                if (trimmed.startsWith("### ")) {
                  return <h3 key={index} className="text-xl font-bold font-serif text-foreground mt-4 mb-2">{trimmed.replace("### ", "")}</h3>;
                }
                if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-foreground/75 my-2">
                      <li>{renderParagraphText(trimmed.replace(/^[-*]\s+/, ""))}</li>
                    </ul>
                  );
                }
                if (/^\d+\.\s+/.test(trimmed)) {
                  return (
                    <ol key={index} className="list-decimal pl-6 space-y-2 text-foreground/75 my-2">
                      <li>{renderParagraphText(trimmed.replace(/^\d+\.\s+/, ""))}</li>
                    </ol>
                  );
                }
                return <p key={index} className="text-foreground/80 leading-relaxed mb-4">{renderParagraphText(trimmed)}</p>;
              })}
            </div>

            {/* Back Button Bottom */}
            <hr className="border-border/30 my-10" />
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:text-gold-light transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </button>
            </div>
          </article>
        ) : (
          /* BLOG ARTICLE DESK GRID */
          <div className="space-y-8 animate-fade-in">
            {/* Search and Category Filters Panel */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-navy-light/20 p-6 rounded-2xl border border-border/40">
              
              {/* Category tabs */}
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 uppercase tracking-wider border ${
                      activeCategory === cat
                        ? "bg-gradient-gold text-[#070b14] font-extrabold border-transparent"
                        : "border-border/50 text-foreground/75 hover:border-gold/30 hover:text-gold"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Text Search Field */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/45" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-border/60 bg-background/50 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold/30"
                />
              </div>

            </div>

            {/* Active Filters Summary */}
            <div className="flex items-center justify-between text-xs text-foreground/50 px-2 font-sans">
              <span>Showing {filteredArticles.length} of {articles.length} premium articles</span>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-gold underline font-bold"
                >
                  Clear search query
                </button>
              )}
            </div>

            {/* Articles Loading Indicator */}
            {isLoading ? (
              <div className="py-24 text-center">
                <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
                <p className="text-foreground/60 font-sans">Synchronizing educational archives...</p>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-20 glass-card rounded-2xl border border-dashed border-border/60">
                <BookOpen className="w-12 h-12 text-gold/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No Matching Archives Found</h3>
                <p className="text-foreground/60 font-sans max-w-md mx-auto">
                  We couldn't find any articles matching your search criteria. Try using different keywords or broadening your category filter.
                </p>
              </div>
            ) : (
              /* Grid Layout */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-gold/30 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      setSelectedArticle(article);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div>
                      {/* Pill + Category */}
                      <div className="flex items-center justify-between mb-4 font-sans">
                        <span className="text-[10px] font-extrabold uppercase tracking-luxury text-gold border border-gold/25 bg-gold/5 px-2.5 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-foreground/55">
                          <Clock className="w-3 h-3 text-gold" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-serif mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-6 line-clamp-3">
                        {article.description}
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="flex items-center justify-between border-t border-border/30 pt-4 mt-auto font-sans">
                      <span className="text-xs font-bold text-foreground">{article.author}</span>
                      <span className="text-xs text-gold font-bold group-hover:underline inline-flex items-center gap-1">
                        Read Blueprint
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
