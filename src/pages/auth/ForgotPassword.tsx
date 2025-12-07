import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Password reset email sent!");
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Reset Password | KC Associates</title>
        <meta name="description" content="Reset your KC Associates password." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">KC</span>
            </div>
            <span className="font-bold text-xl text-foreground">Associates</span>
          </Link>

          {!isSubmitted ? (
            <>
              <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
                Forgot your password?
              </h1>
              <p className="text-center text-muted-foreground mb-8">
                No worries, we'll send you reset instructions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Reset password"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Check your email
              </h1>
              <p className="text-muted-foreground mb-8">
                We've sent password reset instructions to<br />
                <span className="font-medium text-foreground">{email}</span>
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="mb-4"
              >
                Didn't receive the email? Try again
              </Button>
            </div>
          )}

          <Link 
            to="/auth/login" 
            className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </div>
    </>
  );
}