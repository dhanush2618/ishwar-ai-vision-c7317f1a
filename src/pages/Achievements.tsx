import { motion } from "framer-motion";
import { ArrowLeft, Award, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import achievementsBg from "@/assets/achievements-bg.jpg";

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      title: "2nd Prize – Project & Poster Presentation on AI in Education",
      organization: "Vel Tech",
      icon: Trophy
    },
    {
      title: "1st Prize – Paper Presentation on AI in Education",
      organization: "Adhiyamaan College",
      icon: Trophy
    },
    {
      title: "Top 150 out of 750 Teams – Smart India Hackathon (SIH)",
      organization: "National Level Competition",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${achievementsBg})`,
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

          <Award className="h-16 w-16 text-gold mx-auto mb-4 gold-accent" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Achievements & Awards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in AI/ML research and innovation
          </p>
        </motion.div>
      </section>

      {/* Achievements Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card hover-glow">
                  <div className="flex items-start gap-4">
                    <achievement.icon className="h-8 w-8 text-gold gold-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-bold mb-2 text-foreground">{achievement.title}</p>
                      <p className="text-muted-foreground">{achievement.organization}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
