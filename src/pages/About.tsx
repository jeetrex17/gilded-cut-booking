import { Award, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We pride ourselves on delivering exceptional cuts and grooming services every single time.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "More than a barber shop, we're a place where the community comes together.",
    },
    {
      icon: Heart,
      title: "Consistency",
      description: "Building trust through reliable service and attention to detail with every visit.",
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
              About <span className="text-accent">Uptown Cuts</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where tradition meets modern style
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-3xl mx-auto mb-16 animate-slide-up">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-accent">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Uptown Cuts was founded with a simple mission: to provide our community with a 
                    premium grooming experience that combines traditional barbering techniques with 
                    modern style and comfort.
                  </p>
                  <p>
                    We understand that a great haircut is more than just a service—it's about building 
                    confidence, creating connections, and maintaining a space where everyone feels welcome. 
                    Our team of expert barbers brings years of experience and genuine passion for their craft.
                  </p>
                  <p>
                    Every client who walks through our doors is treated like family. We take the time to 
                    understand your style, listen to your needs, and deliver results that exceed expectations. 
                    That's the Uptown Cuts difference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We <span className="text-accent">Stand For</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-secondary border border-border rounded-lg p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our barbers are licensed professionals with a passion for their craft. Each brings 
              unique skills and personality to create an experience you'll look forward to every time.
            </p>
            <p className="text-sm text-accent font-medium">
              Walk-ins welcome, but appointments recommended for guaranteed availability.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
