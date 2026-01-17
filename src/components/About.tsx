import { Code2, Palette, Zap, Coffee } from "lucide-react";

const techStack = [
  { category: "Languages", items: ["Python", "JavaScript (ES6+)", "TypeScript", "C#", "C++", "Java", "Kotlin", "Bash", "SQL", "HTML5", "CSS"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { category: "Backend / APIs", items: ["Node.js", "Express.js", "REST", "gRPC", "WebSocket APIs"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Cloud / BaaS", items: ["Supabase", "Firebase (Auth, Firestore, Storage)", "GCP (GKE, Pub/Sub, Cloud SQL, Bigtable)"] },
  { category: "DevOps / CI/CD", items: ["Docker", "Kubernetes", "Terraform", "Kapitan", "GitLab CI", "ArgoCD", "Atlantis"] },
  { category: "Mobile / CV", items: ["Android Studio", "Android SDK", "OpenCV", "TensorFlow Lite"] },
  { category: "Deployment", items: ["Netlify", "Vercel", "Cloudflare (Workers/Pages)", "GitHub Pages"] },
  { category: "Testing", items: ["React Testing Library", "Playwright"] },
  { category: "Tools", items: ["Git/GitHub", "npm/yarn", "Linux", "Windows"] },
];

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable, scalable solutions" },
  { icon: Palette, label: "Design Focused", description: "Creating beautiful user experiences" },
  { icon: Zap, label: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Coffee, label: "Passion", description: "Driven by love for technology" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 gradient-border flex items-center justify-center overflow-hidden">
                <img 
                  src="https://drive.google.com/thumbnail?id=1TbHWuWR8ptNLKh1LzOhN0F3CKzrESCgj&sz=w1000"
                  alt="Jafrul Amin" 
                  className="w-60 h-60 rounded-xl object-cover"
                  onError={(e) => {
                    // Fallback to alternative Google Drive URL format
                    const target = e.target as HTMLImageElement;
                    target.src = `https://drive.google.com/uc?export=view&id=1TbHWuWR8ptNLKh1LzOhN0F3CKzrESCgj`;
                  }}
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I create seamless 
                user experiences backed by robust and scalable architectures. I'm always eager to learn 
                new technologies and tackle challenging projects.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech trends, contributing to 
                open-source projects, or enjoying a good cup of coffee while reading tech blogs.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Technology Tags by Category */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              {techStack.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
