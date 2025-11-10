import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Data Visualization",
    "Web Development",
    "Cloud Integration",
    "Power BI",
    "Python",
    "Deep Learning",
    "GANs",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorTrail />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glassmorphic-initials absolute text-[20rem] font-bold opacity-10 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          DI
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          >
            Dhanush Ishwar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Artificial Intelligence and Machine Learning Undergraduate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-12"
          >
            <span className="px-4 py-2 glass-card rounded-full">
              Research Intern – NIT Silchar
            </span>
            <span className="px-4 py-2 glass-card rounded-full">
              10+ Publications
            </span>
            <span className="px-4 py-2 glass-card rounded-full">
              Multiple Book Chapters
            </span>
            <span className="px-4 py-2 glass-card rounded-full">
              GANs | Computer Vision
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              className="glass-card hover:glow-border px-8 py-6 text-lg"
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm an AI & ML undergraduate passionate about combining deep
              learning, computer vision, and intelligent systems to address
              challenges in healthcare, education, and sustainability. My work
              bridges research and real-world applications through creativity,
              precision, and curiosity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, boxShadow: "var(--glow-primary)" }}
                className="px-6 py-3 glass-card rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Education
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card hover:glow-border border-2 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Bachelor of Technology in Artificial Intelligence and Machine
                  Learning
                </h3>
                <p className="text-lg text-secondary mb-4">
                  Rajalakshmi Engineering College, Chennai
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-semibold text-gold">
                    CGPA: 7.96 / 10
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    Deep Learning
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    NLP
                  </span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    Cloud-AI Integration
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's collaborate and create something
              amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="glass-card border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="glass-card border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="glass-card border-border/50 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full glass-card hover:glow-border py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-card hover:glow-border"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/dhanush-ishwar-a07a35254/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-card hover:glow-border"
                    asChild
                  >
                    <a href="mailto:dhanush@example.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Floating Collaborate Banner */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <Button
          onClick={scrollToContact}
          size="lg"
          className="glass-card hover:glow-border animate-glow-pulse px-8 py-6 text-lg shadow-2xl"
        >
          Let's Collaborate
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
