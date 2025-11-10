import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import bookChapterIcon from "@/assets/bookchapter-icon.jpg";
import qkdAv from "@/assets/placeholders/dark/qkd-av.svg";
import healthcare50 from "@/assets/placeholders/dark/healthcare-50.svg";
import aiGovernance from "@/assets/placeholders/dark/ai-governance-alt.svg";
import patternGeneric from "@/assets/placeholders/dark/pattern-generic.svg";

const BookChapters = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const bookChapters = [
    {
      title: "Quantum Key Distribution (QKD) – Theory and Applications in AV Security",
      publisher: "Nova Publishers",
      status: "Accepted",
      description: "Explained QKD fundamentals and secure communication in autonomous systems.",
      fullSummary: "Comprehensive overview of QKD technology for autonomous vehicle communication security including protocols and integration challenges.",
      image: qkdAv
    },
    {
      title: "Introduction to Healthcare 5.0",
      publisher: "Nova Publishers",
      status: "Accepted",
      description: "Discussed AI-driven healthcare ecosystems integrating IoT, ML, and blockchain.",
      fullSummary: "Healthcare 5.0 convergence of IoT, ML, blockchain enabling predictive diagnostics, secure records, and ethical AI workflows.",
      image: healthcare50
    },
    {
      title: "Human Centricity in AI Governance – Use Cases, Challenges and Research Directions",
      publisher: "(Pending)",
      status: "In Preparation",
      description: "Explores human-centered frameworks ensuring ethical oversight and transparency in AI governance.",
      fullSummary: "Survey of human-centric AI governance emphasizing transparency, accountability, participatory oversight, and research directions.",
      image: aiGovernance
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
              <img src={bookChapterIcon} alt="Book Chapters" className="w-full h-48 object-cover opacity-80" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center page-title">
            Book Chapters
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Contributing to academic knowledge through published book chapters
          </p>
        </motion.div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {bookChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                className="glass-card hover:glow-border border-2 transition-all duration-300 cursor-pointer h-full"
                onClick={() => setSelectedChapter(index)}
              >
                <CardHeader>
                  <div className="mb-4 rounded-md overflow-hidden h-36 w-full ring-2 ring-accent/40">
                    <img src={chapter.image || patternGeneric} alt={chapter.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = patternGeneric; }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs border border-gold/30">
                      {chapter.publisher}
                    </span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs border border-accent/30">
                      {chapter.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl gradient-text">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {chapter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full hover:bg-primary/10">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedChapter !== null} onOpenChange={() => setSelectedChapter(null)}>
        <DialogContent className="glass-card border-2 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text mb-2">
              {selectedChapter !== null && bookChapters[selectedChapter].title}
            </DialogTitle>
            <DialogDescription className="text-base">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs">
                  {selectedChapter !== null && bookChapters[selectedChapter].publisher}
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                  {selectedChapter !== null && bookChapters[selectedChapter].status}
                </span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <p className="text-muted-foreground leading-relaxed">
            {selectedChapter !== null && bookChapters[selectedChapter].fullSummary}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookChapters;
