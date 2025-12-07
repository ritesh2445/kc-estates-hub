import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Search, ArrowRight } from "lucide-react";

export default function Saved() {
  // In a real app, this would come from auth/database
  const isLoggedIn = false;
  const savedProperties: never[] = [];

  return (
    <>
      <Helmet>
        <title>Saved Properties | KC Associates</title>
        <meta name="description" content="View your saved properties and favorites on KC Associates." />
      </Helmet>

      <Layout>
        {/* Header */}
        <section className="bg-muted pt-28 pb-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Saved Properties
            </h1>
            <p className="text-muted-foreground">
              Keep track of properties you love
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            {!isLoggedIn ? (
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Sign in to save properties
                </h2>
                <p className="text-muted-foreground mb-8">
                  Create an account or sign in to save your favorite properties and access them from any device.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/auth/login">
                    <Button size="lg" className="w-full sm:w-auto">
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/listings">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <Search className="w-4 h-4 mr-2" />
                      Browse Properties
                    </Button>
                  </Link>
                </div>
              </div>
            ) : savedProperties.length === 0 ? (
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  No saved properties yet
                </h2>
                <p className="text-muted-foreground mb-8">
                  Start exploring properties and save the ones you love by clicking the heart icon.
                </p>
                <Link to="/listings">
                  <Button size="lg">
                    <Search className="w-4 h-4 mr-2" />
                    Explore Properties
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Property cards would go here */}
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}