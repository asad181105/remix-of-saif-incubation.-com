import { Button } from "@/components/ui/button";
import { Play, Headphones, ExternalLink } from "lucide-react";

const Podcast = () => {
  return (
    <section className="py-20" id="podcast">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 md:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-primary/20 rounded-full"
                    style={{
                      left: `${(i * 5) + 2}%`,
                      height: `${Math.random() * 60 + 20}%`,
                      bottom: "0",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm font-medium">SAIF Podcast</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  <span className="gradient-text">Startup Stories</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tune in to hear inspiring stories from successful entrepreneurs, industry experts, and SAIF alumni. Learn from their journeys, challenges, and victories.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="gradient-bg group">
                    <Play className="mr-2 w-4 h-4" />
                    Listen Now
                  </Button>
                  <Button variant="outline" className="border-primary/20">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    All Episodes
                  </Button>
                </div>
              </div>

              {/* Audio visualization */}
              <div className="relative aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 rounded-full gradient-bg opacity-20 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
                  <div className="flex items-end gap-1 h-20">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 rounded-full gradient-bg"
                        style={{
                          height: `${Math.random() * 80 + 20}%`,
                          animation: `float ${1 + Math.random()}s ease-in-out infinite`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-8 rounded-full border-2 border-primary/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
