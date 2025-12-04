import { Link } from "react-router-dom";
import { Heart, MapPin, Maximize2, Bed, Bath, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface Property {
  id: string;
  title: string;
  price: number;
  priceUnit?: string;
  area: number;
  location: string;
  category: string;
  type: "buy" | "rent";
  bedrooms?: number;
  bathrooms?: number;
  thumbnail: string;
  isNew?: boolean;
  hasVR?: boolean;
}

interface PropertyCardProps {
  property: Property;
  className?: string;
  style?: React.CSSProperties;
}

export function PropertyCard({ property, className, style }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <Link
      to={`/listing/${property.id}`}
      className={cn("property-card group block", className)}
      style={style}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.thumbnail}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.isNew && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-md">
              New
            </span>
          )}
          {property.hasVR && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-md flex items-center gap-1">
              <Eye className="w-3 h-3" />
              VR Tour
            </span>
          )}
          <span className="px-2 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-md capitalize">
            {property.type === "rent" ? "For Rent" : "For Sale"}
          </span>
        </div>

        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            // TODO: Add to favorites
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Price */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <p className="text-primary-foreground text-xl font-bold">
              {formatPrice(property.price)}
              {property.type === "rent" && (
                <span className="text-sm font-normal text-primary-foreground/80">/mo</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            <span>{property.area.toLocaleString()} sq.ft</span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Bath</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
