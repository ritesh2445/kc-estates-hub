import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { 
  Upload, 
  Home, 
  Camera, 
  MapPin, 
  IndianRupee, 
  CheckCircle2,
  Building2,
  Video
} from "lucide-react";

const propertyTypes = [
  "Residential",
  "Commercial",
  "Land",
  "Plots",
  "Luxury",
  "Agricultural",
  "Hostel",
  "Rental"
];

const steps = [
  { id: 1, title: "Property Details", icon: Home },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Pricing", icon: IndianRupee },
  { id: 4, title: "Photos & VR", icon: Camera },
];

export default function ListProperty() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    price: "",
    priceType: "sale",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Property listing submitted! Our team will review and contact you shortly.");
  };

  return (
    <>
      <Helmet>
        <title>List Your Property | KC Associates</title>
        <meta name="description" content="List your property with KC Associates and reach thousands of potential buyers. Get premium visibility with VR tours." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary-hover pt-32 pb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                List Your Property
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Reach thousands of potential buyers with our premium listing service
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Premium Visibility", desc: "Featured on homepage & search" },
                { icon: Video, title: "VR Tour Support", desc: "360° virtual tours available" },
                { icon: CheckCircle2, title: "Verified Listing", desc: "Trusted by buyers" },
                { icon: Upload, title: "Easy Upload", desc: "Quick 5-minute process" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Steps */}
              <div className="flex items-center justify-between mb-12">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`flex flex-col items-center gap-2 ${
                        currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        currentStep >= step.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                    </button>
                    {index < steps.length - 1 && (
                      <div className={`w-12 sm:w-24 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-primary" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="glass-card p-8">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Property Details</h2>
                    
                    <div>
                      <Label htmlFor="title">Property Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g., Luxurious 3 BHK Apartment in Bandra"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select type</option>
                        {propertyTypes.map(type => (
                          <option key={type} value={type.toLowerCase()}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          name="bedrooms"
                          type="number"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          placeholder="3"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input
                          id="bathrooms"
                          name="bathrooms"
                          type="number"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          placeholder="2"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="area">Area (sq.ft)</Label>
                        <Input
                          id="area"
                          name="area"
                          type="number"
                          value={formData.area}
                          onChange={handleChange}
                          placeholder="1500"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your property in detail..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Location Details</h2>
                    
                    <div>
                      <Label htmlFor="address">Full Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter complete address"
                        rows={2}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Mumbai"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="Maharashtra"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="400001"
                        className="mt-1 max-w-xs"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Pricing Information</h2>
                    
                    <div>
                      <Label>Listing Type</Label>
                      <div className="flex gap-4 mt-2">
                        {["sale", "rent"].map((type) => (
                          <label
                            key={type}
                            className={`flex-1 px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors text-center ${
                              formData.priceType === type
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="priceType"
                              value={type}
                              checked={formData.priceType === type}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="font-medium capitalize">{type === "sale" ? "For Sale" : "For Rent"}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="price">
                        {formData.priceType === "rent" ? "Monthly Rent (₹)" : "Price (₹)"}
                      </Label>
                      <div className="relative mt-1">
                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder={formData.priceType === "rent" ? "50000" : "10000000"}
                          className="pl-9"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Photos & VR Tour</h2>
                    
                    <div>
                      <Label>Property Photos</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-foreground font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 10MB each</p>
                      </div>
                    </div>

                    <div>
                      <Label>VR Tour (Optional)</Label>
                      <p className="text-sm text-muted-foreground mt-1 mb-3">
                        Add a 360° virtual tour to attract more buyers
                      </p>
                      <Input placeholder="YouTube 360 video URL" />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-medium text-foreground mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit">
                      Submit Listing
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}