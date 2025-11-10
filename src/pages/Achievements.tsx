import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Prize – Project & Poster Presentation on AI in Education",
      organization: "Vel Tech",
      icon: Trophy,
      color: "text-gold"
    },
    {
      title: "1st Prize – Paper Presentation on AI in Education",
      organization: "Adhiyamaan College of Engineering",
      icon: Trophy,
      color: "text-gold"
    },
    {
      title: "Top 150 out of 750 Teams – Smart India Hackathon (SIH)",
      organization: "National Level Competition",
      icon: Award,
      color: "text-gold"
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

          <div className="flex justify-center mb-8">
            <Award className="w-16 h-16 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Achievements & Awards
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Recognition for excellence in AI/ML research and innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card hover:glow-border border-2 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 glass-card rounded-full ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 gradient-text">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
