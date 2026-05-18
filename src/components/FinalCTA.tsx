import { ArrowRight, Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-navy-light to-emerald/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald" />
              <span className="font-medium">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald" />
              <span className="font-medium">Instant withdrawals</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald" />
              <span className="font-medium">World-class support</span>
            </div>
          </div>
          
          <a href="https://trade.nasrlector.com/landing?signup=1" className="btn-gold text-base py-4 px-8 group whitespace-nowrap">
            Explore the Academy
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
