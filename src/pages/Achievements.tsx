import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import achievementsIcon from "@/assets/achievements-icon.jpg";
import awardEducation from "@/assets/placeholders/dark/award-education.svg";
import paperPrize from "@/assets/placeholders/dark/paper-prize.svg";
import hackathon from "@/assets/placeholders/dark/hackathon.svg";

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Prize – Project & Poster Presentation on AI in Education",
      organization: "Vel Tech",
      icon: Trophy,
      color: "text-gold",
      image: paperPrize
    },
    {
      title: "1st Prize – Paper Presentation on AI in Education",
      organization: "Adhiyamaan College of Engineering",
      icon: Trophy,
      color: "text-gold",
      image: awardEducation
    },
    {
      title: "Top 150 out of 750 Teams – Smart India Hackathon (SIH)",
      organization: "National Level Competition",
      icon: Award,
      color: "text-gold",
      image: hackathon
    }
  ];

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

          <div className="flex justify-center mb-8">
            <div className="rounded-lg overflow-hidden max-w-3xl">
              <img src={achievementsIcon} alt="Achievements" className="w-full h-48 object-cover opacity-80" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center page-title">
            Achievements & Awards
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Recognition for excellence in AI/ML research and innovation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="glass-card hover:glow-border border-2 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 glass-card rounded-full ${achievement.color}`}> <achievement.icon className="w-6 h-6" /> </div>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary tracking-wide">Award</span>
                    </div>
                    <div className="rounded-md overflow-hidden h-28 w-full ring-2 ring-gold/40">
                      <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-md gradient-text leading-snug">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{achievement.organization}</p>
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
