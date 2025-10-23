import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request received! We'll confirm your appointment shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your <span className="text-accent">Appointment</span>
            </h1>
            <p className="text-muted-foreground">
              Select your preferred date, time, and service to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar */}
            <Card className="bg-card border-border animate-slide-up">
              <CardHeader>
                <CardTitle className="text-accent">Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-border"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-accent">Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service</Label>
                    <Select required>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="signature">Signature Cut - $45</SelectItem>
                        <SelectItem value="fade">Fade & Design - $55</SelectItem>
                        <SelectItem value="beard">Beard Sculpting - $30</SelectItem>
                        <SelectItem value="shave">Hot Towel Shave - $40</SelectItem>
                        <SelectItem value="full">Full Service - $75</SelectItem>
                        <SelectItem value="kids">Kids Cut - $35</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select required>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="12pm">12:00 PM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                        <SelectItem value="5pm">5:00 PM</SelectItem>
                        <SelectItem value="6pm">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific styling preferences?"
                      className="bg-input border-border resize-none"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
