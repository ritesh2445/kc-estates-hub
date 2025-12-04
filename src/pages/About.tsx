import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { 
  Building2, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Properties Listed" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Expert Agents" },
  { value: "15+", label: "Cities Covered" },
];

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "We prioritize your needs and work tirelessly to find the perfect property that matches your requirements."
  },
  {
    icon: Award,
    title: "Transparency",
    description: "Clear pricing, honest assessments, and no hidden fees. What you see is what you get."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our team of experienced professionals guides you through every step of your property journey."
  },
  {
    icon: Building2,
    title: "Premium Quality",
    description: "We list only verified properties that meet our high standards of quality and value."
  },
];

const team = [
  {
    name: "Kunal Chavan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Senior Property Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Anita Desai",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | KC Associates - Your Trusted Real Estate Partner</title>
        <meta name="description" content="Learn about KC Associates, your trusted real estate partner in Mumbai. Discover our mission, values, and the team behind our success." />
      </Helmet>
      
      <Layout>
        <div className="pt-20 min-h-screen bg-background">
          {/* Hero */}
          <div className="bg-primary py-16 md:py-24">
            <div className="container">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Your Trusted Partner in Real Estate
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  KC Associates has been helping families and businesses find their perfect 
                  properties since 2015. With VR tours, transparent pricing, and expert guidance, 
                  we make your property journey seamless.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="container -mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="property-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-heading mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2015 by Kunal Chavan, KC Associates began with a simple mission: 
                      to make property buying and selling a transparent, hassle-free experience 
                      for everyone.
                    </p>
                    <p>
                      What started as a small team of passionate real estate professionals has 
                      grown into one of Mumbai's most trusted property consultancies. We've helped 
                      over 1000 families find their dream homes and assisted numerous businesses 
                      in securing the perfect commercial spaces.
                    </p>
                    <p>
                      Today, we're proud to offer cutting-edge features like VR property tours, 
                      online booking, and a seamless digital experience that sets us apart in 
                      the industry.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="KC Associates Team"
                    className="rounded-2xl shadow-card"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm opacity-80">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4">Our Values</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These core principles guide everything we do at KC Associates
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="property-card p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4">Meet Our Team</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The dedicated professionals behind KC Associates
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.name} className="property-card overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-primary">
            <div className="container text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our experts help you navigate the real estate market and find 
                the perfect property for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/listings">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg">
                    Browse Properties
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
