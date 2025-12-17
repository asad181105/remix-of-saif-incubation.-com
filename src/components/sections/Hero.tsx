import { Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const Hero = () => {
  const images = [hero2, hero1, hero3, hero4, hero5];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Empowering Student Entrepreneurs
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">SAIF</span> The Incubation
              <br />
              Foundation
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Nurturing innovation and entrepreneurship among students. Transform your ideas into successful ventures with our comprehensive incubation program.
            </p>
            
          </div>

          {/* Right - Bento image grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 animate-scale-in">
              {/* Large image */}
              <div className="col-span-2 row-span-2 relative group">
                <img
                  src={images[0]}
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Small images */}
              <div className="relative group" style={{ animationDelay: "0.1s" }}>
                <img
                  src={images[1]}
                  alt="Workshop session"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover-lift"
                />
              </div>
              
              <div className="relative group" style={{ animationDelay: "0.2s" }}>
                <img
                  src={images[2]}
                  alt="Startup pitch"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover-lift"
                />
              </div>
              
              {/* Bottom row */}
              <div className="relative group" style={{ animationDelay: "0.3s" }}>
                <img
                  src={images[3]}
                  alt="Innovation lab"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover-lift"
                />
              </div>
              
              <div className="col-span-2 relative group" style={{ animationDelay: "0.4s" }}>
                <img
                  src={images[4]}
                  alt="Success stories"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover-lift"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
