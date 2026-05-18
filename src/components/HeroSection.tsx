import { ArrowRight, Shield, Zap, Globe, Headphones, Building2, Play, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

// YouTube Video Popup Component
function YouTubePopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
}

// Floating gold particles component with parallax
function FloatingParticles({ count = 35, scrollY = 0 }: { count?: number; scrollY?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.4 + 0.15,
      parallaxFactor: 0.02 + Math.random() * 0.04,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
            transform: `translateY(${scrollY * particle.parallaxFactor}px)`,
          }}
        />
      ))}
    </div>
  );
}

// Dubai skyline SVG silhouette
function DubaiSkyline({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.06] pointer-events-none"
      style={{ transform: `translateY(${scrollY * 0.02}px)` }}
    >
      <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
        <path d="M580 300 L580 40 L590 10 L600 40 L600 300 Z" fill="url(#skylineGold)" />
        <path d="M573 100 L580 100 L580 300 L573 300 Z" fill="url(#skylineGold)" />
        <path d="M600 100 L607 100 L607 300 L600 300 Z" fill="url(#skylineGold)" />
        <path d="M568 150 L573 150 L573 300 L568 300 Z" fill="url(#skylineGold)" opacity="0.7" />
        <path d="M607 150 L612 150 L612 300 L607 300 Z" fill="url(#skylineGold)" opacity="0.7" />
        <path d="M180 300 L180 170 L190 165 L200 170 L200 300 Z" fill="url(#skylineGold)" />
        <path d="M220 300 L220 140 L232 135 L244 140 L244 300 Z" fill="url(#skylineGold)" />
        <path d="M265 300 L265 180 L282 175 L299 180 L299 300 Z" fill="url(#skylineGold)" />
        <path d="M320 300 L320 155 L335 148 L350 155 L350 300 Z" fill="url(#skylineGold)" />
        <path d="M380 300 L380 120 L388 110 L400 105 L412 110 L420 120 L420 300 Z" fill="url(#skylineGold)" />
        <path d="M440 300 L440 145 L458 138 L476 145 L476 300 Z" fill="url(#skylineGold)" />
        <path d="M495 300 L495 125 L508 115 L520 110 L532 115 L545 125 L545 300 Z" fill="url(#skylineGold)" />
        <path d="M660 300 L660 160 L680 155 L700 160 L700 300 Z" fill="url(#skylineGold)" />
        <path d="M720 300 L720 130 L740 120 L760 130 L760 300 Z" fill="url(#skylineGold)" />
        <path d="M785 300 L785 170 L808 165 L831 170 L831 300 Z" fill="url(#skylineGold)" />
        <path d="M860 300 L860 150 L885 140 L910 145 L935 155 L935 300 Z" fill="url(#skylineGold)" />
        <path d="M960 300 L960 175 L985 168 L1010 175 L1010 300 Z" fill="url(#skylineGold)" />
        <path d="M80 300 L80 210 L115 205 L150 210 L150 300 Z" fill="url(#skylineGold)" opacity="0.4" />
        <path d="M1040 300 L1040 195 L1080 190 L1120 195 L1120 300 Z" fill="url(#skylineGold)" opacity="0.4" />
        <defs>
          <linearGradient id="skylineGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Authority badges data
const authorityBadges = [
  { icon: Shield, label: "Licensed CFD Broker" },
  { icon: Zap, label: "Fast Execution" },
  { icon: Globe, label: "MENA & India" },
  { icon: Headphones, label: "24/5 Support" },
  { icon: Building2, label: "Institutional Liquidity" },
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #020306 0%, #030508 25%, #040810 50%, #02050a 75%, #020306 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020306] via-[#050a14]/80 to-[#020306]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020306] via-transparent to-[#020306]/60" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(2,3,6,0.7) 70%, rgba(2,3,6,0.95) 100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.3) 0%, transparent 50%),
                             radial-gradient(ellipse at 70% 80%, rgba(212,175,55,0.15) 0%, transparent 45%)`,
          }}
        />
        <div className="gold-noise-overlay" style={{ opacity: 0.03 }} />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
        <DubaiSkyline scrollY={scrollY} />
        <FloatingParticles count={40} scrollY={scrollY} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className="text-center lg:text-left"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            {/* Main Headline */}
            <div className="relative mb-6">
              {/* Subtle gold halo glow behind headline */}
              <div 
                className="absolute -inset-x-12 -inset-y-8 -z-10 opacity-[0.12] blur-[60px]"
                style={{
                  background: 'radial-gradient(ellipse at 40% 50%, rgba(212,175,55,0.5) 0%, transparent 60%)',
                }}
              />
              <div 
                className="absolute -inset-x-6 -inset-y-2 -z-10 opacity-50"
                style={{
                  background: 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.6) 0%, transparent 70%)',
                }}
              />
              <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[0.95] tracking-tight opacity-0 animate-fade-in">
                <span className="text-foreground block drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  Trade Global
                </span>
                <span className="text-foreground block drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  Markets
                </span>
                <span className="text-foreground block drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] mt-1">
                  with <span 
                    className="font-heading italic"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f5e6a3 35%, #d4af37 55%, #b8860b 75%, #d4af37 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.35))',
                    }}
                  >Confidence</span>
                </span>
              </h1>
              <p 
                className="text-sm sm:text-base font-medium tracking-wider mt-2 opacity-0 animate-fade-in animation-delay-200"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f5e6a3 40%, #d4af37 60%, #b8860b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Powered by Nasr Trade
              </p>
            </div>

            {/* USP Sentence - Refined */}
            <p 
              className="text-[10px] sm:text-xs tracking-[0.08em] uppercase font-normal mb-5 opacity-0 animate-fade-in animation-delay-200"
              style={{ 
                color: 'rgba(212,175,55,0.55)',
              }}
            >
              Premium trading for MENA & India's fastest-growing investors.
            </p>

            {/* Thin gold divider */}
            <div className="h-px w-20 mx-auto lg:mx-0 mb-6 opacity-0 animate-fade-in animation-delay-200"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
            />

            {/* Subheadline */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-foreground/80 font-light mb-6 opacity-0 animate-fade-in animation-delay-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience institutional-grade execution, transparent pricing, and premium trading conditions across Forex, Crypto, Stocks, Commodities, and Indices.
            </p>

            {/* Authority Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-12 opacity-0 animate-fade-in animation-delay-400">
              {authorityBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-gold/25 bg-[#040810]/70 backdrop-blur-sm"
                  style={{ clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)' }}
                >
                  <badge.icon className="w-3 h-3 text-gold/80" strokeWidth={1.5} />
                  <span className="text-[10px] sm:text-[11px] font-medium text-foreground/80 tracking-wide">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-2 mb-10 opacity-0 animate-fade-in animation-delay-400">
              <a
                href="#accounts"
                className="group relative inline-flex items-center justify-center px-12 py-5 text-base sm:text-lg font-extrabold tracking-wide transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #ffe066 0%, #f5d742 20%, #d4af37 50%, #c9a227 70%, #b8860b 100%)',
                  color: '#020306',
                  boxShadow: '0 0 60px rgba(212,175,55,0.4), 0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.25), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.35)',
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                }}
              >
                <span className="relative z-10 flex items-center">
                  Start Trading
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
                />
              </a>
              
              <a
                href="#accounts"
                className="relative inline-flex items-center justify-center px-10 py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-500 hover:bg-gold/10"
                style={{
                  color: '#d4af37',
                  border: '1px solid rgba(212,175,55,0.4)',
                  boxShadow: '0 0 20px rgba(212,175,55,0.08), inset 0 0 15px rgba(212,175,55,0.02)',
                  clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                }}
              >
                Try Free Demo
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground opacity-0 animate-fade-in animation-delay-600 max-w-md mx-auto lg:mx-0">
              Join thousands of traders who choose Nasr Trade for reliability, speed, and transparency.
            </p>
          </div>

          {/* Right - Premium Cinematic Video Panel */}
          <div 
            className="relative opacity-0 animate-fade-in animation-delay-400"
            style={{ transform: `translateY(${scrollY * -0.015}px)` }}
          >
            {/* Dubai skyline silhouette behind video */}
            <div 
              className="absolute -bottom-8 -left-12 -right-12 h-[60%] opacity-[0.07] pointer-events-none"
            >
              <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                <path d="M380 200 L380 30 L388 8 L396 30 L396 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M374 70 L380 70 L380 200 L374 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M396 70 L402 70 L402 200 L396 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M120 200 L120 120 L135 115 L150 120 L150 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M180 200 L180 95 L200 88 L220 95 L220 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M260 200 L260 110 L285 100 L310 110 L310 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M450 200 L450 115 L475 108 L500 115 L500 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M540 200 L540 90 L565 80 L590 90 L590 200 Z" fill="url(#videoBgSkyline)" />
                <path d="M630 200 L630 130 L660 120 L690 130 L690 200 Z" fill="url(#videoBgSkyline)" />
                <defs>
                  <linearGradient id="videoBgSkyline" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#d4af37" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Outer ambient glow */}
            <div 
              className="absolute -inset-16 blur-[80px] opacity-60"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, transparent 55%)' }}
            />
            
            {/* Video Panel - Premium Display - Enlarged 5-10% */}
            <div 
              className="relative overflow-hidden rounded-2xl"
              style={{ 
                border: '2px solid rgba(212,175,55,0.45)',
                boxShadow: `
                  0 50px 120px -30px rgba(0,0,0,0.85),
                  0 0 80px rgba(212,175,55,0.12),
                  0 25px 70px -20px rgba(0,0,0,0.7),
                  0 0 3px rgba(212,175,55,0.6),
                  inset 0 0 80px rgba(0,0,0,0.4)
                `,
                background: 'linear-gradient(145deg, rgba(12,16,24,0.5) 0%, rgba(6,8,14,0.4) 100%)',
                transform: 'scale(1.08)',
                transformOrigin: 'center center',
              }}
            >
              {/* Inner vignette shadow for depth - Enhanced */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                style={{
                  boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,0.6), inset 0 0 50px rgba(212,175,55,0.05)',
                }}
              />

              {/* Inner gold border highlight */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.25), inset 0 0 2px rgba(212,175,55,0.1)',
                }}
              />
              
              {/* Video Element */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{
                    aspectRatio: '16/9',
                    maxHeight: '520px',
                    minHeight: '400px',
                  }}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Play Button Overlay to open YouTube */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f5e6a3 50%, #d4af37 100%)',
                      boxShadow: '0 0 40px rgba(212,175,55,0.5), 0 8px 30px rgba(0,0,0,0.4)',
                    }}
                  >
                    <Play className="w-8 h-8 text-[#070b14] ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
                </button>
              </div>
              
              {/* Enhanced vignette overlay on video */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none z-15"
                style={{
                  background: `
                    radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.18) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.22) 100%)
                  `,
                }}
              />

              {/* Corner accent glows */}
              <div 
                className="absolute top-0 left-0 w-44 h-44 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(212,175,55,0.08) 0%, transparent 65%)',
                }}
              />
              <div 
                className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom right, rgba(212,175,55,0.06) 0%, transparent 65%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* YouTube Popup */}
      <YouTubePopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
