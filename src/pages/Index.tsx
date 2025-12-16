import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import About from "@/components/sections/About";
import BoardMembers from "@/components/sections/BoardMembers";
import WhySAIF from "@/components/sections/WhySAIF";
import Programs from "@/components/sections/Programs";
import Teams from "@/components/sections/Teams";
import Workshops from "@/components/sections/Workshops";
import Podcast from "@/components/sections/Podcast";
import Startups from "@/components/sections/Startups";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisionMission />
      <About />
      <BoardMembers />
      <WhySAIF />
      <Programs />
      <Teams />
      <Workshops />
      <Podcast />
      <Startups />
      <Events />
      <Contact />
    </main>
  );
};

export default Index;
