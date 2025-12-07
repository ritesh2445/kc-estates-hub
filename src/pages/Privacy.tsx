import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KC Associates</title>
        <meta name="description" content="KC Associates privacy policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <Layout>
        <section className="bg-muted pt-28 pb-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    list a property, schedule a visit, or contact us for support. This includes your name, 
                    email address, phone number, and property preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Respond to your comments and questions</li>
                    <li>Connect buyers with sellers and agents</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share your information with property 
                    owners, agents, or service providers who assist in our operations, always with 
                    appropriate confidentiality agreements in place.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage 
                    patterns, and deliver personalized content. You can control cookie preferences 
                    through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal information. 
                    You can also opt out of marketing communications at any time by clicking the 
                    unsubscribe link in our emails.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@kcassociates.in" className="text-primary hover:underline">
                      privacy@kcassociates.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}