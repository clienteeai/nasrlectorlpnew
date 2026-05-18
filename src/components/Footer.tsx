import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

type PolicyType = "terms" | "privacy" | "risk" | null;

const policyContent = {
  terms: {
    title: "Terms of Use",
    route: "/terms-of-use",
  },
  privacy: {
    title: "Privacy Policy",
    route: "/privacy-policy",
  },
  risk: {
    title: "Risk Disclosure",
    route: "/risk-disclosure",
  },
};

const policyLinks = [
  { name: "Terms of Use", type: "terms" as PolicyType },
  { name: "Privacy Policy", type: "privacy" as PolicyType },
  { name: "Risk Disclosure", type: "risk" as PolicyType },
];

// Policy Popup Component
function PolicyPopup({ 
  type, 
  onClose 
}: { 
  type: PolicyType; 
  onClose: () => void;
}) {
  if (!type) return null;

  const policy = policyContent[type];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Popup Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(145deg, #0a0a0d 0%, #0d0d12 100%)',
          border: '1px solid rgba(212,175,55,0.25)',
          boxShadow: '0 0 100px rgba(212,175,55,0.15), 0 25px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20 bg-card/30">
          <h2 className="font-serif text-xl font-bold text-foreground">{policy.title}</h2>
          <div className="flex items-center gap-3">
            <Link 
              to={policy.route}
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              onClick={onClose}
            >
              <ExternalLink className="w-4 h-4" />
              Open Full Page
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <X className="w-5 h-5 text-foreground/70" />
            </button>
          </div>
        </div>
        
        {/* Content - iframe */}
        <div className="h-[70vh] overflow-hidden">
          <iframe
            src={policy.route}
            className="w-full h-full border-0"
            title={policy.title}
          />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  return (
    <>
      {/* Policy Popup */}
      <PolicyPopup type={activePolicy} onClose={() => setActivePolicy(null)} />

      <footer className="bg-navy border-t border-border/30 pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12">
            {/* Brand Column */}
            <div>
              <a href="#" className="flex items-center mb-4">
                <img 
                  src={logoLight} 
                  alt="Nasr Trade" 
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trade Forex, Crypto, Stocks, Commodities, and Indices via CFDs with Nasr Trade. 
                A modern trading experience tailored for traders from the Middle East, India, 
                and around the world.
              </p>
            </div>

            {/* Policies Column */}
            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                {policyLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => setActivePolicy(link.type)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
                <p>
                  <span className="text-gold font-semibold">Nasr Trade</span>
                </p>
                <p>
                  The company Nasr Trade LTD was formed in Mauritius under the Limited Liability 
                  Companies with licence number GB23202226.
                </p>
                <p>
                  <span className="text-foreground/70">Contact:</span>{" "}
                  <a 
                    href="mailto:support@nallio.io" 
                    className="text-gold hover:underline"
                  >
                    support@nallio.io
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="border-t border-border/30 pt-8 mb-8">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trading Foreign Exchange (Forex) and Contracts for Differences (CFD's) is highly 
              speculative, carries a high level of risk and may not be suitable for all investors. 
              You may sustain a loss of some or all of your invested capital, therefore, you should 
              not speculate with capital that you cannot afford to lose. You should be aware of all 
              the risks associated with trading on margin.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4">
              This website is marketed and operated by Nasr Trade LTD and is located at C/o ANIMO 
              ASSOCIATES (MAURITIUS) LIMITED, 8th Floor, The Core, 62 ICT Avenue, Cybercity, 
              Ebene 72201, Mauritius. Restricted Jurisdictions: We do not establish accounts to 
              residents of certain jurisdictions including the USA, Japan, North Korea, Iran, 
              the EU and the EEA. For further details please see{" "}
              <button 
                onClick={() => setActivePolicy("terms")}
                className="text-gold hover:underline"
              >
                Terms of Use
              </button>,{" "}
              <button 
                onClick={() => setActivePolicy("privacy")}
                className="text-gold hover:underline"
              >
                Privacy Policy
              </button>{" "}and{" "}
              <button 
                onClick={() => setActivePolicy("risk")}
                className="text-gold hover:underline"
              >
                Risk Disclosure
              </button>.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/30 pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nasr Trade LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
