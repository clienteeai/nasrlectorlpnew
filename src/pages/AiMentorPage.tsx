import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Header from "@/components/Header";
import AiMentorSection from "@/components/AiMentorSection";
import Footer from "@/components/Footer";

export default function AiMentorPage() {
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
            <span className="text-xs font-semibold text-gold tracking-luxury uppercase">24/7 COPILOT</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            AI Mentor <span className="text-gradient-gold">Core Station</span>
          </h1>
          <p className="text-base text-foreground/60 font-sans max-w-2xl mx-auto">
            Interact with our highly trained semantic LLM copilot tuned over 10,000+ hours of institutional price action data, mathematics of risk sizing, and cognitive trading psychology logs.
          </p>
        </div>
      </section>

      {/* Main Interactive AI Mentor Component */}
      <div className="pb-24">
        <AiMentorSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
