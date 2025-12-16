import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const BoardMembers = () => {
  const members = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Chairman",
      bio: "Visionary leader with 20+ years of experience in entrepreneurship and academia.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      designation: "Director",
      bio: "Serial entrepreneur and startup mentor with expertise in technology ventures.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "Amit Patel",
      designation: "Chief Strategy Officer",
      bio: "Business strategist focused on scaling student startups to new heights.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "Dr. Ananya Singh",
      designation: "Head of Mentorship",
      bio: "Academic researcher and mentor guiding students through their entrepreneurial journey.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="board">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Board <span className="gradient-text">Members</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders guiding SAIF's mission to empower student entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 text-center hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-card-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.designation}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                <Button variant="ghost" size="sm" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
