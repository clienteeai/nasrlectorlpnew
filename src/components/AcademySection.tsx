import { Brain, Video, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { useMemo } from "react";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gold/25"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const NeuralLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="30%" stopColor="#d4af37" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
            <stop offset="70%" stopColor="#d4af37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Neural network lines */}
        <path 
          d="M0,200 Q150,180 300,200 T600,190 T900,210 T1200,200" 
          stroke="url(#neuralGradient)" 
          strokeWidth="1.5" 
          fill="none"
          filter="url(#glow)"
          className="animate-pulse"
        />
        <path 
          d="M0,180 Q200,220 400,180 T800,220 T1200,180" 
          stroke="url(#neuralGradient)" 
          strokeWidth="1" 
          fill="none"
          filter="url(#glow)"
          opacity="0.5"
        />
        {/* Neural nodes */}
        {[150, 350, 550, 750, 950].map((x, i) => (
          <circle 
            key={i} 
            cx={x} 
            cy={190 + (i % 2 === 0 ? 10 : -10)} 
            r="4" 
            fill="#d4af37" 
            filter="url(#glow)"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

const aiFeatures = [
  { 
    icon: Brain, 
    title: "Personalized AI Learning Path",
    description: "Custom roadmap created from your goals & experience."
  },
  { 
    icon: Video, 
    title: "Video Courses from Beginner to Advanced",
    description: "Structured lessons across Forex, Crypto, Stocks & Indices."
  },
  { 
    icon: BarChart3, 
    title: "AI-Driven Strategy & Market Insights",
    description: "Daily simplified breakdowns with clear actions and explanations."
  },
];

const courses = [
  {
    title: "Forex Foundations",
    description: "Basics of FX trading & platform navigation.",
    level: "Beginner",
    levelColor: "bg-emerald/15 text-emerald border-emerald/25",
  },
  {
    title: "Crypto & Digital Assets",
    description: "How CFDs on crypto work & effective strategies.",
    level: "Intermediate",
    levelColor: "bg-gold/15 text-gold border-gold/25",
  },
  {
    title: "Risk Management & Psychology",
    description: "Managing risk, emotions, and capital.",
    level: "All Levels",
    levelColor: "bg-blue-400/15 text-blue-400 border-blue-400/25",
  },
  {
    title: "Advanced CFD Strategies",
    description: "Professional setups and complex techniques.",
    level: "Advanced",
    levelColor: "bg-purple-400/15 text-purple-400 border-purple-400/25",
  },
];

export default function AcademySection() {
  return (
    <section 
      id="academy" 
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0d' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.015] via-transparent to-gold/[0.01]" />
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        <FloatingParticles />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ maxWidth: '1320px' }}>
        {/* Header Block with Neural Lines */}
        <div className="text-center mb-20 lg:mb-24 relative">
          <NeuralLines />
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/25 bg-gold/[0.08] mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">AI-Powered Education</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight relative z-10">
            Nasr Trade <span className="text-gold">Academy</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            AI-powered trading education tailored for MENA & India.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Description Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Master Forex, Crypto, Stocks, and risk management with structured lessons, 
                webinars, and AI-guided tools. Whether you're a beginner or an active trader, 
                the Nasr Trade Academy adapts to your goals and experience.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our AI analyzes your answers, skills, and trading style to build a personalized 
                roadmap — giving you only the lessons, tools, and strategies that matter for your growth.
              </p>
            </div>

            {/* AI Features List */}
            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl border border-gold/30 bg-gold/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.12] group-hover:border-gold/50 transition-all duration-400">
                    <feature.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-foreground font-semibold text-lg mb-1.5">{feature.title}</h4>
                    <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Course Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="relative p-6 lg:p-7 rounded-2xl border border-white/[0.08] transition-all duration-400 hover:border-gold/30 group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.08), inset 0 0 20px rgba(212, 175, 55, 0.03)'
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-gold/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10">
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-gold/40 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-gold/40 to-transparent" />
                </div>

                {/* Level Badge */}
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-5 border ${course.levelColor}`}>
                  {course.level}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2.5 group-hover:text-gold transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-sm text-foreground/55 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Link */}
                <a 
                  href="#academy" 
                  className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors duration-300 font-medium group/link"
                >
                  View Course
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Wide Gold CTA Bar */}
        <div 
          className="relative rounded-2xl p-8 lg:p-10 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.06) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
          }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 60px rgba(212, 175, 55, 0.08)',
            }}
          />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/60 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
          </div>
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-gold/60 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-t from-gold/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/60 to-transparent" />
            <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-gold/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-gold/60 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
          </div>

          <div className="relative z-10">
            <a 
              href="#academy" 
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group mb-4"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.35), 0 4px 24px rgba(0, 0, 0, 0.4)',
                color: '#0a0a0d'
              }}
            >
              Start Your Personalized Academy
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </a>
            <p className="text-foreground/50 text-sm">
              Answer a few quick questions and let AI build your roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
