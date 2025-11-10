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
import { svgThumbByIndex } from "@/lib/thumb";
import robot from "@/assets/placeholders/dark/robot.svg";
import homeBg from "@/assets/placeholders/dark/home-bg.svg";
import aboutBg from "@/assets/placeholders/dark/about-graph.svg";
import educationBg from "@/assets/placeholders/dark/education-diagram.svg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Analyze Big Data",
    "Information Retrieval",
    "Web Designing",
    "Web Development",
    "Data Visualization",
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

  // Removed highlights per user request

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <img src={homeBg} alt="AI Neon Background" className="pointer-events-none select-none fixed inset-0 w-full h-full object-cover -z-20 opacity-90" />
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[50rem] h-[50rem] bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/10 rounded-full blur-3xl top-[-20rem] left-[-10rem] animate-pulse" />
        <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 rounded-full blur-3xl bottom-[-15rem] right-[-5rem] animate-pulse" />
      </div>
      <CursorTrail />
      <Navigation />

    {/* Hero Section with aesthetic AI background */}
  <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden z-10">
        <div className="absolute inset-0 -z-10">
          {/* Ensure explicit hero background image */}
          <img src={homeBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_40%,rgba(167,139,250,0.25))] mix-blend-screen" />
          <svg className="absolute w-[140%] h-[140%] -left-[20%] -top-[20%] opacity-30" viewBox="0 0 800 800">
            <defs>
              <linearGradient id="gridGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            {Array.from({ length: 40 }).map((_, i) => (
              <line key={`v-${i}`} x1={i*20} y1={0} x2={i*20} y2={800} stroke="url(#gridGrad)" strokeWidth="0.5" strokeOpacity="0.35" />
            ))}
            {Array.from({ length: 40 }).map((_, i) => (
              <line key={`h-${i}`} x1={0} y1={i*20} x2={800} y2={i*20} stroke="url(#gridGrad)" strokeWidth="0.5" strokeOpacity="0.35" />
            ))}
            <circle cx="400" cy="400" r="180" fill="none" stroke="#10B981" strokeOpacity="0.25" strokeWidth="2" />
            <circle cx="400" cy="400" r="260" fill="none" stroke="#6366F1" strokeOpacity="0.18" strokeWidth="2" />
            <circle cx="400" cy="400" r="330" fill="none" stroke="#8B5CF6" strokeOpacity="0.12" strokeWidth="2" />
            <path d="M250 500 Q400 300 550 500" fill="none" stroke="#F59E0B" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M250 300 Q400 520 550 300" fill="none" stroke="#F43F5E" strokeOpacity="0.25" strokeWidth="2" />
          </svg>
          <div className="absolute inset-0 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={robot} alt="AI Robot" className="w-[820px] max-w-none opacity-30" />
          </div>
          {/* electrifying arcs overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* cyan arc */}
            <path d="M5 70 C 25 40, 75 60, 95 30" stroke="#22D3EE" strokeWidth="0.6" fill="none" className="electric-path" style={{ filter: "url(#glow)" }} />
            {/* violet arc */}
            <path d="M5 55 C 30 85, 70 25, 95 45" stroke="#A78BFA" strokeWidth="0.5" fill="none" className="electric-path" style={{ filter: "url(#glow)" }} />
            {/* amber spark */}
            <path d="M10 35 C 30 50, 60 50, 90 35" stroke="#F59E0B" strokeWidth="0.4" fill="none" className="electric-path" style={{ filter: "url(#glow)" }} />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* halo behind heading */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 w-[680px] h-[680px] rounded-full opacity-50 blur-3xl" style={{ backgroundImage: "conic-gradient(from 120deg at 50% 50%, rgba(34,211,238,0.25), rgba(167,139,250,0.25), rgba(99,102,241,0.25), rgba(52,211,153,0.2))" }} />
          {/* pulsing ring */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-[560px] h-[560px] rounded-full pulse-ring" />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]"
            style={{ textShadow: "0 0 30px rgba(99,102,241,0.65), 0 0 80px rgba(34,211,238,0.55), 0 0 110px rgba(6,182,212,0.45)" }}
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
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="glass-card hover:glow-border px-8 py-6 text-lg shadow-[0_0_20px_rgba(99,102,241,0.35)]"
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* About + Skills + Languages merged */}
      <section className="py-24 px-4 relative overflow-hidden">
        <img src={aboutBg} alt="About background" className="pointer-events-none absolute inset-0 -z-10 w-full h-full object-cover opacity-25" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-full ring-4 ring-primary/40 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.5),transparent_40%)]" />
                  <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.35),rgba(167,139,250,0.35),rgba(52,211,153,0.35))] animate-spin-slow" />
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI & ML undergraduate focused on bridging deep learning, computer vision, NLP, and responsible AI to solve problems in healthcare, education & sustainability. I value explainability, human-centric governance, and building production-ready intelligent systems.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl border hover:glow-border">
                  <h4 className="font-semibold mb-1">Tamil</h4>
                  <p className="text-xs text-muted-foreground">Mother Tongue • Native</p>
                </div>
                <div className="glass-card p-4 rounded-xl border hover:glow-border">
                  <h4 className="font-semibold mb-1">English</h4>
                  <p className="text-xs text-muted-foreground">Professional</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold gradient-text">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    whileHover={{ scale: 1.07 }}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="glass-card p-6 rounded-xl border-2">
                <h4 className="text-xl font-semibold mb-2">Focus Areas (2025)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Human-centric AI governance & ethical oversight</li>
                  <li>Generative models for scarce medical imaging</li>
                  <li>Multimodal emotion & mental health analytics</li>
                  <li>Skill intelligence & semantic talent matching</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Education Section (solo after removing highlights) */}
      <section className="py-24 px-4 relative overflow-hidden">
        <img src={educationBg} alt="Education background" className="pointer-events-none absolute inset-0 -z-10 w-full h-full object-cover opacity-20" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formal academic foundation underpinning applied AI research & project execution.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="glass-card hover:glow-border border-2 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  B.Tech Artificial Intelligence & Machine Learning
                </h3>
                <p className="text-lg text-secondary mb-4">
                  Rajalakshmi Engineering College, Chennai
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-semibold text-gold">CGPA: 7.96 / 10</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Machine Learning','Deep Learning','Computer Vision','NLP','Cloud-AI Integration'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
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

    </div>
  );
};

export default Index;
