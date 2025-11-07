import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", 
    "Big Data", "AI Ethics", "Cloud-AI Systems", "Web Development"
  ];

  const projects = [
    {
      title: "GAN-Based Synthetic Data Augmentation for Rare Disease Imaging",
      description: "Built custom GAN models to generate synthetic MRI images for underrepresented diseases."
    },
    {
      title: "Machine Learning-Based Stroke Prediction Model",
      description: "Developed a predictive healthcare model using medical and demographic data."
    },
    {
      title: "Semantic-Aware Book Recommendation Framework",
      description: "Designed an AI-based recommendation system using semantic embeddings."
    },
    {
      title: "Sentiment Modeling of IMDB Reviews",
      description: "Built deep learning models (LSTMs, TF-IDF) for sentiment classification."
    },
    {
      title: "Predictive Modeling of Customer Churn",
      description: "Used Logistic Regression, XGBoost, and SHAP analysis to identify retention drivers."
    }
  ];

  const publications = [
    {
      title: "Serve Surplus: A Smart Food Redistribution Platform",
      conference: "IEEE ICSCDS",
      description: "Designed a mobile platform connecting food donors, NGOs, and recipients with intelligent matching systems."
    },
    {
      title: "Enhancing Education Infrastructure through Machine Learning",
      conference: "IEEE ICFTS",
      description: "Classified schools using ML models like Isolation Forest and LightGBM."
    },
    {
      title: "Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation",
      conference: "IEEE AIMLA",
      description: "Proposed hybrid GAN and transfer learning-based malware detection approach."
    },
    {
      title: "Hybrid Design for Privacy Preserved Image Representation in Cloud",
      conference: "IEEE ICCSP",
      description: "Developed a secure cloud storage architecture using hybrid encryption."
    },
    {
      title: "Face Recognition Based Attendance System",
      conference: "IEEE ICSCDS",
      description: "Built real-time attendance system using LBPH and Haar Cascade."
    },
    {
      title: "Integrating Facial Expressions and Audio Cues for Real-Time Mental Health Monitoring",
      conference: "Accepted – Yet to be Published",
      description: "Proposed multimodal AI system combining facial and audio cues for emotional state recognition."
    }
  ];

  const bookChapters = [
    {
      title: "Quantum Key Distribution (QKD) – Theory and Applications in AV Security",
      publisher: "Nova Publishers",
      description: "Explained QKD fundamentals and secure communication in autonomous systems."
    },
    {
      title: "Introduction to Healthcare 5.0",
      publisher: "Nova Publishers",
      description: "Discussed AI-driven healthcare ecosystems integrating IoT, ML, and blockchain."
    }
  ];

  const experiences = [
    {
      organization: "National Institute of Technology, Silchar",
      role: "Research Intern",
      description: "Researched Generative Adversarial Networks (GANs) for creating synthetic medical images of rare diseases."
    },
    {
      organization: "Hyundai Motors India Ltd.",
      role: "Intern",
      description: "Applied AI/ML for predictive maintenance and cloud-integrated automotive operations."
    }
  ];

  const achievements = [
    "2nd Prize – Project & Poster Presentation on AI in Education, Vel Tech",
    "1st Prize – Paper Presentation on AI in Education, Adhiyamaan College"
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
            <span className="px-4 py-2 rounded-full border border-primary bg-primary/10 text-foreground">
              Research Intern – NIT Silchar
            </span>
            <span className="px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-foreground">
              10+ Publications
            </span>
            <span className="px-4 py-2 rounded-full border border-primary bg-primary/10 text-foreground">
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
              className="border-secondary text-secondary hover:bg-secondary/10"
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
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
              <p className="text-lg font-semibold">Bachelor of Technology in Artificial Intelligence and Machine Learning</p>
              <p className="text-muted-foreground">Rajalakshmi Engineering College, Chennai</p>
              <p className="text-lg mt-2">CGPA: <span className="text-primary font-bold">7.95 / 10</span></p>
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
                    className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium hover-glow cursor-default border border-border"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card border-primary/20 hover-glow">
                    <h3 className="text-xl font-bold text-primary mb-2">{exp.organization}</h3>
                    <p className="text-lg font-semibold mb-2">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card border-primary/20 hover-glow transition-all duration-300 hover:scale-105">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Publications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card border-secondary/20 hover-glow">
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                        {pub.conference}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Chapters Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Book Chapters
            </h2>
            <div className="space-y-6">
              {bookChapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card border-primary/20 hover-glow">
                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                        {chapter.publisher}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{chapter.title}</h3>
                    <p className="text-muted-foreground">{chapter.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Achievements & Awards
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card border-secondary/20 hover-glow">
                    <p className="text-lg font-semibold">{achievement}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <Card className="p-8 bg-card border-primary/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className="bg-background border-border focus:border-primary"
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
