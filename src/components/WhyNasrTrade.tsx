import { Zap, Brain, Search, Globe, ShieldCheck, Headphones, MapPin, BadgeCheck, ArrowRight } from "lucide-react";
import { useMemo } from "react";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 15,
      duration: 25 + Math.random() * 20,
      opacity: 0.08 + Math.random() * 0.12,
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
            background: `radial-gradient(circle, rgba(180, 150, 50, ${particle.opacity}) 0%, transparent 70%)`,
            animation: `gentleFloat ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(0.3px)',
          }}
        />
      ))}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          25% { transform: translate(15px, -10px); opacity: 1; }
          50% { transform: translate(-10px, 15px); opacity: 0.7; }
          75% { transform: translate(10px, 5px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

const NeuralMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.10]">
      <svg className="absolute w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="meshGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b7320" stopOpacity="0" />
            <stop offset="30%" stopColor="#8b7320" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#6b5a18" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b7320" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="meshGradientDark2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b5a18" stopOpacity="0" />
            <stop offset="50%" stopColor="#7a6820" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6b5a18" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal neural lines */}
        <path d="M-50,200 Q300,180 600,220 T1200,200 T1700,180" stroke="url(#meshGradientDark)" strokeWidth="0.8" fill="none" opacity="0.5">
          <animate attributeName="d" dur="35s" repeatCount="indefinite"
            values="M-50,200 Q300,180 600,220 T1200,200 T1700,180;
                    M-50,210 Q300,240 600,190 T1200,220 T1700,200;
                    M-50,200 Q300,180 600,220 T1200,200 T1700,180" />
        </path>
        <path d="M-50,400 Q400,380 800,420 T1300,400 T1700,380" stroke="url(#meshGradientDark)" strokeWidth="1" fill="none" opacity="0.6">
          <animate attributeName="d" dur="40s" repeatCount="indefinite"
            values="M-50,400 Q400,380 800,420 T1300,400 T1700,380;
                    M-50,420 Q400,450 800,380 T1300,420 T1700,400;
                    M-50,400 Q400,380 800,420 T1300,400 T1700,380" />
        </path>
        <path d="M-50,600 Q350,580 700,620 T1150,600 T1700,580" stroke="url(#meshGradientDark)" strokeWidth="0.7" fill="none" opacity="0.4">
          <animate attributeName="d" dur="45s" repeatCount="indefinite"
            values="M-50,600 Q350,580 700,620 T1150,600 T1700,580;
                    M-50,580 Q350,620 700,580 T1150,620 T1700,600;
                    M-50,600 Q350,580 700,620 T1150,600 T1700,580" />
        </path>
        
        {/* Diagonal crossing lines */}
        <path d="M100,100 Q500,300 900,250 T1400,400 T1600,700" stroke="url(#meshGradientDark2)" strokeWidth="0.5" fill="none" opacity="0.35" />
        <path d="M1500,100 Q1100,280 700,320 T200,500 T0,750" stroke="url(#meshGradientDark2)" strokeWidth="0.5" fill="none" opacity="0.3" />
        
        {/* Subtle vertical accents */}
        <path d="M400,0 Q420,300 380,600 T420,900" stroke="url(#meshGradientDark)" strokeWidth="0.4" fill="none" opacity="0.25" />
        <path d="M1000,0 Q980,350 1020,650 T980,900" stroke="url(#meshGradientDark)" strokeWidth="0.4" fill="none" opacity="0.25" />
        
        {/* Neural nodes - very subtle */}
        {[
          { cx: 250, cy: 210, r: 2 },
          { cx: 550, cy: 400, r: 2.5 },
          { cx: 800, cy: 380, r: 2 },
          { cx: 1050, cy: 420, r: 2.5 },
          { cx: 1300, cy: 390, r: 2 },
          { cx: 400, cy: 600, r: 1.8 },
          { cx: 900, cy: 620, r: 2 },
          { cx: 650, cy: 250, r: 1.5 },
          { cx: 1150, cy: 580, r: 1.8 },
        ].map((node, i) => (
          <circle 
            key={i} 
            cx={node.cx} 
            cy={node.cy} 
            r={node.r} 
            fill="#8b7320" 
            opacity="0.4"
          >
            <animate attributeName="opacity" dur={`${8 + i * 2}s`} repeatCount="indefinite"
              values="0.2;0.5;0.2" />
          </circle>
        ))}
        
        {/* Connecting lines between nodes */}
        <line x1="250" y1="210" x2="550" y2="400" stroke="#7a6820" strokeWidth="0.3" opacity="0.2" />
        <line x1="550" y1="400" x2="800" y2="380" stroke="#7a6820" strokeWidth="0.3" opacity="0.2" />
        <line x1="800" y1="380" x2="1050" y2="420" stroke="#7a6820" strokeWidth="0.3" opacity="0.2" />
        <line x1="1050" y1="420" x2="1300" y2="390" stroke="#7a6820" strokeWidth="0.3" opacity="0.2" />
        <line x1="400" y1="600" x2="650" y2="250" stroke="#7a6820" strokeWidth="0.25" opacity="0.15" />
        <line x1="900" y1="620" x2="1150" y2="580" stroke="#7a6820" strokeWidth="0.25" opacity="0.15" />
      </svg>
    </div>
  );
};

const valuePillars = [
  {
    icon: Zap,
    title: "Institutional-Grade Execution",
    description: "Ultra-fast execution under 50ms with reliable fills even in high volatility.",
  },
  {
    icon: Brain,
    title: "AI-Driven Tools & Insights",
    description: "Smart AI tools with simplified daily insights for Forex, Gold, Crypto, and Indices.",
  },
  {
    icon: Search,
    title: "Transparent Conditions",
    description: "Tight spreads, no hidden fees, and fair pricing for serious traders.",
  },
  {
    icon: Globe,
    title: "All-in-One Trading",
    description: "One account for Forex, Crypto, Commodities, Stocks & Indices.",
  },
];

const trustBadges = [
  { icon: BadgeCheck, text: "Licensed CFD Broker" },
  { icon: ShieldCheck, text: "High Security Standards" },
  { icon: Headphones, text: "24/5 Multilingual Support" },
  { icon: MapPin, text: "Tailored for MENA & India" },
];

export default function WhyNasrTrade() {
  return (
    <section 
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: '#050508' }}
    >
      {/* Background: Black to deep navy gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #050508 0%, #0a0a14 40%, #080810 70%, #050508 100%)',
        }}
      />
      
      {/* Soft vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(5, 5, 8, 0.4) 60%, rgba(5, 5, 8, 0.85) 100%)',
        }}
      />
      
      {/* Neural mesh layer */}
      <NeuralMesh />
      
      {/* Floating particles layer */}
      <FloatingParticles />
      
      {/* Subtle ambient glow - very faint */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(120, 100, 40, 0.04) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ maxWidth: '1320px' }}>
        {/* Header Block */}
        <div className="text-center mb-20 lg:mb-24 relative">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Why Traders Choose <span className="text-gold">Nasr Trade</span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/50 max-w-3xl mx-auto font-light leading-relaxed">
            Premium execution, transparent pricing, and AI-powered tools built for MENA & India.
          </p>
        </div>

        {/* 3D AI Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {valuePillars.map((pillar, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative p-8 lg:p-10 rounded-3xl transition-all duration-500 group-hover:translate-y-[-4px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  boxShadow: `
                    0 4px 30px rgba(0, 0, 0, 0.3),
                    0 0 0 1px rgba(255, 255, 255, 0.03) inset,
                    0 20px 40px -20px rgba(212, 175, 55, 0.1)
                  `,
                }}
              >
                {/* Hover glow overlay */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
                    boxShadow: '0 0 60px rgba(212, 175, 55, 0.12), inset 0 0 30px rgba(212, 175, 55, 0.03)',
                  }}
                />

                {/* Gold edge highlights */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/60 via-gold/30 to-transparent rounded-tl-3xl" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-transparent rounded-tl-3xl" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-gold/60 via-gold/30 to-transparent rounded-br-3xl" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-gold/60 via-gold/30 to-transparent rounded-br-3xl" />
                </div>

                {/* Inner glow */}
                <div 
                  className="absolute inset-[1px] rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
                  }}
                />

                <div className="flex items-start gap-6 relative z-10">
                  {/* Embossed icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      boxShadow: `
                        0 4px 15px rgba(212, 175, 55, 0.15),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1),
                        inset 0 -1px 1px rgba(0, 0, 0, 0.1)
                      `,
                    }}
                  >
                    <pillar.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-400">
                      {pillar.title}
                    </h3>
                    <p className="text-foreground/50 leading-relaxed text-base lg:text-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-5 mb-20 lg:mb-24">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="relative flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Badge glow */}
              <div 
                className="absolute inset-0 rounded-full opacity-50 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />
              <badge.icon className="w-4.5 h-4.5 text-gold relative z-10" strokeWidth={1.5} />
              <span className="text-sm text-foreground/70 font-medium relative z-10">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="text-center relative">
          {/* CTA glow backdrop */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          
          <a 
            href="https://trade.nasrlector.com/?signup=1" 
            className="relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-400 group hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #c49b2f 50%, #b8960f 100%)',
              boxShadow: `
                0 0 50px rgba(212, 175, 55, 0.4),
                0 10px 40px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.3),
                inset 0 -1px 1px rgba(0, 0, 0, 0.1)
              `,
              color: '#0a0a0d'
            }}
          >
            Start Trading with Confidence
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
          
          <p className="text-foreground/40 text-sm mt-6 max-w-lg mx-auto">
            Join thousands of traders who trust Nasr Trade for reliability, speed, and transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
