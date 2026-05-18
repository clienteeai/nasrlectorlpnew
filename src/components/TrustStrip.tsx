import { Shield, Zap, Headphones, Globe } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    text: "Licensed CFD Broker",
  },
  {
    icon: Zap,
    text: "Fast Deposits & Withdrawals",
  },
  {
    icon: Headphones,
    text: "24/5 Multilingual Support",
  },
  {
    icon: Globe,
    text: "Serving Traders Across MENA & India",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative py-8 bg-navy-light border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-foreground/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
