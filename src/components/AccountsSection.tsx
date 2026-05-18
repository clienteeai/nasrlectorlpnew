import { Check, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const accounts = [
  {
    name: "Standard Account",
    badge: "Most Popular",
    icon: Star,
    description: "Designed for traders who want tight spreads, transparent pricing, and reliable execution.",
    features: [
      "Tight, stable spreads",
      "No dealing desk",
      "Ideal for most trading styles",
    ],
    metrics: {
      spreads: "0.8 pips",
      leverage: "1:500",
      minDeposit: "$100",
    },
    cta: "Open Standard Account",
    primary: false,
  },
  {
    name: "Pro Account",
    badge: "For Active Traders",
    icon: Zap,
    description: "Built for experienced traders who demand lower spreads, deeper liquidity, and priority execution.",
    features: [
      "Lower spreads",
      "Priority order execution",
      "Support for advanced strategies",
    ],
    metrics: {
      spreads: "0.3 pips",
      leverage: "1:500",
      minDeposit: "$500",
    },
    cta: "Open Pro Account",
    primary: true,
  },
];

// Gold dust particles component
function GoldDustParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
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

export default function AccountsSection() {
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
      id="accounts" 
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
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(217, 177, 96, 0.03) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-20 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
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
            Account Types
          </span>

          <h2 
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]"
            style={{ color: '#faf9f6' }}
          >
            Choose the Account That{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #D9B160, #f0d78c, #D9B160)',
              }}
            >
              Fits Your Strategy
            </span>
          </h2>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed font-sans max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Flexible account types designed for traders from the Middle East, India, and beyond.
          </p>
        </div>

        {/* Account Cards - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 flex flex-col transition-all duration-700 ease-out group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 150 + 200}ms`,
                background: account.primary 
                  ? 'linear-gradient(135deg, rgba(217, 177, 96, 0.08) 0%, rgba(3, 9, 18, 0.95) 50%, rgba(217, 177, 96, 0.04) 100%)'
                  : 'linear-gradient(135deg, rgba(217, 177, 96, 0.03) 0%, rgba(3, 9, 18, 0.95) 100%)',
                border: account.primary 
                  ? '1px solid rgba(217, 177, 96, 0.4)'
                  : '1px solid rgba(217, 177, 96, 0.15)',
                borderRadius: '12px',
                boxShadow: account.primary
                  ? '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(217, 177, 96, 0.1), inset 0 0 40px rgba(0, 0, 0, 0.2)'
                  : '0 15px 50px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = account.primary 
                  ? 'rgba(217, 177, 96, 0.6)'
                  : 'rgba(217, 177, 96, 0.35)';
                e.currentTarget.style.boxShadow = account.primary
                  ? '0 30px 90px rgba(0, 0, 0, 0.5), 0 0 80px rgba(217, 177, 96, 0.15), inset 0 0 40px rgba(0, 0, 0, 0.2)'
                  : '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(217, 177, 96, 0.08), inset 0 0 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = account.primary 
                  ? 'rgba(217, 177, 96, 0.4)'
                  : 'rgba(217, 177, 96, 0.15)';
                e.currentTarget.style.boxShadow = account.primary
                  ? '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(217, 177, 96, 0.1), inset 0 0 40px rgba(0, 0, 0, 0.2)'
                  : '0 15px 50px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              {/* Top reflection line */}
              <div 
                className="absolute top-0 left-8 right-8 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, rgba(217, 177, 96, ${account.primary ? '0.4' : '0.2'}), transparent)`,
                }}
              />

              {/* Badge */}
              <div 
                className="inline-flex self-start items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-8"
                style={{
                  color: '#D9B160',
                  border: '1px solid rgba(217, 177, 96, 0.35)',
                  background: 'rgba(217, 177, 96, 0.06)',
                  borderRadius: '100px',
                }}
              >
                <account.icon className="w-3.5 h-3.5" style={{ color: '#D9B160' }} />
                {account.badge}
              </div>

              {/* Account Name */}
              <h3 
                className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight"
                style={{ color: '#faf9f6' }}
              >
                {account.name}
              </h3>
              
              <p 
                className="font-sans text-base leading-relaxed mb-8"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {account.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {account.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-4">
                    <div 
                      className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                      style={{
                        border: '1px solid rgba(217, 177, 96, 0.4)',
                        background: 'rgba(217, 177, 96, 0.08)',
                        borderRadius: '4px',
                      }}
                    >
                      <Check className="w-3.5 h-3.5" style={{ color: '#D9B160' }} />
                    </div>
                    <span 
                      className="font-sans text-base"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Trading Conditions Row */}
              <div 
                className="grid grid-cols-3 gap-4 p-5 mb-10"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(217, 177, 96, 0.12)',
                  borderRadius: '8px',
                }}
              >
                <div className="text-center">
                  <div 
                    className="text-xs uppercase tracking-wider mb-2 font-medium"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    Spreads from
                  </div>
                  <div 
                    className="font-semibold text-lg"
                    style={{ color: '#D9B160' }}
                  >
                    {account.metrics.spreads}
                  </div>
                </div>
                <div 
                  className="text-center"
                  style={{
                    borderLeft: '1px solid rgba(217, 177, 96, 0.15)',
                    borderRight: '1px solid rgba(217, 177, 96, 0.15)',
                  }}
                >
                  <div 
                    className="text-xs uppercase tracking-wider mb-2 font-medium"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    Leverage
                  </div>
                  <div 
                    className="font-semibold text-lg"
                    style={{ color: '#faf9f6' }}
                  >
                    {account.metrics.leverage}
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-xs uppercase tracking-wider mb-2 font-medium"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    Min. Deposit
                  </div>
                  <div 
                    className="font-semibold text-lg"
                    style={{ color: '#faf9f6' }}
                  >
                    {account.metrics.minDeposit}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://trade.nasrlector.com/landing?signup=1"
                className="mt-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-base transition-all duration-300"
                style={{
                  background: account.primary 
                    ? 'linear-gradient(135deg, #D9B160 0%, #f0d78c 35%, #D9B160 65%, #b8960b 100%)'
                    : 'transparent',
                  color: account.primary ? '#030912' : '#D9B160',
                  border: account.primary ? 'none' : '1px solid rgba(217, 177, 96, 0.4)',
                  borderRadius: '4px',
                  boxShadow: account.primary 
                    ? '0 10px 40px rgba(217, 177, 96, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  if (account.primary) {
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(217, 177, 96, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  } else {
                    e.currentTarget.style.background = 'rgba(217, 177, 96, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.6)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(217, 177, 96, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (account.primary) {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(217, 177, 96, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(217, 177, 96, 0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {account.cta}
              </a>

              {/* Pro card outer glow */}
              {account.primary && (
                <div 
                  className="absolute -inset-4 rounded-2xl -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(217, 177, 96, 0.08) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p 
          className="text-center text-sm font-sans mt-16 max-w-2xl mx-auto transition-all duration-1000 ease-out"
          style={{ 
            color: 'rgba(255, 255, 255, 0.4)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '600ms',
          }}
        >
          Account availability and conditions may vary by region. Please refer to our{" "}
          <a 
            href="#terms" 
            className="transition-colors duration-300"
            style={{ color: '#D9B160' }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Terms and Conditions
          </a>{" "}
          for full details.
        </p>
      </div>
    </section>
  );
}
