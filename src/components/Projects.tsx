import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Second Brain",
    description: "A full-stack digital organization tool to save, organize, and share content including YouTube videos, Twitter threads, documents, GitHub links, and notes in one centralized place.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/jafrulamin/Second-Brain",
    live: "",
    featured: true,
  },
  {
    title: "Expense Tracker",
    description: "A modern personal finance management app to track daily income and expenses, set category-based budgets, and visualize financial health through interactive analytics.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Recharts"],
    github: "https://github.com/jafrulamin/expense-tracker",
    live: "",
    featured: true,
  },
  {
    title: "Webhook Replay Studio",
    description: "A developer-focused debugging platform for capturing, inspecting, and replaying webhook requests. Perfect for testing how applications handle specific HTTP payloads.",
    tags: ["TypeScript", "Next.js", "tRPC", "DrizzleORM", "Tailwind CSS"],
    github: "https://github.com/jafrulamin/webhook-replay-studio",
    live: "",
    featured: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve real problems
            and showcase different skills and technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-card/80 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Github className="w-6 h-6 text-primary-foreground" />
                  </a>
                  <a
                    href={project.live || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                    onClick={(e) => !project.live && e.preventDefault()}
                  >
                    <ExternalLink className="w-6 h-6 text-primary-foreground" />
                  </a>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
