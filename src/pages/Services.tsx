import { Scissors, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium grooming services tailored to your style. All services include consultation and styling.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

          {/* CTA Section */}
          <div className="text-center bg-secondary border border-border rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Ready to Look Your Best?</h2>
            <p className="text-muted-foreground mb-6">
              Book your appointment today and experience premium grooming.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
