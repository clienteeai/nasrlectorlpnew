import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RiskDisclosure() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30" style={{ background: 'rgba(10, 10, 13, 0.92)', backdropFilter: 'blur(20px)' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-serif text-xl lg:text-2xl font-bold text-foreground">Nasr <span className="text-gold">Lector</span></span>
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Risk Disclosure</h1>
          <p className="text-foreground/50 text-sm mb-12">Last updated: 9.1.2026</p>

          <div className="prose prose-invert prose-gold max-w-none space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. General Risk Warning</h2>
              <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/[0.05] mb-4">
                <p className="text-foreground/80 leading-relaxed font-semibold">
                  Trading and investing in financial markets involves significant risk and is not suitable for everyone.
                </p>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                You may lose some or all of your invested capital.
                Past performance does not guarantee future results.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Before engaging in any trading or investment activity, you should carefully consider your financial situation, experience level, and risk tolerance.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Educational Purpose Only</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The academy platform is provided strictly for educational and informational purposes.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">All content, including but not limited to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Videos</li>
                <li>Articles</li>
                <li>AI-generated insights</li>
                <li>Tools and calculators</li>
                <li>Quizzes and learning paths</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                is intended to help users understand how markets work, not to provide investment advice.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4 mb-4">Nothing on the platform constitutes:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Financial advice</li>
                <li>Investment advice</li>
                <li>Trading recommendations</li>
                <li>Solicitation to buy or sell any financial instrument</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. No Guarantees</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">There are no guarantees of:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Profitability</li>
                <li>Success</li>
                <li>Performance</li>
                <li>Income</li>
                <li>Trading results</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Any examples, scenarios, simulations, or explanations shown are illustrative only and may not reflect real market conditions.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. AI & Automated Insights Risk</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The platform may use AI-based systems to generate explanations, summaries, or educational insights.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">AI-generated content:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>May be incomplete, outdated, or inaccurate</li>
                <li>Is based on patterns and historical information</li>
                <li>Does not account for your personal financial situation</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4 font-semibold">
                AI outputs should never be relied upon as the sole basis for trading or investment decisions.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Market Volatility</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">Financial markets can be:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Highly volatile</li>
                <li>Unpredictable</li>
                <li>Influenced by economic, political, and technical factors</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Rapid price movements can occur with little or no warning and may result in substantial losses.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Leverage & Derivatives Risk</h2>
              <p className="text-foreground/70 leading-relaxed">
                Certain financial instruments, including leveraged products and derivatives, involve a high level of risk.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Leverage can amplify both gains and losses and may result in losses exceeding your initial investment.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Educational discussion of such instruments does not imply suitability or recommendation.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Responsibility for Decisions</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">You acknowledge and agree that:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>All trading and investment decisions are made solely by you</li>
                <li>You are responsible for evaluating any risks involved</li>
                <li>You should seek advice from qualified financial professionals if needed</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                The platform operator, content creators, and partners are not responsible for your decisions or outcomes.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Jurisdictional Considerations</h2>
              <p className="text-foreground/70 leading-relaxed">
                Trading and investment regulations vary by country and jurisdiction.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                You are responsible for ensuring that any trading or investment activity you engage in complies with applicable laws and regulations in your location.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>The platform operator is not liable for financial losses</li>
                <li>No responsibility is accepted for reliance on educational content</li>
                <li>Use of the platform is entirely at your own risk</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Acceptance of Risk</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">By using the academy platform, you confirm that:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>You understand the risks involved in trading and investing</li>
                <li>You accept full responsibility for your actions</li>
                <li>You acknowledge that education does not eliminate risk</li>
              </ul>
            </section>

            {/* Platform Information */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Platform Information</h2>
              <div className="p-6 rounded-lg border border-gold/20 bg-card/30 space-y-4">
                <div>
                  <p className="text-gold font-semibold mb-1">Brand:</p>
                  <p className="text-foreground/70">Nallio</p>
                </div>
                <div>
                  <p className="text-gold font-semibold mb-1">Owned by:</p>
                  <p className="text-foreground/70">Clientee AI, s.r.o.</p>
                </div>
                <div>
                  <p className="text-gold font-semibold mb-1">Academy & AI built for:</p>
                  <p className="text-foreground/70">Nasr Trade LTD</p>
                  <p className="text-foreground/50 text-sm mt-1">
                    C/o ANIMO ASSOCIATES (MAURITIUS) LIMITED<br />
                    8th Floor, The Core, 62 ICT Avenue<br />
                    Cybercity, Ebene 72201<br />
                    Mauritius
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home CTA */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
                color: '#0a0a0d',
                borderRadius: '4px',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-foreground/40">
            © {new Date().getFullYear()} Nasr Trade LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
