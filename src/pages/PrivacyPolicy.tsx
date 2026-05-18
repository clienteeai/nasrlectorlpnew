import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/50 text-sm mb-12">Last updated: 9.1.2026</p>

          <div className="prose prose-invert prose-gold max-w-none space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/70 leading-relaxed">
                This Privacy Policy explains how personal data is collected, used, and protected when you use the academy platform and related services (the "Service").
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                The Service is operated under the Nallio brand, which is owned and managed by Clientee AI, s.r.o.
                The academy content and AI systems are built for Nasr Trade LTD.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                We respect your privacy and are committed to protecting your personal data in accordance with applicable data protection laws, including the GDPR.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Data Controller</h2>
              <div className="p-6 rounded-lg border border-gold/20 bg-card/30 space-y-4">
                <div>
                  <p className="text-gold font-semibold mb-1">Data Controller:</p>
                  <p className="text-foreground/70">Clientee AI, s.r.o.</p>
                  <p className="text-foreground/50 text-sm">(Operating the platform under the Nallio brand)</p>
                </div>
                <div>
                  <p className="text-gold font-semibold mb-1">Academy & AI Partner:</p>
                  <p className="text-foreground/70">Nasr Trade LTD</p>
                  <p className="text-foreground/50 text-sm">
                    C/o ANIMO ASSOCIATES (MAURITIUS) LIMITED<br />
                    8th Floor, The Core, 62 ICT Avenue<br />
                    Cybercity, Ebene 72201<br />
                    Mauritius
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. What Data We Collect</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">We may collect the following types of data:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">a) Account & Identity Data</h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1 ml-4">
                    <li>Email address</li>
                    <li>Login credentials (encrypted)</li>
                    <li>Account status and access level</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">b) Usage & Learning Data</h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1 ml-4">
                    <li>Videos watched, quizzes completed</li>
                    <li>Progress, points, achievements</li>
                    <li>Interactions with AI tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">c) Technical Data</h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1 ml-4">
                    <li>IP address</li>
                    <li>Device and browser information</li>
                    <li>Log data, timestamps</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">d) Communication Data</h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-1 ml-4">
                    <li>Emails sent and received</li>
                    <li>Support requests</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Purpose of Data Processing</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">We process personal data to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Provide access to the academy and its features</li>
                <li>Track learning progress and unlock content</li>
                <li>Operate AI-driven educational tools</li>
                <li>Communicate with users about their account</li>
                <li>Improve the quality and performance of the platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Legal Basis for Processing</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">We process personal data based on:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Performance of a contract (providing the Service)</li>
                <li>Legitimate interests (platform security, improvement)</li>
                <li>User consent (where required)</li>
                <li>Legal obligations</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Data Sharing</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">We do not sell personal data.</p>
              <p className="text-foreground/70 leading-relaxed mb-4">Data may be shared only with:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Technical service providers (hosting, analytics, email delivery)</li>
                <li>AI and infrastructure partners strictly for operating the Service</li>
                <li>Authorities if required by law</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                All partners are contractually bound to protect user data.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. International Transfers</h2>
              <p className="text-foreground/70 leading-relaxed">
                Data may be processed in the EU and outside the EU.
                Where required, appropriate safeguards are used to ensure GDPR compliance.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">We retain personal data only as long as necessary:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>While your account is active</li>
                <li>As required by legal or regulatory obligations</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                You may request deletion of your account at any time.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. User Rights</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion ("right to be forgotten")</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Requests can be made via the platform or support contact.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Security</h2>
              <p className="text-foreground/70 leading-relaxed">
                We apply appropriate technical and organizational measures to protect personal data, including encryption, access controls, and monitoring.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                However, no system is 100% secure.
              </p>
            </section>

            {/* Section 11 - Mobile App Data */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">11. Mobile App Data & Permissions</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">When using the Service via a mobile application, we may request access to:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Internet connectivity</li>
                <li>Device identifiers</li>
                <li>Push notification permissions</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4 mb-4">Push notifications are used only for:</p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Account-related messages</li>
                <li>Learning reminders</li>
                <li>Important platform updates</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4">
                You can manage notification permissions at any time through your device settings.
              </p>
            </section>

            {/* Section 12 - Age Requirement */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">12. Age Requirement</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Service is not intended for individuals under the age of 18.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                By using the Service, you confirm that you are at least 18 years old or have legal capacity under applicable law.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">13. Changes to This Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update this Privacy Policy from time to time.
                The latest version will always be available on the platform.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">14. Contact</h2>
              <p className="text-foreground/70 leading-relaxed">
                For privacy-related inquiries, please contact the platform operator.
              </p>
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
