import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Github, href: "https://github.com/jafrulamin", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jafrulamin", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aminjafrul39@gmail.com", label: "Email" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full glow" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">aminjafrul39@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <h3 className="text-xl font-bold mb-2">Let's Work Together!</h3>
              <p className="text-muted-foreground">
                I'm always excited to take on new projects and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
