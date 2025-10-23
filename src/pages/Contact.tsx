import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@uptowncuts.com",
      link: "mailto:info@uptowncuts.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Main Street, Your City, ST 12345",
      link: "https://maps.google.com",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-muted-foreground">
              We're here to answer your questions and book your appointment
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card border-border hover:border-accent transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <info.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Hours */}
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">Business Hours</h2>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-4 border-b border-border last:border-0"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-accent">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="animate-slide-up">
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    123 Main Street, Your City, ST 12345
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
