import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import experienceIcon from "@/assets/experience-icon.jpg";

const Experience = () => {
  const experiences = [
    {
      organization: "National Institute of Technology, Silchar",
      role: "Research Intern",
      period: "June 2025 - July 2025",
      description: "Researched Generative Adversarial Networks (GANs) for creating synthetic medical images of rare diseases, contributing to medical AI advancement.",
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
      highlights: [
        "Implemented predictive maintenance models",
        "Integrated cloud-based AI solutions",
        "Analyzed automotive operational data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CursorTrail />
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Research and industry internships shaping my AI/ML journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card hover:glow-border border-2 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl gradient-text mb-2">
                        {exp.organization}
                      </CardTitle>
                      <p className="text-lg text-secondary font-semibold">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm text-gold">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
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
