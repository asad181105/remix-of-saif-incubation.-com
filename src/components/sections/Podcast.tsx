import { Button } from "@/components/ui/button";
import { Play, Headphones, ExternalLink } from "lucide-react";
import podcastVideo from "@/assets/podcast-video.mp4";

const Podcast = () => {
  return (
    <section className="py-20" id="podcast">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">SAIF Podcast</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Startup Stories</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tune in to hear inspiring stories from successful entrepreneurs, industry experts, and SAIF alumni. Learn from their journeys, challenges, and victories.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
            <video
              src={podcastVideo}
              controls
              className="w-full aspect-video bg-black"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="gradient-bg group">
              <Play className="mr-2 w-4 h-4" />
              Watch More Episodes
            </Button>
            <Button variant="outline" className="border-primary/20">
              <ExternalLink className="mr-2 w-4 h-4" />
              Subscribe to Podcast
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
