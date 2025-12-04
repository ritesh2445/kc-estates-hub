import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, User, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Buy", href: "/listings?type=buy" },
  { label: "Rent", href: "/listings?type=rent" },
  { label: "Commercial", href: "/listings?category=commercial" },
  { label: "New Projects", href: "/listings?category=new" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHome 
          ? "bg-transparent" 
          : "bg-card/95 backdrop-blur-lg border-b border-border"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">KC</span>
            </div>
            <span className={cn(
              "font-bold text-xl hidden sm:block transition-colors",
              isHome ? "text-primary-foreground" : "text-foreground"
            )}>
              Associates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isHome ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact" 
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isHome ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Link to="/saved">
              <Button 
                variant="ghost" 
                size="icon"
                className={cn(
                  isHome && "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/auth/login">
              <Button 
                variant={isHome ? "secondary" : "default"}
                className={cn(
                  isHome && "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                )}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isHome 
                ? "text-primary-foreground hover:bg-primary-foreground/10" 
                : "text-foreground hover:bg-muted"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-down">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-3 border-t border-border">
                <Link to="/auth/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    <User className="w-4 h-4 mr-2" />
                    Login / Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
