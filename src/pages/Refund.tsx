import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Refund() {
  return (
    <>
      <Helmet>
        <title>Refund Policy | KC Associates</title>
        <meta name="description" content="KC Associates refund policy - Understand our refund and cancellation terms for property bookings." />
      </Helmet>

      <Layout>
        <section className="bg-muted pt-28 pb-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Refund Policy
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
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Token Payment Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Token payments made for property bookings are subject to the following refund conditions:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                    <li>Full refund if cancelled within 24 hours of payment</li>
                    <li>75% refund if cancelled more than 7 days before scheduled visit</li>
                    <li>50% refund if cancelled 3-7 days before scheduled visit</li>
                    <li>No refund for cancellations less than 3 days before scheduled visit</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Property Owner Cancellation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If a property owner or agent cancels a scheduled visit, you will receive a full 
                    refund of your token payment within 5-7 business days.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Service Fee</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Platform service fees are non-refundable unless the cancellation is due to 
                    reasons attributable to KC Associates or the property owner.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Refund Process</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds are processed within 5-7 business days. The amount will be credited 
                    to the original payment method. For UPI payments, the refund may take up to 
                    10 business days to reflect in your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. How to Request a Refund</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To request a refund:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li>Log in to your account</li>
                    <li>Go to "My Bookings"</li>
                    <li>Select the booking you wish to cancel</li>
                    <li>Click "Request Cancellation"</li>
                    <li>Confirm your refund request</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Disputes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you believe you are entitled to a refund that has been denied, please 
                    contact our support team at{" "}
                    <a href="mailto:support@kcassociates.in" className="text-primary hover:underline">
                      support@kcassociates.in
                    </a>
                    {" "}with your booking details and reason for the dispute.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                  <p className="text-muted-foreground text-sm">
                    For any questions about our refund policy or to track a refund request, 
                    contact our support team at{" "}
                    <a href="tel:+919876543210" className="text-primary hover:underline">
                      +91 98765 43210
                    </a>
                    {" "}or email us at{" "}
                    <a href="mailto:support@kcassociates.in" className="text-primary hover:underline">
                      support@kcassociates.in
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