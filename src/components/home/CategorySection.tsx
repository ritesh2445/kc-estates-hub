import { Link } from "react-router-dom";
import { 
  Building2, 
  Home, 
  Mountain, 
  TreePine, 
  Key, 
  Crown, 
  Flower2, 
  Tractor,
  Hotel
} from "lucide-react";

const categories = [
  { 
    name: "Residential", 
    icon: Home, 
    href: "/listings?category=residential",
    description: "Apartments, Houses, Villas",
    color: "bg-blue-500/10 text-blue-600"
  },
  { 
    name: "Commercial", 
    icon: Building2, 
    href: "/listings?category=commercial",
    description: "Offices, Shops, Showrooms",
    color: "bg-purple-500/10 text-purple-600"
  },
  { 
    name: "Land", 
    icon: Mountain, 
    href: "/listings?category=land",
    description: "NA & Industrial Land",
    color: "bg-amber-500/10 text-amber-600"
  },
  { 
    name: "Plots", 
    icon: TreePine, 
    href: "/listings?category=plots",
    description: "Residential & Commercial",
    color: "bg-green-500/10 text-green-600"
  },
  { 
    name: "Rentals", 
    icon: Key, 
    href: "/listings?type=rent",
    description: "Homes & Offices for Rent",
    color: "bg-cyan-500/10 text-cyan-600"
  },
  { 
    name: "Luxury", 
    icon: Crown, 
    href: "/listings?category=luxury",
    description: "Premium Properties",
    color: "bg-yellow-500/10 text-yellow-600"
  },
  { 
    name: "Lawns", 
    icon: Flower2, 
    href: "/listings?category=lawns",
    description: "Event Venues & Banquets",
    color: "bg-pink-500/10 text-pink-600"
  },
  { 
    name: "Agricultural", 
    icon: Tractor, 
    href: "/listings?category=agricultural",
    description: "Farmhouses & Agri Land",
    color: "bg-emerald-500/10 text-emerald-600"
  },
  { 
    name: "Hostels", 
    icon: Hotel, 
    href: "/listings?category=hostels",
    description: "PG & Hostel Spaces",
    color: "bg-indigo-500/10 text-indigo-600"
  },
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of property types to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group property-card p-6 text-center hover:border-primary/20"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
