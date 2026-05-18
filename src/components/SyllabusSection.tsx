import React from "react";
import { BookOpen, Video, Clock, Lock, ShieldCheck, HelpCircle } from "lucide-react";

interface SyllabusModule {
  number: string;
  name: string;
  badge: "Starter" | "Intermediate" | "Advanced";
  lessonsCount: number;
  duration: string;
  topics: string[];
  unlockStatus: "Free Access" | "Unlock with Account" | "Unlock via Trading";
}

const ACADEMY_MODULES: SyllabusModule[] = [
  {
    number: "01",
    name: "The Trading Foundation",
    badge: "Starter",
    lessonsCount: 6,
    duration: "2.5 Hours",
    topics: ["Market Structure Mechanics", "Leverage & Margin Math", "Pip Value Calculations", "Broker Bid/Ask Spreads"],
    unlockStatus: "Free Access"
  },
  {
    number: "02",
    name: "Risk Management Blueprint",
    badge: "Starter",
    lessonsCount: 8,
    duration: "3.2 Hours",
    topics: ["Precise Position Sizing Rules", "R:R Ratio Maximization", "Drawdown Prevention Tactics", "The 1% Rule Mechanics"],
    unlockStatus: "Free Access"
  },
  {
    number: "03",
    name: "Intermediate Price Action",
    badge: "Intermediate",
    lessonsCount: 10,
    duration: "4.5 Hours",
    topics: ["Support & Resistance Reality", "Moving Average Filters", "Dynamic Trendline Breaks", "High-Volume Candlestick Clues"],
    unlockStatus: "Unlock with Account"
  },
  {
    number: "04",
    name: "AI-Assisted Discipline & Diary",
    badge: "Intermediate",
    lessonsCount: 7,
    duration: "3.0 Hours",
    topics: ["Emotion Tracking Setups", "AI Psychology Drawdown Locks", "How to Build a Backtest Logbook", "Conquering FOMO Habits"],
    unlockStatus: "Unlock with Account"
  },
  {
    number: "05",
    name: "Advanced Order Flow Tactics",
    badge: "Advanced",
    lessonsCount: 12,
    duration: "6.0 Hours",
    topics: ["Institutional Liquidity Swings", "Order Blocks & Fair Value Gaps", "Buy-Side vs Sell-Side Traps", "Session Timing Volatility"],
    unlockStatus: "Unlock via Trading"
  },
  {
    number: "06",
    name: "The Funded Scale-Up Roadmap",
    badge: "Advanced",
    lessonsCount: 9,
    duration: "4.8 Hours",
    topics: ["Prop Firm Evaluation Guides", "Daily Loss Limit Management", "Sizing up for Scaling Plans", "Passing Certification Quizzes"],
    unlockStatus: "Unlock via Trading"
  }
];

export default function SyllabusSection() {
  return (
    <section id="syllabus" className="py-24 relative overflow-hidden bg-background border-t border-gold/10">
      {/* Decorative luxury gradient spots */}
      <div className="absolute bottom-0 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">ACADEMY SYLLABUS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            The Complete <span className="text-gradient-gold">Academy Curriculum</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            We don't teach shortcuts. We provide a professional, structured road from complete fundamentals to institutional funding. Explore the active training modules below.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACADEMY_MODULES.map((mod) => {
            const isFree = mod.unlockStatus === "Free Access";
            const isAccount = mod.unlockStatus === "Unlock with Account";
            
            return (
              <div
                key={mod.number}
                className="p-6 rounded-2xl border border-border/50 bg-navy-light/35 backdrop-blur-sm flex flex-col justify-between hover:border-gold/20 transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-mono font-bold text-gold/30 group-hover:text-gold/50 transition-colors duration-300">
                      {mod.number}
                    </span>
                    
                    <span className={`text-[10px] font-bold tracking-luxury uppercase px-2 py-0.5 rounded ${
                      mod.badge === "Starter" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      mod.badge === "Intermediate" ? "bg-gold/10 text-gold border border-gold/20" :
                      "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    }`}>
                      {mod.badge}
                    </span>
                  </div>

                  {/* Module Name */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                    {mod.name}
                  </h3>

                  {/* Core Lesson Stats */}
                  <div className="flex items-center gap-4 text-xs text-foreground/45 font-sans mb-6">
                    <span className="flex items-center gap-1">
                      <Video className="w-3.5 h-3.5" />
                      {mod.lessonsCount} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.duration}
                    </span>
                  </div>

                  <hr className="border-border/30 mb-6" />

                  {/* Topics Checklist */}
                  <span className="text-[10px] font-bold tracking-luxury text-foreground/45 uppercase block mb-3">KEY SYLLABUS TOPICS</span>
                  <ul className="space-y-2.5 mb-8">
                    {mod.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/75 font-sans leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Unlock Trigger */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all duration-300 ${
                  isFree 
                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400" 
                    : isAccount 
                    ? "bg-gold/5 border-gold/20 text-gold"
                    : "bg-navy-lighter border-border/40 text-foreground/60"
                }`}>
                  <span className="tracking-luxury uppercase">
                    {mod.unlockStatus}
                  </span>
                  
                  {isFree ? (
                    <ShieldCheck className="w-4 h-4" />
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://trade.nasrlector.com/landing?signup=1"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
              color: '#0a0a0d',
              borderRadius: '50px',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.35)',
            }}
          >
            Access Free Starter Modules
          </a>
        </div>

      </div>
    </section>
  );
}
