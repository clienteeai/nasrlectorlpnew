import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, User, X, Sparkles } from "lucide-react";

interface BlogArticle {
  id: string;
  title: string;
  category: "Strategy" | "Risk Management" | "Trading Psychology";
  date: string;
  readTime: string;
  summary: string;
  author: string;
  image: string;
  content: string;
}

const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "liquidity-swings",
    title: "Mastering Institutional Liquidity Swings and Stop Hunts",
    category: "Strategy",
    date: "May 18, 2026",
    readTime: "6 min read",
    summary: "Why price moves past obvious support and resistance swing structures before moving in your expected direction. Learn how to map liquidity pools.",
    author: "N. Nasr, Lead Strategist",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    content: `Have you ever placed a buy order at an obvious support line, only to see price aggressively drop beneath your support, stop you out, and immediately reverse to head straight for your original target?

You have just been the victim of an **Institutional Liquidity Swing**, commonly known in retail spaces as a "Stop Hunt."

### 🔍 Understanding the Mechanics
Trading volume is not infinite. For a major financial institution (like a central bank or global investment firm) to enter a massive **buy order** of 1,000 standard lots, there must be a matching pool of **sell orders** to fill it. 

Where do these pools of sell orders rest? They rest beneath obvious **swing lows, support levels, and double bottoms**.

Institutions intentionally drive price down past these technical levels to:
1. Tap into the resting stop-loss orders of retail buyers (which are market sell stops).
2. Trigger the orders of breakout sellers (which are also market sell stops).

This massive collection of sell orders provides the necessary **liquidity** for the institution to easily fill their massive buy positions at the lowest possible wholesale price.

### 🛠️ How to Adapt Your Entries
* **Stop Front-Running Obvious Support:** Do not place your entry orders exactly at the support line. Wait for price to drop beneath the swing low, tap into the liquidity pool, and show an aggressive rejection.
* **Map Key Liquidity Zones (SSL/BSL):** Identify major swing highs (Buy-Side Liquidity) and swing lows (Sell-Side Liquidity). Expect high volatility and fakeouts past these levels.
* **Filter by Session Timing:** Genuine institutional liquidity raids typically happen during the **London Open (08:00 GMT)** and **New York Open (13:30 GMT)**. Avoid placing structural entries outside these core volatility hours.`
  },
  {
    id: "risk-one-percent",
    title: "The Core Rule of 1% Risk Sizing: The Mathematics of Longevity",
    category: "Risk Management",
    date: "May 15, 2026",
    readTime: "5 min read",
    summary: "Why keeping your drawdown consistent is the mathematical secret to trading longevity. Understand account leverage and position calculators.",
    author: "Academy Risk Core",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    content: `Most amateur traders fail because they treat trading like a casino. They size their positions by gut feeling, risking 10%, 20%, or even 50% of their capital on a single "highly confident" trade.

In institutional fund management, confidence is irrelevant. The only metric that matters is **Mathematical Longevity**.

### 📉 The Math of Capital Drawdown
If you risk 10% of your account per trade and lose 5 trades in a row (a very common statistical occurrence), you are down 50%. 

To recover a **50% loss**, you must generate a **100% return** just to get back to breakeven! 

Compare this to the **1% Risk Rule**:
* 5 consecutive losses at 1% per trade results in a minor **5.00% drawdown**.
* To recover a 5% loss, you only need to make a **5.26% return** to reach breakeven.

By keeping your risk strictly limited to **1.00%** per trade, you ensure that you can survive a massive statistical streak of 20 losses in a row and still have 80% of your capital intact to continue trading.

### 🎛️ Implementing Strict Risk Protocols
1. **Always Use a Stop Loss:** Never enter a market order without a hard, pre-calculated stop-loss value registered at your broker.
2. **Calculate Before Entering:** Utilize the Nasr Lector Risk Calculator before clicking buy or sell. Plug in your stop loss distance in pips and your capital to get the exact fractional lot size.
3. **Never Adjust Stops in Drawdown:** Once a trade is active, never move your stop loss further away to "give the trade more room." Doing so instantly voids your risk math and leads to catastrophic losses.`
  },
  {
    id: "revenge-trading",
    title: "Conquering Revenge Trading Patterns via Emotional Logging",
    category: "Trading Psychology",
    date: "May 12, 2026",
    readTime: "7 min read",
    summary: "Understanding the brain's hormonal reaction to losses and how to utilize soft-lock checklists to safeguard your active equity curves.",
    author: "Dr. A. Vance, Trading Psychologist",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80",
    content: `Revenge trading is the single most common reason traders blow their funded accounts. It is defined as entering immediate, unplanned, high-volume trades after a loss in an emotional attempt to "make the money back."

### 🧠 The Hormonal Chemistry of Financial Loss
When you take a financial loss, your brain registers it not just as a numbers change, but as a **direct threat to your survival**. 

This triggers your amygdala—the ancient threat detection center—releasing a massive surge of adrenaline and cortisol. This places your brain in a state of **"fight or flight."**

In this state:
* Your rational prefrontal cortex (responsible for logical planning and risk calculations) is temporarily bypassed.
* Your emotional amygdala takes complete control, urging you to fight back (revenge trade) to remove the pain of the loss.

Because you are trading purely on emotion, these revenge trades are almost always entered with zero plan, high lot sizes, and poor execution, resulting in **even bigger losses** and starting a destructive spiral.

### 🛠️ How to Enforce Discipline Rules
* **The 2-Loss Daily Limit:** Have a hard rule. If you take 2 losses in a single day, you shut down your platform. No exceptions.
* **The Cool-down Protocol:** After any loss, force yourself to step away from your trading desk for a minimum of 15 minutes. Walk, drink water, or do breathing exercises to lower your cortisol levels.
* **Utilize AI Soft Lockouts:** The Nasr Lector AI Diary automatically detects emotional patterns. If you log a loss, utilize the cool-down quizzes to force your brain back into a analytical state before taking another setup.`
  }
];

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background border-t border-gold/10">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4 animate-pulse">
            <BookOpen className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">EDUCATIONAL RESOURCE</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Academy <span className="text-gradient-gold">Articles & Insights</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            Read professional insights written by our lead strategists and trading psychologists. Build your knowledge base with proven institutional models.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group rounded-2xl border border-border/50 bg-navy-light/25 hover:border-gold/20 transition-all duration-400 overflow-hidden flex flex-col justify-between cursor-pointer shadow-lg"
            >
              {/* Image Header */}
              <div className="relative aspect-video overflow-hidden border-b border-border/40">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center text-[10px] font-bold text-foreground bg-navy/90 border border-border/60 uppercase px-2 py-0.5 rounded tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-foreground/45 mb-3.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-gold-light transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-xs text-foreground/55 line-clamp-3 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-gold group-hover:text-gold-light transition-colors duration-300">
                  <span className="flex items-center gap-1 font-mono text-foreground/45 text-[10px]">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                  
                  <span className="flex items-center gap-1 shrink-0">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Premium Reader Modal Overlay */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in overflow-y-auto">
          <div className="bg-navy-light/95 border border-border/60 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative animate-scale-in max-h-[85vh] flex flex-col justify-between font-sans">
            
            {/* Modal Header */}
            <div className="bg-navy border-b border-border/40 px-6 py-4 flex items-center justify-between z-10 shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-bold text-foreground/60 uppercase tracking-luxury font-sans">Academy Article Library</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg hover:bg-foreground/5 text-foreground/75 hover:text-foreground transition-all duration-300 border border-transparent hover:border-border/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Viewport */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 select-text max-h-[500px]">
              
              {/* Category & Date */}
              <div className="flex items-center gap-4 text-xs font-mono text-foreground/45">
                <span className="px-2.5 py-0.5 rounded bg-gold/10 text-gold font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span>Published: {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                {selectedArticle.title}
              </h3>

              {/* Author Tagline */}
              <div className="flex items-center gap-2 text-xs text-foreground/45 border-b border-border/20 pb-4">
                <User className="w-4 h-4 text-gold/60" />
                <span>Written by: <strong className="text-foreground/70 font-semibold">{selectedArticle.author}</strong></span>
              </div>

              {/* Rich Body Text with spacing */}
              <div 
                className="text-foreground/80 text-sm leading-relaxed space-y-5 whitespace-pre-line font-medium pr-1"
                style={{ contentVisibility: "auto" }}
              >
                {selectedArticle.content}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-navy border-t border-border/40 px-6 py-4 flex items-center justify-between z-10 shrink-0">
              <span className="text-[10px] text-foreground/45 font-mono uppercase tracking-wider">Nasr Lector White-Label Academy © 2026</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-lg bg-gradient-gold text-[#070b14] font-extrabold text-xs hover:shadow-gold/10 shadow transition-all duration-300"
              >
                Close Reader
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
