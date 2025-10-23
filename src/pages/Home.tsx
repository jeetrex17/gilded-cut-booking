import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Uptown Cuts Barber Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Cuts,
              <br />
              <span className="text-accent">Elevated Style</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Where tradition meets modern grooming. Experience quality, consistency, and 
              community at Uptown Cuts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                  Book Now
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg px-8">
                  View Services
                </Button>
              </Link>
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
              <Card 
                key={index} 
                className="bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-secondary border-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Your Best Look?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience the difference of premium grooming. 
                Our expert barbers are ready to deliver the style you deserve.
              </p>
              <Link to="/booking">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule Your Cut
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
