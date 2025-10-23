import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Uptown Cuts</h3>
            <p className="text-sm text-muted-foreground">
              Premium grooming experience serving our community with quality, consistency, and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/booking" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Book Now
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@uptowncuts.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>123 Main St, Your City</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Hours</h3>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Mon - Fri: 9am - 8pm</p>
              <p>Saturday: 8am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Uptown Cuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
