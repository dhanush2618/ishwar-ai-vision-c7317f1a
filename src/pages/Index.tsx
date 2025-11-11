import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import InteractiveHeroBg from "@/components/InteractiveHeroBg";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import homeBg from "@/assets/placeholders/dark/home-bg.svg";
import aboutBg from "@/assets/placeholders/dark/about-graph.svg";
import educationBg from "@/assets/placeholders/dark/education-diagram.svg";
// Removed robot image in favor of abstract hero design

// Debug build tag to verify refreshes visually in the hero (will be removed)
const BUILD_TAG = "build-2025-11-11-02";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  // Restore decorations for abstract design
  const SHOW_DECOR = true;

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

  // Surface a console stamp as another cache-busting indicator
  console.log("Portfolio loaded:", BUILD_TAG);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <CursorTrail />
      <Navigation />

      {/* Hero Section - Minimal, clean */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center px-6 pt-32 md:pt-40 overflow-hidden"
        onMouseMove={(e) => {
          const { innerWidth, innerHeight } = window;
          const x = e.clientX / innerWidth - 0.5;
          const y = e.clientY / innerHeight - 0.5;
          setMouse({ x, y });
        }}
      >
        {/* Debug banners removed */}
        <div className="absolute inset-0 -z-10">
          <img src={homeBg} alt="Background" className="w-full h-full object-cover opacity-35" />
          <div className="mesh-bg" />
          {/* Subtle vignette */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(circle at 50% 50%, rgba(2,6,23,0.12) 0%, rgba(2,6,23,0.24) 42%, rgba(2,6,23,0.58) 78%, rgba(2,6,23,0.9) 100%)"
          }} />
          {/* Interactive canvas background */}
          <InteractiveHeroBg density={0.12} linkDistance={130} />
          {/* Optional sweeping light beam */}
          {SHOW_DECOR && <div className="absolute inset-0 beam-sweep mix-blend-screen opacity-10 md:opacity-20" />}
        </div>
        <div className="relative max-w-5xl mx-auto text-center" style={{ transform: `translate(${mouse.x * 6}px, ${mouse.y * 4}px)` }}>
          {/* subtle glow behind heading (distinct color) */}
          <div className="pointer-events-none absolute -inset-x-12 -top-10 -bottom-8 -z-10" style={{
            background: "radial-gradient(60% 60% at 50% 40%, rgba(244,114,182,0.18) 0%, rgba(20,184,166,0.16) 35%, rgba(2,6,23,0) 70%)"
          }} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-emerald-300 text-5xl md:text-7xl tracking-tight"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.55)" }}
          >
            Dhanush Ishwar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            AI & ML Undergraduate focusing on human‑centric governance, multimodal intelligence, and practical deep learning applications in healthcare & education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-cyan-600/60 to-indigo-600/60 hover:from-cyan-500 hover:to-indigo-500 backdrop-blur border border-cyan-300/20 hover:border-cyan-300/40 transition-colors"
            >
              Contact
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-slate-500/40 hover:border-cyan-300/50 backdrop-blur-sm"
            >
              <a href="https://www.linkedin.com/in/dhanush-ishwar-81a267258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
              I’m <span className="font-semibold text-primary">Dhanush Ishwar</span>, an aspiring <span className="font-semibold text-accent">Artificial Intelligence and Data Science engineer</span> currently pursuing my <span className="font-semibold text-primary">B.Tech in Artificial Intelligence and Machine Learning</span> at <span className="font-semibold text-secondary">Rajalakshmi Engineering College</span> (affiliated with <span className="font-semibold text-secondary">Anna University, Chennai</span>). With a <span className="font-semibold text-gold">CGPA of 7.96</span> and a strong research-driven mindset, I’ve developed expertise across <span className="font-semibold text-primary">machine learning</span>, <span className="font-semibold text-primary">data analytics</span>, <span className="font-semibold text-primary">computer vision</span>, and <span className="font-semibold text-primary">AI-driven automation</span>.
              <br /><br />
              My academic journey includes <span className="font-semibold text-secondary">7+ IEEE research papers</span>, several <span className="font-semibold text-secondary">book chapter contributions</span>, and a <span className="font-semibold text-secondary">research internship at NIT Silchar</span> focused on <span className="font-semibold text-primary">AI in the medical domain</span>.
              <br /><br />
              I’ve also gained industrial exposure through an internship at <span className="font-semibold text-secondary">Hyundai Motors India (Sriperumbudur)</span>, where I worked on <span className="font-semibold text-primary">data analytics</span> and <span className="font-semibold text-primary">automation systems</span>, bridging the gap between <span className="font-semibold text-accent">AI</span> and real-world manufacturing. My academic projects and publications reflect my passion for exploring <span className="font-semibold text-accent">data-centric intelligence</span>, while my strong foundation in <span className="font-semibold text-primary">computer networks</span>, <span className="font-semibold text-primary">operating systems</span>, and <span className="font-semibold text-primary">deep learning</span> solidifies my technical versatility.
              <br /><br />
              I aim to pursue <span className="font-semibold text-accent">advanced studies abroad</span> to deepen my knowledge of <span className="font-semibold text-primary">intelligent systems</span> and contribute to the intersection of <span className="font-semibold text-primary">AI</span>, <span className="font-semibold text-primary">data</span>, and <span className="font-semibold text-primary">real-world impact</span>.
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
                      href="https://www.linkedin.com/in/dhanush-ishwar-81a267258/"
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
