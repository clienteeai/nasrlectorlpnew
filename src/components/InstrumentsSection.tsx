import { TrendingUp, Bitcoin, Building2, Droplet, BarChart3, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, forwardRef } from "react";

const instruments = [
  {
    icon: TrendingUp,
    title: "Forex",
    subtitle: "Foreign Exchange",
    description: "Trade over 60 major, minor, and exotic currency pairs with institutional-grade execution.",
    bullets: [
      "Ultra-tight spreads",
      "Lightning-fast execution",
      "Deep global liquidity",
    ],
  },
  {
    icon: Bitcoin,
    title: "Crypto",
    subtitle: "Digital Assets",
    description: "Trade top global digital assets with secure, real-time CFD pricing.",
    bullets: [
      "Bitcoin, Ethereum, major altcoins",
      "24/5 market access",
      "Zero hidden fees",
    ],
  },
  {
    icon: Building2,
    title: "Stocks",
    subtitle: "Global Equities",
    description: "Get exposure to the world's most influential companies through powerful CFD instruments.",
    bullets: [
      "US, EU, and Asian markets",
      "Tesla, Apple, Amazon, Google",
      "Transparent pricing",
    ],
  },
  {
    icon: Droplet,
    title: "Commodities",
    subtitle: "Metals & Energy",
    description: "Diversify with CFDs on precious metals, energies, and agricultural assets.",
    bullets: [
      "Gold, Oil, Natural Gas",
      "Supply & demand-driven moves",
      "Transparent contract pricing",
    ],
  },
  {
    icon: BarChart3,
    title: "Indices",
    subtitle: "Global Benchmarks",
    description: "Gain macro exposure across leading world indices with flexible leverage.",
    bullets: [
      "S&P 500, DAX, FTSE 100",
      "Competitive spreads",
      "Ideal for broad market moves",
    ],
  },
];

