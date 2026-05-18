import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Header from "@/components/Header";
import MarketsExplorer from "@/components/MarketsExplorer";
import Footer from "@/components/Footer";

export default function MarketsPage() {
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
            <span className="text-xs font-semibold text-gold tracking-luxury uppercase">LIVE ANALYTICS</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Markets <span className="text-gradient-gold">Explorer Desk</span>
          </h1>
          <p className="text-base text-foreground/60 font-sans max-w-2xl mx-auto">
            Access institutional-grade real-time market data feeds, custom chart layouts, and integrated AI Technical Diagnostics across Forex, Stocks, and Crypto.
          </p>
        </div>
      </section>

      {/* Main Markets Explorer Component */}
      <div className="pb-24">
        <MarketsExplorer />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
