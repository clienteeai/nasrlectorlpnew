import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms of Use</h1>
          <p className="text-foreground/50 text-sm mb-12">Last updated: 9.1.2026</p>

          <div className="prose prose-invert prose-gold max-w-none space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/70 leading-relaxed">
                These Terms of Use ("Terms") govern your access to and use of the educational academy platform, including the website and mobile applications (the "Service").
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                The Service operates under the Nallio brand, which is owned and managed by Clientee AI, s.r.o.
                The educational academy and AI systems are built for Nasr Trade LTD.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                By accessing or using the Service, you agree to be bound by these Terms.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4 font-semibold">
                If you do not agree, you must not use the Service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Platform Purpose (Educational Only)</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">The Service is an educational platform designed to help users learn about:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Trading concepts</li>
                <li>Financial markets</li>
                <li>Risk management</li>
                <li>Market behavior</li>
              </ul>
              <div className="p-4 mt-4 rounded-lg border border-gold/20 bg-gold/[0.05]">
                <p className="text-foreground/70 leading-relaxed">
                  <span className="text-gold font-semibold">Important:</span> The Service does not provide financial, investment, legal, or tax advice. Nothing on the platform constitutes a recommendation to trade, invest, or use real capital.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. No Financial Advice Disclaimer</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">All content, including:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Videos</li>
                <li>AI-generated insights</li>
                <li>Calculators and tools</li>
                <li>Quizzes and analytics</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                is provided for educational and informational purposes only.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4 font-semibold">
                You are solely responsible for your financial decisions and actions.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. User Eligibility</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The Service is intended for individuals 18 years of age or older.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">By using the Service, you confirm that:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>You are at least 18 years old</li>
                <li>You have legal capacity under applicable law</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Accounts & Access</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                To access certain features, you must create an account.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Provide accurate and current information</li>
                <li>Keep your login credentials confidential</li>
                <li>Accept responsibility for all activity under your account</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                We may restrict or terminate access if misuse or abuse is detected.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. AI & Automated Systems</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The Service uses AI-based systems to support learning and education.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">AI outputs:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Are not guaranteed to be accurate</li>
                <li>May be incomplete or outdated</li>
                <li>Must not be relied upon as professional advice</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                AI tools are designed to support learning, not replace human judgment.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Mobile Application Use</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The Service is available via web browsers and mobile applications.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Mobile applications are distributed through third-party platforms such as the Apple App Store and Google Play Store.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">These app stores:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Are not responsible for the Service</li>
                <li>Do not provide support or maintenance</li>
                <li>Are not liable for platform content</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                All support requests must be directed to the platform operator.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">All content and materials, including:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Videos</li>
                <li>Text</li>
                <li>AI outputs</li>
                <li>Software</li>
                <li>Design elements</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                are protected by intellectual property laws.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4 font-semibold">
                You may not copy, redistribute, sell, or commercially exploit any part of the Service without written permission.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Prohibited Use</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Reverse engineer or manipulate the platform</li>
                <li>Abuse AI systems or scoring mechanisms</li>
                <li>Create multiple accounts to exploit features</li>
                <li>Use the Service for unlawful purposes</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4 font-semibold">
                Violation may result in suspension or termination.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Availability & Changes</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Service is provided "as is" and "as available."
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                We do not guarantee uninterrupted access, error-free operation, or permanent availability of features.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Features and content may change at any time.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>We are not responsible for trading losses</li>
                <li>We are not liable for decisions made using platform content</li>
                <li>Use of the Service is at your own risk</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">12. App Store Disclaimer</h2>
              <p className="text-foreground/70 leading-relaxed">
                These Terms are an agreement between you and the platform operator, not with Apple Inc. or Google LLC.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">Apple Inc. and Google LLC:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4 mt-2">
                <li>Are not parties to these Terms</li>
                <li>Have no responsibility for the Service</li>
                <li>Have no warranty obligations regarding the Service</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">13. Termination</h2>
              <p className="text-foreground/70 leading-relaxed">
                We reserve the right to suspend or terminate access to the Service at our discretion if these Terms are violated.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">14. Governing Law</h2>
              <p className="text-foreground/70 leading-relaxed">
                These Terms are governed by applicable laws, without prejudice to mandatory consumer protection laws.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">15. Changes to Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update these Terms at any time.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Continued use of the Service after changes means acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">16. Contact</h2>
              <p className="text-foreground/70 leading-relaxed">
                For questions regarding these Terms, please contact the platform operator.
              </p>
            </section>

            {/* Entity Summary */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Entity Summary</h2>
              <div className="p-6 rounded-lg border border-gold/20 bg-card/30 space-y-4">
                <div>
                  <p className="text-gold font-semibold mb-1">Brand:</p>
                  <p className="text-foreground/70">Nallio</p>
                </div>
                <div>
                  <p className="text-gold font-semibold mb-1">Owner:</p>
                  <p className="text-foreground/70">Clientee AI, s.r.o.</p>
                </div>
                <div>
                  <p className="text-gold font-semibold mb-1">Academy & AI built for:</p>
                  <p className="text-foreground/70">Nasr Trade LTD</p>
                  <p className="text-foreground/50 text-sm mt-1">
                    C/o ANIMO ASSOCIATES (MAURITIUS) LIMITED<br />
                    8th Floor, The Core, 62 ICT Avenue<br />
                    Cybercity, Ebene 72201, Mauritius
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
