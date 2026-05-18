import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Real-time Moving Market Ticker at absolute top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-11 bg-[#0a0a0d]">
        <MarketTicker />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Header for Standalone Page */}
      <section className="relative pt-16 pb-8 overflow-hidden bg-navy-light/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4">
            <span className="text-xs font-semibold text-gold tracking-luxury uppercase">FLEXIBLE ENROLLMENT</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Choose Your <span className="text-gradient-gold">Academy License</span>
          </h1>
          <p className="text-base text-foreground/60 font-sans max-w-2xl mx-auto">
            Review our 4 tailored educational access pathways including Lector Free, Monthly Pro, VIP Setups pass, and our prestigious one-time Lifetime legacy license.
          </p>
        </div>
      </section>

      {/* Main Pricing Section Component */}
      <div className="pb-24">
        <PricingSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
