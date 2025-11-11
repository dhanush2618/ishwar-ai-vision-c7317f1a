import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LinkedIn = () => {
  const profileUrl = "https://www.linkedin.com/in/dhanush-ishwar-81a267258/";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <NeonBackground />
      <CursorTrail />
      <Navigation />
      <section className="container mx-auto px-4 py-32 page-safe-top">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-primary/30 via-accent/30 to-secondary/30 rounded-full" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text page-title">LinkedIn Presence</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Connect professionally—explore ongoing research updates, project teasers, publication progress, and collaborative opportunities posted on my LinkedIn feed.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {["Research Threads", "AI Project Logs", "Conference Posts"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-xl border-2 hover:glow-border"
              >
                <h3 className="font-semibold mb-2 text-primary">{item}</h3>
                <p className="text-sm text-muted-foreground">
                  {i === 0 && "Summaries of experiments, benchmarks, and governance insights."}
                  {i === 1 && "Build snapshots, architecture sketches, and optimization notes."}
                  {i === 2 && "Publication milestones, CFP involvement, and event reflections."}
                </p>
              </motion.div>
            ))}
          </div>
          <Button asChild size="lg" className="glass-card hover:glow-border px-10 py-7 text-lg">
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              Visit LinkedIn <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default LinkedIn;
