import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import financeHeadImage from "@/assets/finance-head.jpeg";
import organisingHeadImage from "@/assets/organising-head.jpeg";

interface TeamHead {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const Teams = () => {
  const teamHeads = [
    { name: "Arjun Mehta", role: "Media Team Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
    { name: "Organizing Head", role: "Organizing Team Head", image: organisingHeadImage, linkedin: "#" },
    { name: "Finance Head", role: "Finance Team Head", image: financeHeadImage, linkedin: "#" },
    { name: "Karan Malhotra", role: "Marketing Team Head", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
    { name: "Ishaan Roy", role: "Web Design Team Head", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
  ];

  return (
    <section className="py-20" id="teams">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Team Heads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the leaders who make SAIF's vision a reality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {teamHeads.map((member) => (
            <div key={member.name} className="group text-center hover-lift">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-border group-hover:border-primary transition-colors"
                />
                {member.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                  </Button>
                )}
              </div>
              <h4 className="font-semibold text-card-foreground">{member.name}</h4>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
