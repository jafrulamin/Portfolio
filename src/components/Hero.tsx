import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono mb-4 animate-fade-in-up">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up-delay-1">
            <span className="gradient-text">Jafrul Amin</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in-up-delay-2">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up-delay-3">
            I craft modern web experiences with clean code and creative design.
            Passionate about building applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up-delay-3">
            <a href="#projects">
              <Button size="lg" className="glow px-8">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="gradient-border px-8">
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up-delay-3">
            <a
              href="https://github.com/jafrulamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:glow rounded-full"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jafrulamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors p-2"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aminjafrul39@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
