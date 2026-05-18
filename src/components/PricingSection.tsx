import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isLifetime?: boolean;
  lifetimePrice?: number;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Lector Pro",
    tagline: "Comprehensive white-labeled AI-guided training system.",
    monthlyPrice: 490,
    annualPrice: 390,
    popular: false,
    features: [
      "Full Adaptive Academy Curriculum (Levels 1-3)",
      "Unlimited AI Learning Roadmaps",
      "24/7 Dedicated AI Mentor Support",
      "Progression-Locked Skill Quizzes",
      "Interactive Trading Diary & Logbook",
      "Smart Risk & Lot Size Calculators"
    ],
    ctaText: "Enroll Now",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector VIP",
    tagline: "Complete system access with direct daily diagnostics and setups.",
    monthlyPrice: 990,
    annualPrice: 790,
    popular: true,
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
    monthlyPrice: 4900,
    annualPrice: 4900,
    isLifetime: true,
    lifetimePrice: 4900,
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

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">PRICING PACKAGES</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Choose Your Path.<br />
            <span className="text-gradient-gold">Accelerate Your Mastery.</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            Select the professional plan tailored to your trading commitment and financial growth targets.
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isLifetime = tier.isLifetime;
            const price = isLifetime 
              ? tier.lifetimePrice 
              : (billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice);
            
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between p-8 lg:p-10 rounded-2xl transition-all duration-500 group select-none ${
                  tier.popular
                    ? "bg-navy-light/90 border-2 border-gold/80 shadow-[0_0_50px_rgba(212,175,55,0.15)] md:scale-105 z-10"
                    : "bg-navy-light/50 border border-border/50 hover:border-gold/25"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold border border-gold-light text-navy font-bold text-xs tracking-luxury uppercase z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    MOST RECOMMENDED
                  </div>
                )}

                {/* Info Header */}
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? "text-gold" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-foreground/50 font-sans mb-8 leading-relaxed min-h-[40px]">
                    {tier.tagline}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-5xl font-mono font-bold tracking-tight text-foreground">
                      ${price?.toLocaleString()}
                    </span>
                    <span className="text-sm text-foreground/45 font-sans font-medium">
                      {isLifetime ? " one-time" : " / month"}
                    </span>
                  </div>

                  {billingCycle === "annual" && !isLifetime && (
                    <div className="text-xs text-gold/80 font-semibold mb-6 bg-gold/5 border border-gold/10 rounded py-1 px-2.5 inline-block font-mono">
                      Billed annually (Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/year)
                    </div>
                  )}
                  {isLifetime && (
                    <div className="text-xs text-emerald-400 font-semibold mb-6 bg-emerald-500/5 border border-emerald-500/10 rounded py-1 px-2.5 inline-block font-mono">
                      Unlimited access, never billed again
                    </div>
                  )}

                  <hr className="border-border/30 my-6" />

                  {/* Features List */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-sans">
                        <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
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
                    className={`w-full text-center py-4 rounded-xl font-bold tracking-luxury text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-gradient-gold text-navy shadow-lg shadow-gold/20 hover:shadow-gold/35 hover:-translate-y-0.5"
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

        {/* Footnote Disclaimer */}
        <div className="text-center mt-12 text-xs text-foreground/45 max-w-xl mx-auto font-sans">
          All subscriptions are subject to Nasr Lector white-label academy terms. For direct corporate licensing or institutional team access, please contact integrations support.
        </div>

      </div>
    </section>
  );
}
