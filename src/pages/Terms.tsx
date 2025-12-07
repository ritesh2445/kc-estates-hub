import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | KC Associates</title>
        <meta name="description" content="KC Associates terms of service - Read our terms and conditions for using our real estate platform." />
      </Helmet>

      <Layout>
        <section className="bg-muted pt-28 pb-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using KC Associates services, you agree to be bound by these Terms 
                    of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    KC Associates provides a platform for property listings, virtual tours, and 
                    connecting buyers, sellers, and agents. We facilitate transactions but are not 
                    a party to any agreement between users.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account. You agree to provide accurate 
                    and complete information when creating an account.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Property Listings</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Users who list properties must ensure that all information provided is accurate, 
                    complete, and not misleading. KC Associates reserves the right to remove any 
                    listing that violates these terms or applicable laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Payments and Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Token payments for property bookings are processed through secure payment gateways. 
                    Refund policies are subject to individual property terms and applicable laws. 
                    Please refer to our Refund Policy for detailed information.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on the KC Associates platform, including logos, text, graphics, and 
                    software, is the property of KC Associates or its licensors and is protected by 
                    intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    KC Associates is not liable for any indirect, incidental, or consequential damages 
                    arising from your use of our services. Our liability is limited to the amount you 
                    paid for our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms are governed by the laws of India. Any disputes shall be subject to 
                    the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms, contact us at{" "}
                    <a href="mailto:legal@kcassociates.in" className="text-primary hover:underline">
                      legal@kcassociates.in
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