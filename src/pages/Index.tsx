import { Brain, Target, BarChart3, BookOpen, ArrowRight, Check, X, Zap, Calculator, MessageSquare, User, Quote, Play } from "lucide-react";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HowItWorksSection from "@/components/HowItWorksSection";
import InsideLookSection from "@/components/InsideLookSection";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import PricingSection from "@/components/PricingSection";
import MarketsExplorer from "@/components/MarketsExplorer";



// YouTube Video Popup Component
const YouTubePopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      
      {/* Video Container */}
      <div 
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 100px rgba(212,175,55,0.3), 0 25px 50px rgba(0,0,0,0.5)',
          border: '2px solid rgba(212,175,55,0.4)',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/Ta-nuMY02co?autoplay=1&rel=0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
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

// Neural mesh background
const NeuralMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
      <svg className="absolute w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M${i * 120},0 Q${i * 120 + 60},${200 + Math.sin(i) * 100} ${i * 120 + 120},400 T${i * 120 + 240},800`}
            stroke="url(#meshGradient)"
            strokeWidth="0.5"
            fill="none"
            opacity={0.3 + (i % 3) * 0.15}
          />
        ))}
        {[...Array(16)].map((_, i) => (
          <circle
            key={i}
            cx={80 + (i % 8) * 170}
            cy={120 + Math.floor(i / 8) * 350 + (i % 4) * 80}
            r="2.5"
            fill="#d4af37"
            opacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
};

// Animated Hero Text
const AnimatedHeroText = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 2000);
    const timer2 = setTimeout(() => setPhase(2), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight min-h-[180px] lg:min-h-[220px] flex flex-col items-center justify-center">
      <span 
        className={`transition-all duration-1000 ${phase >= 1 ? 'opacity-0 scale-95 absolute' : 'opacity-100 scale-100'}`}
      >
        This Is Not a Course.
      </span>
      <span 
        className={`text-gold transition-all duration-1000 ${phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ textShadow: '0 0 60px rgba(212, 175, 55, 0.5)' }}
      >
        This Is a System.
      </span>
    </h1>
  );
};

// Typing Effect Component for Is This For You section
const TypingText = ({ text, delay, isVisible }: { text: string; delay: number; isVisible: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 30);
      
      return () => clearInterval(typingInterval);
    }, delay);
    
    return () => clearTimeout(startDelay);
  }, [text, delay, isVisible]);

  return (
    <span className="inline-block">
      {displayedText}
      {isTyping && <span className="animate-pulse text-gold">|</span>}
    </span>
  );
};

// Typing List Section Component
const TypingSection = ({ items, icon: Icon, title, isForYou }: { 
  items: string[]; 
  icon: typeof Check; 
  title: string; 
  isForYou: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    items.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 800);
    });
  }, [isVisible, items]);

  const borderClass = isForYou ? "border-emerald/20 bg-emerald/[0.03]" : "border-foreground/8 bg-foreground/[0.015]";
  const iconBgClass = isForYou ? "bg-emerald/15" : "bg-foreground/8";
  const iconClass = isForYou ? "text-emerald" : "text-foreground/45";
  const itemIconClass = isForYou ? "text-emerald" : "text-foreground/35";
  const textClass = isForYou ? "text-foreground/75" : "text-foreground/55";

  return (
    <div ref={sectionRef} className={`p-8 lg:p-10 rounded-2xl border ${borderClass}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconClass}`} />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-5">
        {items.map((point, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-4 transition-opacity duration-300 ${visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'}`}
          >
            <Icon className={`w-5 h-5 ${itemIconClass} flex-shrink-0 mt-0.5`} />
            <p className={textClass}>
              {visibleItems.includes(index) && (
                <TypingText 
                  text={point} 
                  delay={0} 
                  isVisible={visibleItems.includes(index)} 
                />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Problem points
const problemPoints = [
  "Random strategies from YouTube and social media",
  "No understanding of execution and market mechanics",
  "Zero risk discipline or position sizing logic",
  "No feedback loop to identify mistakes",
  "No structured progression from beginner to consistent",
];

// System features
const systemFeatures = [
  { icon: Brain, title: "AI Learning Engine", description: "Personalized curriculum that adapts to your skill level" },
  { icon: BookOpen, title: "Interactive Education", description: "Lessons with quizzes, simulations, and real examples" },
  { icon: BarChart3, title: "Trading Analytics", description: "Track your progress and identify weak points" },
  { icon: Target, title: "Quizzes & Progression", description: "Unlock advanced content as you prove mastery" },
  { icon: Calculator, title: "Trading Diary & Calculators", description: "Risk calculators and journaling tools built in" },
  { icon: MessageSquare, title: "AI Mentor", description: "Get answers and guidance when you need it" },
];

// Learning areas
const learningAreas = [
  "Forex", "Crypto", "Stocks", "Commodities", "Indices",
  "Risk Management", "Market Mechanics", "Trading Psychology", "Professional Mindset"
];

// Steps
const steps = [
  { step: "01", title: "Create Your Profile", description: "Answer questions about your experience, goals, and trading style." },
  { step: "02", title: "Get Your AI Roadmap", description: "Receive a personalized learning path built specifically for you." },
  { step: "03", title: "Learn, Test, Track", description: "Complete lessons, pass quizzes, and track your improvement." },
  { step: "04", title: "Build Consistency", description: "Develop the habits and skills that separate amateurs from professionals." },
];

// Who it's for
const forYou = [
  "You want structure, not random tips",
  "You value discipline over shortcuts",
  "You're serious about long-term consistency",
  "You want to understand why, not just what",
];

const notForYou = [
  "You want get-rich-quick signals",
  "You're looking for someone to trade for you",
  "You think trading is gambling",
  "You won't put in the work",
];

// Comparison
const comparison = [
  { feature: "Personalized AI curriculum", typical: false, nasr: true },
  { feature: "Adaptive difficulty based on skill", typical: false, nasr: true },
  { feature: "Built-in analytics and tracking", typical: false, nasr: true },
  { feature: "Trading diary and calculators", typical: false, nasr: true },
  { feature: "AI mentor for real-time guidance", typical: false, nasr: true },
  { feature: "Progression-locked content", typical: false, nasr: true },
];

// Testimonials
const testimonials = [
  {
    name: "Ahmed K.",
    role: "Forex Trader, Dubai",
    quote: "I wasted two years jumping between strategies. Nasr Lector gave me structure. In three months, I finally became consistent.",
  },
  {
    name: "Raj P.",
    role: "Part-time Trader, Mumbai",
    quote: "The AI roadmap identified gaps in my risk management I never knew existed. This is not just a course, it is a complete system.",
  },
  {
    name: "Omar S.",
    role: "Crypto Trader, Riyadh",
    quote: "The progression system keeps me accountable. I cannot skip ahead without proving I understand the fundamentals first.",
  },
  {
    name: "Vikram M.",
    role: "Stocks & Indices, Bangalore",
    quote: "Finally, a platform that treats trading like a skill to develop, not a get-rich-quick scheme. Worth every minute.",
  },
];

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* YouTube Popup */}
      <YouTubePopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* Real-time Moving Market Ticker at absolute top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-11 bg-[#0a0a0d]">
        <MarketTicker />
      </div>

      {/* Navigation - shifted top-11 to slide below the ticker */}
      <nav className="fixed top-11 left-0 right-0 z-50 border-b border-border/30" style={{ background: 'rgba(10, 10, 13, 0.92)', backdropFilter: 'blur(20px)' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl lg:text-2xl font-bold text-foreground">Nasr <span className="text-gold">Lector</span></span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="https://trade.nasrlector.com/landing?signup=1"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(43 76% 52%), hsl(40 80% 42%))',
                  color: 'hsl(222 50% 4%)',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                Sign Up
              </a>
              <a 
                href="https://trade.nasrlector.com/login" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/10 px-4 py-2.5 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:bg-background/20 hover:text-foreground sm:px-6 sm:text-base"
              >
                <User className="w-4 h-4" />
                Log In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - adjusted padding-top to accommodate ticker + nav */}
      <section className="relative pt-44 lg:pt-52 pb-20 lg:pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Video Background - More Visible */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
        </div>
        <NeuralMesh />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/[0.08] mb-8">
                <Brain className="w-4 h-4 text-gold" />
                <span className="text-sm text-gold font-medium tracking-wide">AI-Powered Trading Education</span>
              </div>
              
              <AnimatedHeroText />
              
              <p className="text-lg lg:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed">
                Nasr Lector uses AI to build your personalized trading roadmap, track your progress, and eliminate the guesswork that kills most traders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a 
                  href="https://trade.nasrlector.com/landing?signup=1"
                  className="cta-float-primary text-base lg:text-lg px-10 py-4 group inline-flex items-center justify-center font-semibold"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(43 76% 52%), hsl(40 80% 42%))',
                    color: 'hsl(222 50% 4%)',
                    borderRadius: '50px',
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.5), 0 8px 32px rgba(0,0,0,0.4)',
                    animation: 'floatCTA 3s ease-in-out infinite',
                  }}
                >
                  Get Free Access
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right - Video Preview with Play Button - BIGGER */}
            <div className="relative hidden lg:block lg:col-span-1">
              <div 
                className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gold/30 bg-card/30 backdrop-blur-sm relative cursor-pointer group transform scale-110 origin-center" 
                style={{ boxShadow: '0 0 80px rgba(212, 175, 55, 0.25)' }}
                onClick={() => setIsVideoOpen(true)}
              >
                {/* YouTube Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/Ta-nuMY02co/maxresdefault.jpg"
                  alt="Watch Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f5e6a3 50%, #d4af37 100%)',
                      boxShadow: '0 0 50px rgba(212,175,55,0.7), 0 10px 40px rgba(0,0,0,0.5)',
                    }}
                  >
                    <Play className="w-10 h-10 text-navy ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gold/15 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE PROBLEM */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#0a0a0d' }}>
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/nasr-fixes-this-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d]/80 via-[#0a0a0d]/70 to-[#0a0a0d]/80" />
        </div>
        <FloatingParticles />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Most Traders Fail<br />
              <span className="text-gold">Even After "Learning"</span>
            </h2>
            <p className="text-lg text-foreground/55 max-w-xl mx-auto">
              Information is everywhere. Structure is not.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-5 rounded-xl border border-destructive/15 bg-destructive/[0.04]"
                >
                  <X className="w-5 h-5 text-destructive/80 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/75">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center p-10 lg:p-12 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] to-gold/[0.02]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-8">
                  <Zap className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-5">
                  Nasr Lector Fixes This
                </h3>
                <p className="text-foreground/55 leading-relaxed max-w-sm mx-auto mb-6">
                  One connected system that adapts to you, tracks your progress, and builds real trading skills.
                </p>
                <a 
                  href="https://trade.nasrlector.com/landing?signup=1"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
                    color: '#0a0a0d',
                    borderRadius: '50px',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)',
                  }}
                >
                  Try It Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT NASR LECTOR IS */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        {/* Video Background - More Visible */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/instruments-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/80 to-navy/75" />
        </div>
        <NeuralMesh />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              One System.<br />
              <span className="text-gold">Everything Connected.</span>
            </h2>
            <p className="text-lg text-foreground/55 max-w-2xl mx-auto">
              Nasr Lector is not a library of videos. It is an intelligent platform that learns you.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {systemFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-7 lg:p-8 rounded-2xl border border-gold/15 bg-card/50 backdrop-blur-md hover:border-gold/30 transition-all duration-400 group"
                style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/[0.1] border border-gold/25 flex items-center justify-center mb-6 group-hover:bg-gold/[0.15] transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2.5">{feature.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{feature.description}</p>
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
              Discover the System
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW THE AI WORKS */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#0a0a0d' }}>
        {/* Video Background - More Visible */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/ai-section-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d]/80 via-[#0a0a0d]/75 to-[#0a0a0d]/80" />
        </div>
        <FloatingParticles />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
                AI That Learns<br />
                <span className="text-gold">How You Learn</span>
              </h2>
              
              <div className="space-y-7">
                {[
                  { num: "1", title: "You answer questions", desc: "About your experience, goals, and trading style." },
                  { num: "2", title: "AI analyzes your skills", desc: "Identifies gaps, strengths, and learning preferences." },
                  { num: "3", title: "Your roadmap is built", desc: "A personalized curriculum designed for your growth." },
                  { num: "4", title: "Content unlocks as you improve", desc: "Advanced lessons appear when you prove you are ready." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-lg bg-gold/[0.1] border border-gold/25 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">{item.num}</span>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-foreground font-semibold mb-1.5">{item.title}</h4>
                      <p className="text-foreground/55 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-10">
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
                  Build My Roadmap
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.08] to-transparent p-10 flex items-center justify-center" style={{ boxShadow: '0 0 80px rgba(212, 175, 55, 0.15)' }}>
                <Brain className="w-36 h-36 text-gold/60" strokeWidth={0.5} />
                <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 120px rgba(212, 175, 55, 0.1)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT USERS LEARN */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Structured Learning.<br />
              <span className="text-gold">Real Progression.</span>
            </h2>
            <p className="text-lg text-foreground/55 max-w-xl mx-auto">
              From fundamentals to professional-level execution.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {learningAreas.map((area, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full border border-gold/25 bg-gold/[0.06] text-foreground/80 font-medium hover:border-gold/40 hover:bg-gold/[0.1] transition-all duration-300 cursor-default"
              >
                {area}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
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
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* MARKETS EXPLORER TERMINAL */}
      <MarketsExplorer />

      {/* HOW IT WORKS - STEPS */}
      <HowItWorksSection steps={steps} />

      {/* SEE WHAT'S INSIDE */}
      <InsideLookSection />

      {/* TESTIMONIALS */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/20 via-transparent to-navy-light/20" />
        <NeuralMesh />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Traders Who Found<br />
              <span className="text-gold">Their Structure</span>
            </h2>
            <p className="text-lg text-foreground/55 max-w-xl mx-auto">
              Real results from traders who stopped guessing.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-gold/15 bg-card/40 backdrop-blur-sm relative"
                style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)' }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />
                <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                    <User className="w-6 h-6 text-gold/60" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                    <p className="text-foreground/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-14">
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
              Join Them Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-28 lg:py-36 relative" style={{ background: '#0a0a0d' }}>
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Is This For You?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TypingSection 
              items={forYou} 
              icon={Check} 
              title="Nasr Lector is for you if:" 
              isForYou={true} 
            />
            <TypingSection 
              items={notForYou} 
              icon={X} 
              title="Nasr Lector is NOT for you if:" 
              isForYou={false} 
            />
          </div>
          
          {/* CTA */}
          <div className="text-center mt-14">
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
              I'm Ready to Start
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT - COMPARISON */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Nasr Lector<br />
              <span className="text-gold">Is Different</span>
            </h2>
          </div>
          
          <div className="rounded-2xl border border-gold/15 overflow-hidden">
            <div className="grid grid-cols-3 bg-gold/[0.08] p-5">
              <div className="text-foreground/55 font-medium text-sm lg:text-base">Feature</div>
              <div className="text-center text-foreground/55 font-medium text-sm lg:text-base">Typical Courses</div>
              <div className="text-center text-gold font-semibold text-sm lg:text-base">Nasr Lector</div>
            </div>
            
            {comparison.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-5 items-center ${index % 2 === 0 ? 'bg-card/25' : 'bg-card/10'}`}>
                <div className="text-foreground/70 text-sm lg:text-base">{item.feature}</div>
                <div className="flex justify-center">
                  <X className="w-5 h-5 text-destructive/50" />
                </div>
                <div className="flex justify-center">
                  <Check className="w-5 h-5 text-emerald" />
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-14">
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
              Experience the Difference
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FINAL CTA */}
      <section id="start" className="py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/40 via-transparent to-navy" />
        <NeuralMesh />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight">
              Stop Guessing.<br />
              <span className="text-gold">Start Trading with Structure.</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-foreground/55 max-w-xl mx-auto mb-14">
              Your personalized AI trading roadmap is waiting.
            </p>
            
            <a 
              href="https://trade.nasrlector.com/landing?signup=1" 
              className="text-lg px-14 py-5 group inline-flex items-center font-semibold"
              style={{ 
                background: 'linear-gradient(135deg, hsl(43 76% 52%), hsl(40 80% 42%))',
                color: 'hsl(222 50% 4%)',
                borderRadius: '50px',
                boxShadow: '0 0 60px rgba(212, 175, 55, 0.6), 0 10px 40px rgba(0,0,0,0.4)',
                animation: 'floatCTA 3s ease-in-out infinite',
              }}
            >
              Access Nasr Lector
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </a>
            
            <p className="text-foreground/40 text-sm mt-8">
              Free to start. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-25px) translateX(8px);
            opacity: 0.7;
          }
        }
        @keyframes floatCTA {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
