import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import experienceBg from "@/assets/experience-bg.jpg";

const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      organization: "National Institute of Technology, Silchar",
      role: "Research Intern",
      description: "Researched Generative Adversarial Networks (GANs) for creating synthetic medical images of rare diseases.",
      period: "2024"
    },
    {
      organization: "Hyundai Motors India Ltd.",
      role: "Intern",
      description: "Applied AI/ML for predictive maintenance and cloud-integrated automotive operations.",
      period: "2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${experienceBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/')}
            className="absolute left-4 top-4 border-primary text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>

          <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research and industry internships shaping my AI/ML journey
          </p>
        </motion.div>
      </section>

      {/* Experience Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card hover-glow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{exp.organization}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 gold-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xl font-semibold mb-3 text-foreground">{exp.role}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
