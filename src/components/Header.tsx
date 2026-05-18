import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const instruments = [
  { name: "Forex", href: "#instruments" },
  { name: "Stocks", href: "#instruments" },
  { name: "Indices", href: "#instruments" },
  { name: "Comodities", href: "#instruments" },
  { name: "Cryptosurrencies", href: "#instruments" },
];

const policies = [
  { name: "Terms and Conditions", href: "#terms" },
  { name: "Refund Policy", href: "#refund" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "AML and KYC Policy", href: "#aml" },
  { name: "Risk Disclaimer", href: "#risk" },
];

const navItems = [
  { name: "Markets", href: "#markets" },
  { name: "Syllabus", href: "#syllabus" },
  { name: "AI Mentor", href: "#ai-mentor" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "Instruments", href: "#instruments", dropdown: instruments },
  { name: "Policies", href: "#policies", dropdown: policies },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - N in Hexagon */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5d742" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4 L36 13 L36 27 L20 36 L4 27 L4 13 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <text
                  x="20"
                  y="24"
                  textAnchor="middle"
                  fill="url(#logoGradient)"
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="DM Serif Display, serif"
                >
                  N
                </text>
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-wide">
              <span className="text-foreground">Nasr</span>{" "}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #f5d742 0%, #d4af37 50%, #b8860b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Trade</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )}
                    />
                  )}
                </a>
                
                {/* Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass-card p-2 animate-fade-in">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://trade.nasrlector.com/landing?signup=1"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, hsl(43 76% 52%), hsl(40 80% 42%))',
                color: 'hsl(222 50% 4%)',
                borderRadius: '50px',
                padding: '10px 24px',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 4px 16px rgba(0,0,0,0.3)',
              }}
            >
              Sign Up
            </a>
            <a 
              href="https://trade.nasrlector.com/login" 
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300 text-foreground/80 hover:text-foreground border border-foreground/20 hover:border-foreground/40"
              style={{ 
                borderRadius: '50px',
                padding: '10px 24px',
              }}
            >
              Log In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-navy/98 backdrop-blur-xl animate-fade-in z-40">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground/90 hover:text-foreground hover:bg-muted/30 rounded-lg transition-colors"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-5 h-5" />}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 mb-2 border-l border-border/50 pl-4">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2.5 text-foreground/70 hover:text-foreground transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="flex flex-col gap-3 mt-8">
              <a 
                href="https://trade.nasrlector.com/landing?signup=1"
                className="text-center py-3 font-semibold"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(43 76% 52%), hsl(40 80% 42%))',
                  color: 'hsl(222 50% 4%)',
                  borderRadius: '50px',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                Sign Up
              </a>
              <a 
                href="https://trade.nasrlector.com/login" 
                className="text-center py-3 font-semibold text-foreground/80 border border-foreground/20"
                style={{ borderRadius: '50px' }}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
