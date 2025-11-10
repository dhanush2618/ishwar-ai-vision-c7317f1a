import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import experienceIcon from "@/assets/experience-icon.jpg";
import nitGan from "@/assets/placeholders/dark/nit-gan.svg";
import hyundaiImg from "@/assets/placeholders/dark/hyundai.svg";

const Experience = () => {
  const experiences = [
    {
      organization: "National Institute of Technology, Silchar",
      role: "Research Intern",
      period: "June 2025 - July 2025",
      description: "Researched Generative Adversarial Networks (GANs) for creating synthetic medical images of rare diseases, contributing to medical AI advancement.",
  image: nitGan,
      highlights: [
        "Developed custom GAN architectures for medical image synthesis",
        "Collaborated with medical professionals to validate synthetic data",
        "Published findings in peer-reviewed conferences"
      ]
    },
    {
      organization: "Hyundai Motors India Ltd.",
      role: "Intern",
      period: "February 2024",
      description: "Applied AI/ML for predictive maintenance and cloud-integrated automotive operations, enhancing operational efficiency.",
  image: hyundaiImg,
      highlights: [
        "Implemented predictive maintenance models",
        "Integrated cloud-based AI solutions",
        "Analyzed automotive operational data"
      ]
    }
  ];

  const cleanPeriod = (p: string) => p.replace(/[0-9]/g, "").replace(/\s+–\s+|\s+-\s+/, " – ").replace(/\s{2,}/g, " ").trim();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NeonBackground />
      <CursorTrail />
      <Navigation />
      
  <div className="container mx-auto px-4 py-24 page-safe-top">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/">
            <Button variant="ghost" className="glass-card hover:glow-border mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-8 rounded-lg overflow-hidden max-w-3xl mx-auto">
            <img src={experienceIcon} alt="Experience" className="w-full h-48 object-cover opacity-80" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center page-title">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Research and industry internships shaping my AI/ML journey
          </p>
        </motion.div>

  <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="glass-card hover:glow-border border-2 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg gradient-text mb-1">{exp.organization}</CardTitle>
                      <p className="text-sm text-secondary font-semibold">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                      <Calendar className="w-3 h-3 text-gold" />
                      <span className="text-xs text-gold">{cleanPeriod(exp.period)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 rounded-md overflow-hidden h-56 w-full ring-2 ring-secondary/30">
                    <img src={exp.image} alt={exp.organization} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
