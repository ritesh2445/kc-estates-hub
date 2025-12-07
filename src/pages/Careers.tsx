import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart,
  GraduationCap,
  Coins,
  ArrowRight,
  Building2
} from "lucide-react";

const openPositions = [
  {
    id: 1,
    title: "Real Estate Agent",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    department: "Sales",
    experience: "2-5 years",
  },
  {
    id: 2,
    title: "Property Consultant",
    location: "Pune, Maharashtra",
    type: "Full-time",
    department: "Consulting",
    experience: "1-3 years",
  },
  {
    id: 3,
    title: "Senior Sales Manager",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    department: "Sales",
    experience: "5+ years",
  },
  {
    id: 4,
    title: "Marketing Executive",
    location: "Remote",
    type: "Full-time",
    department: "Marketing",
    experience: "2-4 years",
  },
];

const benefits = [
  { icon: Coins, title: "Competitive Pay", desc: "Industry-leading commissions & bonuses" },
  { icon: GraduationCap, title: "Training", desc: "Comprehensive onboarding & skill development" },
  { icon: TrendingUp, title: "Growth", desc: "Clear career progression path" },
  { icon: Heart, title: "Benefits", desc: "Health insurance & wellness programs" },
  { icon: Users, title: "Team Culture", desc: "Collaborative & supportive environment" },
  { icon: Building2, title: "Premium Leads", desc: "Access to quality property leads" },
];

export default function Careers() {
  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll contact you within 48 hours.");
  };

  return (
    <>
      <Helmet>
        <title>Careers | Join KC Associates Real Estate Team</title>
        <meta name="description" content="Build your career with KC Associates. Join our team of real estate professionals and grow with Mumbai's trusted property consultants." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary-hover pt-32 pb-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm font-medium">We're Hiring</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Build Your Career With Us
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join Mumbai's fastest-growing real estate team. We provide the tools, 
                training, and leads you need to succeed.
              </p>
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We invest in our people because your success is our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="property-card p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 md:py-24 scroll-mt-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your perfect role and start your journey with KC Associates
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <div key={position.id} className="property-card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 md:py-24 bg-muted scroll-mt-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="section-heading mb-4">Apply Now</h2>
                <p className="text-muted-foreground">
                  Submit your application and we'll get back to you within 48 hours
                </p>
              </div>

              <form onSubmit={handleApply} className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Your full name" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-1" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <select
                      id="position"
                      className="w-full mt-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    >
                      <option value="">Select position</option>
                      {openPositions.map(p => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" placeholder="e.g., 3 years in real estate" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="message">Why do you want to join KC Associates?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and why you're interested..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Resume / CV</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <p className="text-foreground font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground mt-1">PDF, DOC up to 5MB</p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}