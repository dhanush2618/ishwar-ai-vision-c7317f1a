import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Briefcase, Sparkles, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  const skills = [
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", 
    "Big Data", "AI Ethics", "Cloud-AI Systems", "Web Development"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
              Dhanush Ishwar
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Artificial Intelligence and Machine Learning Undergraduate
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base"
          >
            <span className="px-4 py-2 rounded-full glass-card text-foreground">
              Research Intern – NIT Silchar
            </span>
            <span className="px-4 py-2 rounded-full glass-card text-foreground">
              10+ Publications
            </span>
            <span className="px-4 py-2 rounded-full glass-card text-foreground">
              GANs | Computer Vision | Cloud-AI
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border">
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10 glow-border"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-center text-muted-foreground">
              I'm an AI & ML undergraduate passionate about combining deep learning, computer vision, 
              and intelligent systems to address challenges in healthcare, education, and sustainability. 
              My work bridges research and real-world applications through creativity, precision, and curiosity.
            </p>
            
            <Card className="p-8 glass-card mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
              <p className="text-lg font-semibold">Bachelor of Technology in Artificial Intelligence and Machine Learning</p>
              <p className="text-muted-foreground">Rajalakshmi Engineering College, Chennai</p>
              <p className="text-lg mt-2">CGPA: <span className="gold-accent font-bold">7.96 / 10</span></p>
            </Card>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-lg glass-card text-foreground font-medium hover-glow cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Explore More
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-8 glass-card hover-glow cursor-pointer transition-all duration-300 text-center"
                  onClick={() => navigate('/experience')}
                >
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Experience</h3>
                  <p className="text-sm text-muted-foreground mb-4">Research & industry internships</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    View Details
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-8 glass-card hover-glow cursor-pointer transition-all duration-300 text-center"
                  onClick={() => navigate('/projects')}
                >
                  <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Projects</h3>
                  <p className="text-sm text-muted-foreground mb-4">AI/ML innovative solutions</p>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    View Details
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-8 glass-card hover-glow cursor-pointer transition-all duration-300 text-center"
                  onClick={() => navigate('/publications')}
                >
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Publications</h3>
                  <p className="text-sm text-muted-foreground mb-4">10+ peer-reviewed papers</p>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    View Details
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-8 glass-card hover-glow cursor-pointer transition-all duration-300 text-center"
                  onClick={() => navigate('/book-chapters')}
                >
                  <BookOpen className="h-12 w-12 text-gold mx-auto mb-4 gold-accent" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Book Chapters</h3>
                  <p className="text-sm text-muted-foreground mb-4">Published contributions</p>
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
                    View Details
                  </Button>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card 
                className="p-8 glass-card hover-glow cursor-pointer transition-all duration-300 text-center max-w-md mx-auto"
                onClick={() => navigate('/achievements')}
              >
                <Award className="h-12 w-12 text-gold mx-auto mb-4 gold-accent" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Achievements & Awards</h3>
                <p className="text-sm text-muted-foreground mb-4">Recognition for excellence</p>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10 glow-border">
                  View Details
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Let's Connect
            </h2>
            <Card className="p-8 glass-card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="glass-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="glass-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className="glass-card border-border focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:dhanush@example.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Dhanush Ishwar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
