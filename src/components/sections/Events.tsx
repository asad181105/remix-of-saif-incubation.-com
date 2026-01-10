import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import annovateImage1 from "@/assets/annovate.jpg";
import annovateImage2 from "@/assets/annovate-2.jpg";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const annovateImages = [annovateImage1, annovateImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % annovateImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      title: "Annovate 2024",
      description: "Our flagship annual innovation summit bringing together entrepreneurs, investors, and industry leaders for a day of inspiration and networking.",
      date: "March 15-16, 2024",
      location: "Tech Campus Auditorium",
      attendees: "500+",
      images: annovateImages,
      featured: true,
      stats: [
        { label: "Speakers", value: "20+" },
        { label: "Startups", value: "50+" },
        { label: "Investors", value: "30+" },
      ],
    },
    {
      title: "Startup Pitch Night",
      description: "Watch promising startups pitch their ideas to a panel of investors and industry experts.",
      date: "April 5, 2024",
      location: "Innovation Hub",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      featured: false,
    },
  ];

  return (
    <section className="py-20" id="events">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our events to learn, network, and grow your entrepreneurial journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative rounded-3xl overflow-hidden hover-lift ${
                event.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`grid ${event.featured ? "md:grid-cols-2" : ""} gap-0`}>
                {/* Image / Slideshow */}
                <div className="relative aspect-video overflow-hidden">
                  {event.images ? (
                    <>
                      {event.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${event.title} - ${imgIndex + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                            imgIndex === currentSlide ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}
                      {/* Slide indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {event.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentSlide(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === currentSlide 
                                ? "bg-primary w-6" 
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 gradient-bg">Featured Event</Badge>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 bg-card border border-border/50 ${event.featured ? "flex flex-col justify-center" : ""}`}>
                  <h3 className="text-2xl font-display font-bold mb-3 text-card-foreground">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {event.attendees} Attendees
                    </div>
                  </div>

                  {event.featured && event.stats && (
                    <div className="flex gap-6 mb-6">
                      {event.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button className={event.featured ? "gradient-bg w-fit group/btn" : "w-full"}>
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
