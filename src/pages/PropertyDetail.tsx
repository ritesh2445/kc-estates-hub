import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  MapPin, 
  Maximize2, 
  Bed, 
  Bath,
  Car,
  Trees,
  Eye,
  Calendar,
  CreditCard,
  Phone,
  MessageCircle,
  Play,
  X,
  Check,
  Download,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample property data
const propertyData = {
  id: "1",
  title: "Luxury 4 BHK Villa in Bandra West",
  description: "Experience luxury living in this stunning 4 BHK villa located in the heart of Bandra West. This property features modern architecture, premium finishes, and breathtaking views. The villa includes a private garden, swimming pool, and state-of-the-art amenities.",
  price: 85000000,
  area: 3500,
  location: {
    address: "Plot 42, Carter Road, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
    lat: 19.0544,
    lng: 72.8264,
  },
  category: "luxury",
  type: "buy" as const,
  bedrooms: 4,
  bathrooms: 4,
  parking: 2,
  furnishing: "Semi-Furnished",
  facing: "East",
  floorNumber: "Ground + 2",
  ageOfProperty: "New Construction",
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
  ],
  vrTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  amenities: [
    "Swimming Pool", "Gym", "24/7 Security", "Power Backup", 
    "Clubhouse", "Garden", "Children's Play Area", "Visitor Parking",
    "Lift", "Intercom", "Fire Safety", "CCTV"
  ],
  agent: {
    name: "Rahul Mehta",
    phone: "+91 98765 43210",
    email: "rahul@kcassociates.in",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
  },
  documents: [
    { name: "Floor Plan", type: "pdf" },
    { name: "Brochure", type: "pdf" },
  ],
};

export default function PropertyDetail() {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [showVR, setShowVR] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const property = propertyData; // In production, fetch based on id

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <Helmet>
        <title>{property.title} | KC Associates</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Helmet>
      
      <Layout>
        <div className="pt-16 min-h-screen bg-background">
          {/* Image Gallery */}
          <div className="relative bg-foreground">
            <div className="container py-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[300px] md:h-[400px] lg:h-[500px]">
                {/* Main Image */}
                <div 
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setShowGallery(true)}
                >
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-primary-foreground font-medium">View Gallery</span>
                  </div>
                </div>

                {/* Side Images */}
                <div className="hidden lg:grid grid-cols-2 gap-2">
                  {property.images.slice(1, 5).map((image, index) => (
                    <div 
                      key={index}
                      className="relative rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => {
                        setActiveImageIndex(index + 1);
                        setShowGallery(true);
                      }}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {index === 3 && property.images.length > 5 && (
                        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-lg">
                            +{property.images.length - 5} more
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-8 right-8 flex items-center gap-2">
                <button
                  onClick={() => setShowVR(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  VR Tour
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                    isSaved ? "bg-destructive text-primary-foreground" : "bg-card/90 backdrop-blur-sm text-foreground hover:bg-card"
                  )}
                >
                  <Heart className={cn("w-5 h-5", isSaved && "fill-current")} />
                </button>
                <button className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:bg-card transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Title & Price */}
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location.address}, {property.location.city}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {property.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-6">
                    <span className="text-3xl font-bold text-primary">
                      {formatPrice(property.price)}
                    </span>
                    <span className="px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full capitalize">
                      For {property.type}
                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Maximize2, label: "Area", value: `${property.area.toLocaleString()} sq.ft` },
                    { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                    { icon: Car, label: "Parking", value: property.parking },
                  ].map((feature) => (
                    <div key={feature.label} className="p-4 bg-muted rounded-xl">
                      <feature.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">{feature.label}</p>
                      <p className="text-lg font-semibold text-foreground">{feature.value}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Property Details */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Property Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: "Furnishing", value: property.furnishing },
                      { label: "Facing", value: property.facing },
                      { label: "Floor", value: property.floorNumber },
                      { label: "Age", value: property.ageOfProperty },
                      { label: "Category", value: property.category },
                      { label: "Type", value: property.type },
                    ].map((detail) => (
                      <div key={detail.label} className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <span className="font-medium text-foreground capitalize">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Map */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Location</h2>
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123!2d${property.location.lng}!3d${property.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE1LjgiTiA3MsKwNDknMzUuMSJF!5e0!3m2!1sen!2sin!4v1234567890`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${property.location.lat},${property.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Agent Card */}
                  <div className="property-card p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{property.agent.name}</h3>
                        <p className="text-sm text-muted-foreground">Property Expert</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full btn-hero">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Visit
                      </Button>
                      <Button variant="outline" className="w-full">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <a href={`tel:${property.agent.phone}`}>
                          <Button variant="outline" className="w-full">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </a>
                        <Button variant="outline" className="w-full">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="property-card p-6">
                    <h3 className="font-semibold text-foreground mb-4">Documents</h3>
                    <div className="space-y-2">
                      {property.documents.map((doc) => (
                        <button
                          key={doc.name}
                          className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{doc.name}</span>
                          <Download className="w-4 h-4 text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VR Modal */}
          {showVR && (
            <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4">
              <button
                onClick={() => setShowVR(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={property.vrTour}
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Gallery Modal */}
          {showGallery && (
            <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-w-5xl max-h-[80vh] mx-16">
                <img
                  src={property.images[activeImageIndex]}
                  alt={`View ${activeImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "w-16 h-12 rounded-md overflow-hidden border-2 transition-all",
                      index === activeImageIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
