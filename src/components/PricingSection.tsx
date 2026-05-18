import React, { useState } from "react";
import { Check, HelpCircle, Sparkles } from "lucide-react";

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Lector Lite",
    tagline: "For aspiring traders testing their discipline.",
    monthlyPrice: 0,
    annualPrice: 0,
    popular: false,
    features: [
      "1 Custom AI Learning Roadmap",
      "Introductory Academy Lessons (Level 1)",
      "Standard Trading Terms Glossary",
      "AI Mentor access (3 queries per day)",
      "Community General Channel access"
    ],
    ctaText: "Start For Free",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector Pro",
    tagline: "For dedicated traders seeking consistency.",
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    features: [
      "Unlimited AI Learning Roadmaps",
      "Full Adaptive Academy Curriculum (Levels 1-3)",
      "24/7 Dedicated AI Mentor (Fast Response)",
      "Progression-Locked Skill Quizzes",
      "Interactive Trading Diary & Logbook",
      "Smart Risk & Lot Size Calculators",
      "Weekly live analysis recording seats"
    ],
    ctaText: "Unlock Pro Access",
    ctaLink: "https://trade.nasrlector.com/landing?signup=1"
  },
  {
    name: "Lector Elite",
    tagline: "For professional traders scaling to prop sizes.",
    monthlyPrice: 149,
    annualPrice: 119,
    popular: false,
    features: [
      "Custom 1-on-1 AI Curriculum Tuning",
      "Advanced Trading Simulator (All Assets)",
      "Priority AI Mentor Core (Deep Diagnostics)",
      "Daily Market Briefings & Trade Setups",
      "Live Trading Room Seats (Weekly Interactive)",
      "Private Institutional Discord & VIP Events",
      "Direct Priority Support & Roadmap Updates"
    ],
    ctaText: "Go Institutional",
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
            Select the plan tailored to your trading status. Start for free to map your skills, or unlock Pro to run full AI adaptivity and discipline logging.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold transition-colors duration-300 ${billingCycle === "monthly" ? "text-foreground" : "text-foreground/45"}`}>
              Monthly
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
              Annual
              <span className="inline-flex items-center text-[10px] font-bold text-foreground bg-gold tracking-wide px-2 py-0.5 rounded-full animate-bounce">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
            const isFree = price === 0;
            
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
                    MOST POPULAR
                  </div>
                )}

                {/* Info Header */}
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? "text-gold" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-foreground/50 font-sans mb-8 leading-relaxed">
                    {tier.tagline}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-5xl font-mono font-bold tracking-tight text-foreground">
                      {isFree ? "Free" : `$${price}`}
                    </span>
                    {!isFree && (
                      <span className="text-sm text-foreground/45 font-sans font-medium">
                        / month
                      </span>
                    )}
                  </div>

                  {billingCycle === "annual" && !isFree && (
                    <div className="text-xs text-gold/80 font-semibold mb-6 bg-gold/5 border border-gold/10 rounded py-1 px-2.5 inline-block font-mono">
                      Billed annually (Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/year)
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
          All signups are subject to Nasr Lector white-label terms of service. For direct enterprise licensing or team packages, please contact platform integrations.
        </div>

      </div>
    </section>
  );
}
