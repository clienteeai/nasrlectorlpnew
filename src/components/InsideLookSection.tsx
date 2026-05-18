import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";

// Platform screenshots
const platformImages = [
  { src: "/how-it-works/slide-1.png", title: "Dashboard Overview" },
  { src: "/how-it-works/slide-2.png", title: "Video Library" },
  { src: "/how-it-works/slide-3.png", title: "Quiz System" },
  { src: "/how-it-works/slide-4.png", title: "Module Selection" },
  { src: "/how-it-works/slide-5.png", title: "Learning Progress" },
  { src: "/how-it-works/slide-6.png", title: "Knowledge Quiz" },
  { src: "/how-it-works/slide-7.png", title: "AI Stock Analyzer" },
  { src: "/how-it-works/slide-8.png", title: "Analysis Report" },
  { src: "/how-it-works/slide-9.png", title: "AI Trading Assistant" },
  { src: "/how-it-works/slide-10.png", title: "Trading Diary" },
];

// Floating gold particles
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
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

export default function InsideLookSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % platformImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % platformImages.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + platformImages.length) % platformImages.length);
  };

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy" />
      <FloatingParticles />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/[0.08] mb-6">
            <Monitor className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">Platform Preview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            See What's Inside
          </h2>
          <p className="text-lg text-foreground/55 max-w-xl mx-auto">
            A complete trading education system designed for serious traders.
          </p>
        </div>

        {/* Main Display Window */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative glow */}
          <div 
            className="absolute -inset-8 rounded-3xl opacity-40 blur-3xl -z-10"
            style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.25) 0%, transparent 60%)' }}
          />
          
          {/* Window Frame */}
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{ 
              border: '2px solid rgba(212,175,55,0.35)',
              boxShadow: '0 0 80px rgba(212,175,55,0.15), 0 25px 60px rgba(0,0,0,0.5)',
              background: 'linear-gradient(145deg, rgba(12,16,24,0.8) 0%, rgba(6,8,14,0.9) 100%)',
            }}
          >
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gold/20 bg-card/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-gold/60" />
                <div className="w-3 h-3 rounded-full bg-emerald/60" />
              </div>
              <span className="text-sm text-foreground/50 font-medium">
                {platformImages[currentSlide].title}
              </span>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>
            
            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-card/30">
              {platformImages.map((image, index) => (
                <div
                  key={image.src}
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `scale(${currentSlide === index ? 1 : 1.02})`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy/80 border border-gold/30 text-gold hover:bg-navy hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy/80 border border-gold/30 text-gold hover:bg-navy hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {platformImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gold w-8' 
                    : 'bg-gold/30 w-2 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
          
          {/* Current slide label */}
          <p className="text-center text-foreground/40 text-sm mt-4">
            {currentSlide + 1} / {platformImages.length}
          </p>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://trade.nasrlector.com/?signup=1" 
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
                color: '#0a0a0d',
                borderRadius: '50px',
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.35)',
              }}
            >
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
