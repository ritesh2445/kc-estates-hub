import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PropertyCard, Property } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

// Sample featured properties data
const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Luxury 4 BHK Villa in Bandra West",
    price: 85000000,
    area: 3500,
    location: "Bandra West, Mumbai",
    category: "luxury",
    type: "buy",
    bedrooms: 4,
    bathrooms: 4,
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    isNew: true,
    hasVR: true,
  },
  {
    id: "2",
    title: "Modern 3 BHK Apartment in Andheri",
    price: 25000000,
    area: 1850,
    location: "Andheri East, Mumbai",
    category: "residential",
    type: "buy",
    bedrooms: 3,
    bathrooms: 3,
    thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    hasVR: true,
  },
  {
    id: "3",
    title: "Premium Office Space in BKC",
    price: 150000,
    area: 2500,
    location: "BKC, Mumbai",
    category: "commercial",
    type: "rent",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    isNew: true,
  },
  {
    id: "4",
    title: "Spacious 2 BHK in Powai",
    price: 18500000,
    area: 1200,
    location: "Powai, Mumbai",
    category: "residential",
    type: "buy",
    bedrooms: 2,
    bathrooms: 2,
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    id: "5",
    title: "Sea-Facing Penthouse in Worli",
    price: 150000000,
    area: 5000,
    location: "Worli, Mumbai",
    category: "luxury",
    type: "buy",
    bedrooms: 5,
    bathrooms: 5,
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    hasVR: true,
  },
  {
    id: "6",
    title: "Farmhouse with Pool in Lonavala",
    price: 45000000,
    area: 10000,
    location: "Lonavala, Maharashtra",
    category: "agricultural",
    type: "buy",
    bedrooms: 4,
    bathrooms: 4,
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    isNew: true,
    hasVR: true,
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="section-heading mb-2">Featured Properties</h2>
            <p className="text-muted-foreground">
              Handpicked properties for you to explore
            </p>
          </div>
          <Link to="/listings">
            <Button variant="outline" className="group">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
