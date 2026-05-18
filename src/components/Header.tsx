import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MENU_LINKS = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "/markets" },
    { name: "Syllabus", href: "/syllabus" },
    { name: "AI Mentor", href: "/ai-mentor" },
    { name: "Calendar", href: "/calendar" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`fixed top-11 left-0 right-0 z-50 transition-all duration-300 border-b border-border/30`}
        style={{ 
          background: isScrolled ? 'rgba(250, 248, 245, 0.96)' : 'rgba(250, 248, 245, 0.90)', 
          backdropFilter: 'blur(24px)' 
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="font-serif text-xl lg:text-2xl font-bold text-foreground">
                Nasr <span className="text-gradient-gold">Lector</span>
              </span>
            </Link>

            {/* Desktop Center Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-3 z-10">
              {MENU_LINKS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-2.5 py-2 text-xs lg:text-sm font-bold tracking-luxury transition-colors duration-300 relative group uppercase ${
                      active ? "text-gold" : "text-foreground/75 hover:text-gold"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-gold transition-all duration-300 ${
                      active ? "w-8" : "w-0 group-hover:w-8"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <a 
                  href="https://trade.nasrlector.com/landing?signup=1"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(40 42% 62%), hsl(38 45% 48%))',
                    color: '#070b14',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)',
                  }}
                >
                  Sign Up
                </a>
                <a 
                  href="https://trade.nasrlector.com/login" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/10 px-5 py-2.5 text-xs font-bold text-foreground/85 transition-all duration-300 hover:bg-background/20 hover:text-foreground"
                >
                  <User className="w-3.5 h-3.5" />
                  Log In
                </a>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-border/50 bg-navy-light/60 text-foreground/80 hover:text-foreground hover:border-gold/30 transition-all duration-300 flex items-center justify-center"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gold" />
                ) : (
                  <div className="space-y-1.5 w-5 flex flex-col items-end">
                    <span className="h-0.5 w-5 bg-foreground rounded-full" />
                    <span className="h-0.5 w-3.5 bg-gold rounded-full" />
                    <span className="h-0.5 w-5 bg-foreground rounded-full" />
                  </div>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 border-t border-border/50 bg-[#faf8f5] backdrop-blur-2xl shadow-2xl py-6 px-4 animate-fade-in z-45"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
          >
            <div className="flex flex-col gap-2.5">
              {MENU_LINKS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold tracking-luxury rounded-xl transition-all duration-300 uppercase ${
                    isActive(item.href) 
                      ? "text-gold bg-navy-light/50 font-extrabold" 
                      : "text-foreground/80 hover:text-gold hover:bg-navy-light/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <hr className="border-border/30 my-3" />
              
              <div className="flex flex-col gap-2.5 px-4">
                <a 
                  href="https://trade.nasrlector.com/landing?signup=1"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 font-bold text-xs rounded-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(40 42% 62%), hsl(38 45% 48%))',
                    color: '#070b14'
                  }}
                >
                  Sign Up Free
                </a>
                <a 
                  href="https://trade.nasrlector.com/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 font-bold text-xs rounded-xl border border-border/60 hover:border-gold/30 text-foreground transition-all duration-300"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
