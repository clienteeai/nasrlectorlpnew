import { useMemo } from "react";
import { ChevronRight } from "lucide-react";

// Floating gold particles
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 8,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, hsl(43 76% 52% / 0.5), transparent)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

interface Step {
  step: string;
  title: string;
  description: string;
}

export default function HowItWorksSection({ steps }: { steps: Step[] }) {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#0a0a0d' }}>
      <FloatingParticles />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 lg:p-7 rounded-2xl border border-gold/15 bg-card/30 h-full">
                <span className="text-5xl font-serif font-bold text-gold/25 mb-5 block">{step.step}</span>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gold/30" />
              )}
            </div>
          ))}
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
            Get Started Now
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
