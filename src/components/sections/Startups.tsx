import startupLogos from "@/assets/startup-logos.jpeg";

const Startups = () => {
  const startups = [
    { name: "Soma Scents", logo: null, isImage: true, position: "0% 0%" },
    { name: "Ziya Candles", logo: null, isImage: true, position: "0% 50%" },
    { name: "AeroChill", logo: null, isImage: true, position: "50% 100%" },
    { name: "TechNova", logo: "🚀", isImage: false },
    { name: "GreenLeaf", logo: "🌿", isImage: false },
    { name: "FinFlow", logo: "💰", isImage: false },
    { name: "HealthHub", logo: "🏥", isImage: false },
    { name: "EduSpark", logo: "📚", isImage: false },
    { name: "FoodieApp", logo: "🍔", isImage: false },
    { name: "TravelMate", logo: "✈️", isImage: false },
    { name: "AIAssist", logo: "🤖", isImage: false },
    { name: "CleanEnergy", logo: "⚡", isImage: false },
  ];

  // Duplicate for seamless loop
  const allStartups = [...startups, ...startups];

  return (
    <section className="py-12 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center">
          Startups We've <span className="gradient-text">Incubated</span>
        </h2>
      </div>
      
      <div className="relative h-24">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        
        <div className="flex animate-slide-logos">
          {allStartups.map((startup, index) => (
            <div
              key={`${startup.name}-${index}`}
              className="flex-shrink-0 w-36 h-16 mx-4 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer overflow-hidden"
            >
              {startup.isImage ? (
                <img 
                  src={startupLogos} 
                  alt={startup.name}
                  className="h-14 w-auto object-contain"
                />
              ) : (
                <>
                  <span className="text-xl">{startup.logo}</span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                    {startup.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;
