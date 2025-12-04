import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard, Property } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  X, 
  ChevronDown,
  Grid3X3,
  List,
  Map
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data - in production this would come from Firebase
const allProperties: Property[] = [
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
  {
    id: "7",
    title: "Studio Apartment in Juhu",
    price: 35000,
    area: 550,
    location: "Juhu, Mumbai",
    category: "residential",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    id: "8",
    title: "Commercial Plot in Navi Mumbai",
    price: 35000000,
    area: 5000,
    location: "Navi Mumbai",
    category: "plots",
    type: "buy",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    isNew: true,
  },
];

const categories = ["All", "Residential", "Commercial", "Land", "Plots", "Luxury", "Agricultural"];
const sortOptions = ["Most Relevant", "Price: Low to High", "Price: High to Low", "Newest First"];

export default function Listings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || 
                           property.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Property Listings | KC Associates</title>
        <meta name="description" content="Browse our extensive collection of properties. Find residential, commercial, luxury homes, and more." />
      </Helmet>
      
      <Layout>
        <div className="pt-20 min-h-screen bg-background">
          {/* Header */}
          <div className="bg-primary-light border-b border-border">
            <div className="container py-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Find Properties
              </h1>
              <p className="text-muted-foreground">
                Showing {filteredProperties.length} properties
              </p>
            </div>
          </div>

          {/* Search & Filters Bar */}
          <div className="sticky top-16 z-40 bg-card border-b border-border">
            <div className="container py-4">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by location, property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Category Pills - Desktop */}
                <div className="hidden lg:flex items-center gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Filter & Sort - Mobile/Desktop */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>

                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none pl-4 pr-10 py-3 bg-muted border-0 rounded-lg text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {sortOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={cn(
                        "p-2.5 transition-colors",
                        viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={cn(
                        "p-2.5 transition-colors",
                        viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      )}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="container py-8">
            {filteredProperties.length > 0 ? (
              <div className={cn(
                "grid gap-6",
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                  : "grid-cols-1"
              )}>
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No properties found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filters
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
