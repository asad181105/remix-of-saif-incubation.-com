import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
}

const Teams = () => {
  const teams: Team[] = [
    {
      id: "media",
      name: "Media Team",
      description: "Creating compelling content and managing our visual identity",
      members: [
        { name: "Arjun Mehta", role: "Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Sneha Reddy", role: "Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Rohan Das", role: "Videographer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Kavya Nair", role: "Content Writer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
      ],
    },
    {
      id: "organizing",
      name: "Organizing Team",
      description: "Planning and executing events that inspire and connect",
      members: [
        { name: "Vikram Singh", role: "Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Ananya Sharma", role: "Coordinator", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Rahul Verma", role: "Logistics", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
      ],
    },
    {
      id: "finance",
      name: "Finance Team",
      description: "Managing resources and ensuring sustainable growth",
      members: [
        { name: "Priya Kapoor", role: "Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Aditya Joshi", role: "Analyst", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Neha Gupta", role: "Treasurer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Siddharth Iyer", role: "Auditor", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Meera Patel", role: "Associate", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
      ],
    },
    {
      id: "marketing",
      name: "Marketing Team",
      description: "Spreading the word and building our brand presence",
      members: [
        { name: "Karan Malhotra", role: "Lead", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Divya Saxena", role: "Social Media", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Akash Thakur", role: "Strategist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
      ],
    },
    {
      id: "webdesign",
      name: "Web Design Team",
      description: "Building digital experiences that delight users",
      members: [
        { name: "Ishaan Roy", role: "Lead", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Tanvi Agarwal", role: "UI/UX", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Nikhil Rao", role: "Developer", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
        { name: "Pooja Desai", role: "Developer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face", linkedin: "#" },
      ],
    },
  ];

  return (
    <section className="py-20" id="teams">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who make SAIF's vision a reality
          </p>
        </div>

        <Tabs defaultValue="media" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
            {teams.map((team) => (
              <TabsTrigger
                key={team.id}
                value={team.id}
                className="px-6 py-3 rounded-full data-[state=active]:gradient-bg data-[state=active]:text-primary-foreground border border-border/50 hover:border-primary/50 transition-all"
              >
                {team.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {teams.map((team) => (
            <TabsContent key={team.id} value={team.id} className="animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{team.name}</h3>
                <p className="text-muted-foreground">{team.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {team.members.map((member) => (
                  <div key={member.name} className="group text-center hover-lift">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-3 border-border group-hover:border-primary transition-colors"
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
                    <h4 className="font-semibold text-card-foreground text-sm">{member.name}</h4>
                    <p className="text-xs text-primary">{member.role}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Teams;
