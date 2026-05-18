import React, { useState } from "react";
import { Check, Sparkles, AlertCircle } from "lucide-react";

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isFree?: boolean;
  isLifetime?: boolean;
  lifetimePrice?: number;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Lector Free",
    tagline: "Start free. Unlock premium academy lessons and roadmap videos by utilizing broker services.",
    monthlyPrice: 0,
    annualPrice: 0,
    isFree: true,
    popular: false,
    features: [
      "1 Custom AI Learning Roadmap",
      "Introductory Academy Videos (Level 1)",
      "Standard Trading Terms Glossary",
      "AI Mentor access (3 queries per day)",
      "Unlock Level 2 & 3 via Broker Account Activity",
      "Unlock unlimited AI queries via active trading"
    ],
    ctaText: "Start For Free",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector Pro",
    tagline: "Comprehensive white-labeled AI-guided training system.",
    monthlyPrice: 490,
    annualPrice: 390,
    popular: true,
    features: [
      "Full Adaptive Academy Curriculum (Levels 1-3)",
      "Unlimited AI Learning Roadmaps",
      "24/7 Dedicated AI Mentor Support",
      "Progression-Locked Skill Quizzes",
      "Interactive Trading Diary & Logbook",
      "Smart Risk & Lot Size Calculators",
      "Free access via broker account activation"
    ],
    ctaText: "Unlock Pro Access",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector VIP",
    tagline: "Complete system access with direct daily diagnostics and setups.",
    monthlyPrice: 990,
    annualPrice: 790,
    popular: false,
    features: [
      "Everything in Lector Pro",
      "Priority AI Mentor Core (Deep Diagnostics)",
      "Daily Market Briefings & Real Trade Setups",
      "Weekly Live Webinar Seat & Q&A Access",
      "Direct Curriculum Tuner Updates",
      "VIP General Lounge access"
    ],
    ctaText: "Unlock VIP Experience",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector Lifetime",
    tagline: "Infinite institutional pass to all current and future releases.",
    monthlyPrice: 5000,
    annualPrice: 5000,
    isLifetime: true,
    lifetimePrice: 5000,
    popular: false,
    features: [
      "Lifetime Untangled Academy License",
      "All Future AI Roadmap Upgrades Free",
      "Private Institutional Discord Access",
      "VIP Live Trading Room Seats (Lifetime)",
      "Personalized 1-on-1 AI Training Plan Tuning",
      "Priority Direct Support Hotlines"
    ],
    ctaText: "Get Lifetime License",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Decorative Gold Radial Glows for luxury backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[90rem] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">ACADEMY PLANS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Choose Your Path.<br />
            <span className="text-gradient-gold">Accelerate Your Mastery.</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            Select the professional plan tailored to your trading commitment and financial growth targets. Start for free or unlock premium access via broker trade activity.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold transition-colors duration-300 ${billingCycle === "monthly" ? "text-foreground" : "text-foreground/45"}`}>
              Monthly Billing
            </span>
            
            <button
              onClick={() => setBillingCycle(prev => prev === "monthly" ? "annual" : "monthly")}
              className="relative w-16 h-8 rounded-full bg-navy-lighter border border-border/60 p-1 transition-all duration-500 hover:border-gold/30"
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-gold shadow transition-all duration-500 transform ${
                  billingCycle === "annual" ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors duration-300 ${billingCycle === "annual" ? "text-foreground font-bold" : "text-foreground/45"}`}>
              Annual Billing
              <span className="inline-flex items-center text-[10px] font-bold text-foreground bg-gold tracking-wide px-2 py-0.5 rounded-full animate-bounce">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (4 columns on XL, 2 on MD, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isFree = tier.isFree;
            const isLifetime = tier.isLifetime;
            const price = isFree 
              ? 0 
              : isLifetime 
              ? tier.lifetimePrice 
              : (billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice);
            
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between p-6 lg:p-8 rounded-2xl transition-all duration-500 group select-none ${
                  tier.popular
                    ? "bg-navy-light/95 border-2 border-gold/80 shadow-[0_0_55px_rgba(212,175,55,0.15)] xl:scale-105 z-10"
                    : "bg-navy-light/45 border border-border/50 hover:border-gold/25"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold border border-gold-light text-[#070b14] font-extrabold text-xs tracking-luxury uppercase z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    MOST RECOMMENDED
                  </div>
                )}

                {/* Info Header */}
                <div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${tier.popular ? "text-gold" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-xs text-foreground/50 font-sans mb-6 leading-relaxed min-h-[48px]">
                    {tier.tagline}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-mono font-bold tracking-tight text-foreground">
                      {isFree ? "Free" : `$${price?.toLocaleString()}`}
                    </span>
                    {!isFree ? (
                      <span className="text-xs text-foreground/45 font-sans font-medium">
                        {isLifetime ? " one-time" : " / month"}
                      </span>
                    ) : (
                      <span className="text-[10px] text-gold/80 font-semibold font-mono tracking-wide bg-gold/5 border border-gold/10 px-2 py-0.5 rounded ml-2">
                        NEVER PAY
                      </span>
                    )}
                  </div>

                  {billingCycle === "annual" && !isFree && !isLifetime && (
                    <div className="text-[10px] text-gold/80 font-semibold mb-6 bg-gold/5 border border-gold/10 rounded py-1 px-2.5 inline-block font-mono">
                      Billed annually (Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/year)
                    </div>
                  )}
                  {isFree && (
                    <div className="text-[10px] text-emerald-400 font-semibold mb-6 bg-emerald-500/5 border border-emerald-500/10 rounded py-1 px-2.5 inline-block font-mono">
                      Unlock advanced levels through trading activity
                    </div>
                  )}
                  {isLifetime && (
                    <div className="text-[10px] text-emerald-400 font-semibold mb-6 bg-emerald-500/5 border border-emerald-500/10 rounded py-1 px-2.5 inline-block font-mono">
                      Unlimited access, never billed again
                    </div>
                  )}

                  <hr className="border-border/30 my-5" />

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/80 font-sans">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={tier.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3.5 rounded-xl font-bold tracking-luxury text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-gradient-gold text-[#070b14] font-extrabold shadow-lg shadow-gold/20 hover:shadow-gold/35 hover:-translate-y-0.5"
                        : "bg-navy-lighter text-foreground border border-border hover:border-gold/40 hover:-translate-y-0.5"
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sales Closing Tip Banner */}
        <div className="mt-12 p-4 rounded-xl border border-gold/25 bg-gold/[0.03] backdrop-blur-sm max-w-3xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <p className="text-xs text-foreground/75 font-sans leading-relaxed">
            <strong className="text-gold font-bold">Broker Economy Integration:</strong> Registering a live trading account with our partner broker instantly unlocks Lector Pro access completely free of charge. Trading activity builds academy experience points (XP) to unlock advanced modules, simulated diagnostic terminals, and elite webinar seats automatically.
          </p>
        </div>

        {/* Footnote Disclaimer */}
        <div className="text-center mt-8 text-xs text-foreground/45 max-w-xl mx-auto font-sans">
          All subscriptions are subject to Nasr Lector white-label academy terms. For direct corporate licensing or institutional team access, please contact integrations support.
        </div>

      </div>
    </section>
  );
}
