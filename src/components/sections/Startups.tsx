import startupLogos from "@/assets/startup-logos.jpeg";
import ziyaLogo from "@/assets/ziya-logo.jpeg";

const Startups = () => {
  const startups = [
    { name: "Soma Scents", logo: startupLogos, isImage: true },
    { name: "Ziya Candles", logo: ziyaLogo, isImage: true },
    { name: "AeroChill", logo: null, isImage: false, emoji: "❄️" },
    { name: "TechNova", logo: null, isImage: false, emoji: "🚀" },
    { name: "GreenLeaf", logo: null, isImage: false, emoji: "🌿" },
    { name: "FinFlow", logo: null, isImage: false, emoji: "💰" },
    { name: "HealthHub", logo: null, isImage: false, emoji: "🏥" },
    { name: "EduSpark", logo: null, isImage: false, emoji: "📚" },
    { name: "FoodieApp", logo: null, isImage: false, emoji: "🍔" },
    { name: "TravelMate", logo: null, isImage: false, emoji: "✈️" },
    { name: "AIAssist", logo: null, isImage: false, emoji: "🤖" },
    { name: "CleanEnergy", logo: null, isImage: false, emoji: "⚡" },
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
              {startup.isImage && startup.logo ? (
                <img 
                  src={startup.logo} 
                  alt={startup.name}
                  className="h-14 w-auto object-contain"
                />
              ) : (
                <>
                  <span className="text-xl">{startup.emoji}</span>
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
