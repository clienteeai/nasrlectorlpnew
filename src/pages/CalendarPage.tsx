import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Header from "@/components/Header";
import MarketIntelligence from "@/components/MarketIntelligence";
import Footer from "@/components/Footer";

export default function CalendarPage() {
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
            <span className="text-xs font-semibold text-gold tracking-luxury uppercase">MACRO DESK</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Economic Calendar & <span className="text-gradient-gold">News Terminal</span>
          </h1>
          <p className="text-base text-foreground/60 font-sans max-w-2xl mx-auto">
            Stay ahead of institutional market shifts with our real-time breaking financial news wire and global economic indicator volatility release calendar.
          </p>
        </div>
      </section>

      {/* Main Intelligence Calendar & News Component */}
      <div className="pb-24">
        <MarketIntelligence />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