// Gold dust particles
function GoldDustParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(212, 175, 55, ${0.5 + Math.random() * 0.4}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${3 + Math.random() * 5}px rgba(212, 175, 55, 0.4)`,
            animation: `float-particle ${18 + Math.random() * 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Micro particles inside cards
function CardParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 1.5}px`,
            height: `${1 + Math.random() * 1.5}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: `rgba(212, 175, 55, ${0.3 + Math.random() * 0.3})`,
            boxShadow: `0 0 ${2 + Math.random() * 3}px rgba(212, 175, 55, 0.3)`,
            animation: `float-particle ${10 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// Dubai skyline silhouette SVG
function SkylineSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden opacity-[0.04]">
      <svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
        fill="rgba(212, 175, 55, 0.8)"
      >
        <path d="M0,200 L0,160 L40,160 L40,140 L60,140 L60,160 L80,160 L80,120 L100,120 L100,160 L120,160 L120,100 L140,100 L140,80 L160,80 L160,100 L180,100 L180,160 L200,160 L200,130 L220,130 L220,160 L260,160 L260,90 L280,90 L280,60 L290,60 L290,40 L300,40 L300,20 L310,20 L310,40 L320,40 L320,60 L330,60 L330,90 L350,90 L350,160 L380,160 L380,110 L400,110 L400,160 L420,160 L420,140 L440,140 L440,160 L480,160 L480,70 L500,70 L500,50 L520,50 L520,70 L540,70 L540,160 L580,160 L580,120 L600,120 L600,100 L610,100 L610,60 L620,60 L620,30 L630,30 L630,10 L640,10 L640,30 L650,30 L650,60 L660,60 L660,100 L670,100 L670,120 L690,120 L690,160 L720,160 L720,130 L740,130 L740,160 L780,160 L780,90 L800,90 L800,160 L840,160 L840,110 L860,110 L860,80 L880,80 L880,110 L900,110 L900,160 L940,160 L940,140 L960,140 L960,120 L980,120 L980,140 L1000,140 L1000,160 L1040,160 L1040,100 L1060,100 L1060,70 L1080,70 L1080,50 L1100,50 L1100,70 L1120,70 L1120,100 L1140,100 L1140,160 L1180,160 L1180,130 L1200,130 L1200,160 L1240,160 L1240,110 L1260,110 L1260,160 L1300,160 L1300,140 L1320,140 L1320,160 L1360,160 L1360,120 L1380,120 L1380,160 L1440,160 L1440,200 Z" />
      </svg>
    </div>
  );
}

export default function InstrumentsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 120);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="instruments" className="py-36 lg:py-48 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
        >
          <source src="/instruments-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(1, 2, 4, 0.85) 0%, rgba(7, 11, 20, 0.8) 50%, rgba(1, 2, 4, 0.9) 100%)',
          }}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Gold dust particles */}
      <div className="relative z-[2]">
        <GoldDustParticles />
      </div>
      
      {/* Radial gold glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 40%, rgba(212, 175, 55, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <span 
            className="inline-block px-6 py-2.5 mb-10 text-xs tracking-[0.3em] uppercase font-medium rounded-sm"
            style={{
              color: '#d4af37',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              background: 'rgba(212, 175, 55, 0.04)',
              backdropFilter: 'blur(10px)',
            }}
          >
            Markets & Instruments
          </span>
          <h2 
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight leading-tight"
            style={{ color: '#faf9f6' }}
          >
            Trade <span className="text-gradient-gold">Global Markets</span>
          </h2>
          <p 
            className="text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Access a full suite of CFD instruments from a single, powerful account.
          </p>
        </div>

        {/* Cards Grid - 2x2 + 1 centered */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-8 lg:mb-10">
            {instruments.slice(0, 2).map((instrument, index) => (
              <InstrumentCard 
                key={index} 
                instrument={instrument} 
                isVisible={visibleCards.has(index)}
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
          
          {/* Second Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-8 lg:mb-10">
            {instruments.slice(2, 4).map((instrument, index) => (
              <InstrumentCard 
                key={index + 2} 
                instrument={instrument} 
                isVisible={visibleCards.has(index + 2)}
                ref={(el) => (cardRefs.current[index + 2] = el)}
              />
            ))}
          </div>

          {/* Third Row - 1 Card centered */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 md:max-w-md lg:max-w-lg">
              <InstrumentCard 
                instrument={instruments[4]} 
                isVisible={visibleCards.has(4)}
                ref={(el) => (cardRefs.current[4] = el)}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 lg:mt-32 max-w-4xl mx-auto">
          <div 
            className="relative p-14 lg:p-20 text-center overflow-hidden rounded-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(10, 15, 26, 0.95) 40%, rgba(212, 175, 55, 0.05) 100%)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 100px rgba(212, 175, 55, 0.12), 0 0 40px rgba(212, 175, 55, 0.06), inset 0 0 80px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Soft neon glow effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              }}
            />
            
            {/* Top border glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            
            <div className="relative z-10">
              <h3 
                className="font-display text-2xl lg:text-4xl font-bold mb-6 tracking-tight"
                style={{ color: '#faf9f6' }}
              >
                Explore All Instruments with <span className="text-gradient-gold">Nasr Trade</span>
              </h3>
              <p 
                className="mb-12 font-sans text-base lg:text-lg max-w-xl mx-auto"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                Discover the complete range of markets available on our platform.
              </p>
              <a 
                href="#instruments" 
                className="group inline-flex items-center justify-center gap-3 px-14 py-5 font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f5d77a 35%, #d4af37 65%, #b8860b 100%)',
                  color: '#070b14',
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.35), 0 0 80px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
                  borderRadius: '2px',
                }}
              >
                View Full Market List
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InstrumentCardProps {
  instrument: typeof instruments[0];
  isVisible: boolean;
}

const InstrumentCard = forwardRef<HTMLDivElement, InstrumentCardProps>(
  ({ instrument, isVisible }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        ref={ref}
        className="group relative rounded-sm transition-all duration-700 ease-out"
        style={{
          padding: 'clamp(2rem, 4vw, 3rem)',
          minHeight: '380px',
          background: 'linear-gradient(160deg, rgba(20, 25, 40, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)',
          backdropFilter: 'blur(20px)',
          border: `1px solid rgba(212, 175, 55, ${isHovered ? 0.5 : 0.2})`,
          boxShadow: isHovered 
            ? '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 50px rgba(212, 175, 55, 0.12), inset 0 0 60px rgba(0, 0, 0, 0.3)'
            : '0 15px 50px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(0, 0, 0, 0.2)',
          transform: isVisible 
            ? isHovered ? 'translateY(-5px)' : 'translateY(0)' 
            : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card micro particles */}
        <CardParticles />

        {/* Border glow on hover */}
        <div 
          className="absolute inset-0 rounded-sm pointer-events-none transition-all duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.15), inset 0 0 25px rgba(212, 175, 55, 0.03)',
          }}
        />
        
        {/* Top reflection */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon in gold frame */}
          <div 
            className="w-14 h-14 mb-8 flex items-center justify-center transition-all duration-400"
            style={{
              border: '1px solid rgba(212, 175, 55, 0.5)',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%)',
              boxShadow: isHovered 
                ? '0 0 25px rgba(212, 175, 55, 0.25), inset 0 0 12px rgba(212, 175, 55, 0.08)' 
                : '0 0 15px rgba(212, 175, 55, 0.08)',
            }}
          >
            <instrument.icon 
              className="w-7 h-7 transition-all duration-400" 
              style={{ 
                color: '#d4af37',
                filter: isHovered ? 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.7))' : 'none',
              }}
              strokeWidth={1.5} 
            />
          </div>
          
          {/* Title */}
          <h3 
            className="font-display text-2xl lg:text-3xl font-bold mb-2 tracking-tight"
            style={{ color: '#ffffff' }}
          >
            {instrument.title}
          </h3>
          
          {/* Subtitle - gold, small caps */}
          <span 
            className="text-xs font-sans font-medium uppercase block mb-6"
            style={{ 
              color: '#d4af37',
              letterSpacing: '0.1em',
            }}
          >
            {instrument.subtitle}
          </span>
          
          {/* Description */}
          <p 
            className="mb-8 font-sans text-sm lg:text-base leading-[1.85]"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            {instrument.description}
          </p>
          
          {/* Bullets */}
          <ul className="space-y-4 mt-auto">
            {instrument.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex items-center gap-4">
                <span 
                  className="w-1.5 h-1.5 flex-shrink-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #b8860b)',
                    boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)',
                  }}
                />
                <span 
                  className="font-sans text-sm lg:text-[0.938rem] leading-relaxed"
                  style={{ color: '#B8B8B8' }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

InstrumentCard.displayName = 'InstrumentCard';
