import { Zap, Globe, BarChart3, MousePointerClick, Smartphone, Monitor, Apple, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    text: "Ultra-fast execution under 50ms",
  },
  {
    icon: Globe,
    text: "One account for Forex, Crypto, Stocks, Commodities & Indices",
  },
  {
    icon: BarChart3,
    text: "Advanced charting and full technical analysis suite",
  },
  {
    icon: MousePointerClick,
    text: "One-click trading & automated strategies",
  },
];

const platforms = [
  { icon: Globe, label: "Web" },
  { icon: Monitor, label: "Desktop" },
  { icon: Apple, label: "iOS" },
  { icon: Smartphone, label: "Android" },
];

// Gold dust particles component
function GoldDustParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(217, 177, 96, ${0.4 + Math.random() * 0.4}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${3 + Math.random() * 5}px rgba(217, 177, 96, 0.3)`,
            animation: `float-particle ${20 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="platform" 
      className="py-32 lg:py-44 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #00050A 0%, #030912 50%, #00050A 100%)',
      }}
    >
      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217, 177, 96, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217, 177, 96, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gold dust particles */}
      <GoldDustParticles />

      {/* Ambient gold glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(217, 177, 96, 0.04) 0%, transparent 60%)',
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div 
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            {/* Section label */}
            <span 
              className="inline-block px-5 py-2 mb-8 text-xs tracking-[0.25em] uppercase font-medium"
              style={{
                color: '#D9B160',
                border: '1px solid rgba(217, 177, 96, 0.25)',
                background: 'rgba(217, 177, 96, 0.04)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Trading Platform
            </span>

            {/* Main headline */}
            <h2 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1]"
              style={{ color: '#faf9f6' }}
            >
              Live Trading{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #D9B160, #f0d78c, #D9B160)',
                }}
              >
                Experience
              </span>
            </h2>
            
            {/* Subheader */}
            <p 
              className="text-lg lg:text-xl mb-12 leading-relaxed font-sans max-w-xl"
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Trade live markets with speed, precision, and confidence. Nasr Trade delivers 
              institutional-grade execution, transparent pricing, and professional tools for every trader.
            </p>

            {/* Feature List */}
            <ul className="space-y-6 mb-14">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-5 transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  {/* Gold-outlined icon container */}
                  <div 
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      border: '1px solid rgba(217, 177, 96, 0.4)',
                      background: 'linear-gradient(135deg, rgba(217, 177, 96, 0.08) 0%, rgba(217, 177, 96, 0.02) 100%)',
                      boxShadow: '0 0 20px rgba(217, 177, 96, 0.08)',
                    }}
                  >
                    <feature.icon 
                      className="w-5 h-5" 
                      style={{ color: '#D9B160' }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span 
                    className="font-sans text-base lg:text-lg"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* MT5 Platform Block */}
            <div 
              className="p-8 mb-12 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(217, 177, 96, 0.06) 0%, rgba(3, 9, 18, 0.9) 100%)',
                border: '1px solid rgba(217, 177, 96, 0.2)',
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Top reflection */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9B160]/30 to-transparent" />
              
              <h3 
                className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
                style={{ color: '#D9B160' }}
              >
                MT5 Platform
              </h3>
              <p 
                className="font-sans text-sm lg:text-base leading-relaxed mb-8"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Nasr Trade offers the MetaTrader 5 (MT5) platform on desktop, web, and mobile — 
                giving traders powerful tools for fast, reliable, real-time trading.
              </p>

              {/* Platform Pill Buttons */}
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <button
                    key={index}
                    className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-300"
                    style={{
                      background: 'rgba(217, 177, 96, 0.04)',
                      border: '1px solid rgba(217, 177, 96, 0.3)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      borderRadius: '100px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(217, 177, 96, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.6)';
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(217, 177, 96, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(217, 177, 96, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <platform.icon 
                      className="w-4 h-4 transition-all duration-300" 
                      style={{ color: '#D9B160' }}
                    />
                    {platform.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href="#accounts" 
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #D9B160 0%, #f0d78c 35%, #D9B160 65%, #b8960b 100%)',
                  color: '#030912',
                  boxShadow: '0 10px 40px rgba(217, 177, 96, 0.3), 0 0 60px rgba(217, 177, 96, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                }}
              >
                Start Trading
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#accounts" 
                className="inline-flex items-center justify-center px-10 py-4 font-semibold text-base transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#D9B160',
                  border: '1px solid rgba(217, 177, 96, 0.4)',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(217, 177, 96, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.4)';
                }}
              >
                Try Free Demo
              </a>
            </div>

            {/* Trust tagline */}
            <p 
              className="text-sm font-sans"
              style={{ color: 'rgba(255, 255, 255, 0.45)' }}
            >
              Join thousands of traders who choose Nasr Trade for reliability, speed, and transparency.
            </p>
          </div>

          {/* Right - Video Container */}
          <div 
            className="relative transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms',
            }}
          >
            {/* Main video container */}
            <div 
              className="relative overflow-hidden"
              style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, rgba(217, 177, 96, 0.06) 0%, rgba(3, 9, 18, 0.95) 50%, rgba(217, 177, 96, 0.03) 100%)',
                border: '1px solid rgba(217, 177, 96, 0.25)',
                borderRadius: '8px',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 80px rgba(217, 177, 96, 0.08), inset 0 0 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Glass sheen overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%, rgba(217, 177, 96, 0.02) 100%)',
                }}
              />

              {/* Top reflection line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9B160]/40 to-transparent" />

              {/* Trading animation video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/trading-animation.mp4" type="video/mp4" />
              </video>

              {/* Inner micro particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${1 + Math.random() * 1.5}px`,
                      height: `${1 + Math.random() * 1.5}px`,
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      background: `rgba(217, 177, 96, ${0.2 + Math.random() * 0.3})`,
                      boxShadow: `0 0 ${2 + Math.random() * 3}px rgba(217, 177, 96, 0.25)`,
                      animation: `float-particle ${12 + Math.random() * 10}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative outer glow */}
            <div 
              className="absolute -inset-4 rounded-2xl -z-10"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(217, 177, 96, 0.06) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Corner accents */}
            <div 
              className="absolute -top-2 -left-2 w-8 h-8"
              style={{
                borderTop: '2px solid rgba(217, 177, 96, 0.4)',
                borderLeft: '2px solid rgba(217, 177, 96, 0.4)',
              }}
            />
            <div 
              className="absolute -top-2 -right-2 w-8 h-8"
              style={{
                borderTop: '2px solid rgba(217, 177, 96, 0.4)',
                borderRight: '2px solid rgba(217, 177, 96, 0.4)',
              }}
            />
            <div 
              className="absolute -bottom-2 -left-2 w-8 h-8"
              style={{
                borderBottom: '2px solid rgba(217, 177, 96, 0.4)',
                borderLeft: '2px solid rgba(217, 177, 96, 0.4)',
              }}
            />
            <div 
              className="absolute -bottom-2 -right-2 w-8 h-8"
              style={{
                borderBottom: '2px solid rgba(217, 177, 96, 0.4)',
                borderRight: '2px solid rgba(217, 177, 96, 0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}