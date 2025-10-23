import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Award, Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import ScrollNavigation from "@/components/ScrollNavigation";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  useEffect(() => {
    // Load GoHighLevel form embed script
    const script = document.createElement("script");
    script.src = "https://link.whad.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Award,
      title: "Expert Barbers",
      description: "Licensed professionals with years of experience in modern and classic styles.",
    },
    {
      icon: Clock,
      title: "Easy Booking",
      description: "Schedule your appointment online and skip the wait. Walk-ins also welcome.",
    },
    {
      icon: Scissors,
      title: "Premium Service",
      description: "Quality cuts, attention to detail, and a comfortable atmosphere every visit.",
    },
  ];

  const services = [
    {
      title: "Signature Cut",
      price: "$45",
      description: "Our classic precision haircut with styling",
      icon: Scissors,
    },
    {
      title: "Fade & Design",
      price: "$55",
      description: "Expert fade with custom line designs",
      icon: Award,
    },
    {
      title: "Beard Sculpting",
      price: "$30",
      description: "Professional beard trim and shaping",
      icon: Sparkles,
    },
    {
      title: "Hot Towel Shave",
      price: "$40",
      description: "Traditional straight razor shave experience",
      icon: Scissors,
    },
    {
      title: "Full Service",
      price: "$75",
      description: "Cut, beard trim, and hot towel treatment",
      icon: Award,
    },
    {
      title: "Kids Cut",
      price: "$35",
      description: "Haircut for children under 12",
      icon: Scissors,
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We pride ourselves on delivering exceptional cuts and grooming services every single time.",
    },
    {
      icon: Clock,
      title: "Community Focused",
      description: "More than a barber shop, we're a place where the community comes together.",
    },
    {
      icon: Sparkles,
      title: "Consistency",
      description: "Building trust through reliable service and attention to detail with every visit.",
    },
  ];

  return (
    <div className="min-h-screen">
      <ScrollNavigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Uptown Cuts Barber Shop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Cuts,
              <br />
              <span className="text-accent">Elevated Style</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Where tradition meets modern grooming. Experience quality, consistency, and community at Uptown Cuts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="border-accent text-accent hover:bg-accent/10 text-lg px-8"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-accent">Uptown Cuts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More than just a haircut—it's an experience built on quality and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium grooming services tailored to your style. All services include consultation and styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your <span className="text-accent">Appointment</span>
            </h2>
            <p className="text-muted-foreground">
              Select your preferred date, time, and service to get started.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-2">
                <iframe
                  src="https://link.whad.ai/widget/form/H3uXQixwkZAZ2oIi6FyL"
                  style={{ width: "100%", height: "652px", border: "none", borderRadius: "8px" }}
                  id="popup-H3uXQixwkZAZ2oIi6FyL"
                  data-layout='{"id":"POPUP"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Barber Shop"
                  data-height="652"
                  data-layout-iframe-id="popup-H3uXQixwkZAZ2oIi6FyL"
                  data-form-id="H3uXQixwkZAZ2oIi6FyL"
                  title="Barber Shop"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-accent">Uptown Cuts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where tradition meets modern style
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Uptown Cuts was founded with a simple mission: to provide our community with a premium grooming 
                    experience that combines traditional barbering techniques with modern style and comfort.
                  </p>
                  <p>
                    We understand that a great haircut is more than just a service—it's about building confidence, 
                    creating connections, and maintaining a space where everyone feels welcome. Our team of expert 
                    barbers brings years of experience and genuine passion for their craft.
                  </p>
                  <p>
                    Every client who walks through our doors is treated like family. We take the time to understand 
                    your style, listen to your needs, and deliver results that exceed expectations. That's the Uptown 
                    Cuts difference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-muted-foreground">
              We're here to answer your questions and book your appointment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-accent transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:5551234567" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:info@uptowncuts.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  info@uptowncuts.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-accent transition-colors"
                >
                  123 Main Street, Your City, ST 12345
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-accent">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-medium">Saturday</span>
                    <span className="text-accent">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-accent">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-accent font-semibold mb-4">Uptown Cuts</h3>
              <p className="text-sm text-muted-foreground">
                Premium grooming experience serving our community with quality, consistency, and style.
              </p>
            </div>

            <div>
              <h3 className="text-accent font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {["home", "services", "booking", "about"].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      const element = document.getElementById(section);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors text-left"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

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
    </div>
  );
};

export default Index;
