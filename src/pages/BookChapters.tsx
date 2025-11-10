import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BookChapters = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const bookChapters = [
    {
      title: "Quantum Key Distribution (QKD) – Theory and Applications in AV Security",
      publisher: "Nova Publishers",
      status: "Published",
      description: "Explained QKD fundamentals and secure communication in autonomous systems.",
      fullSummary: "This chapter provides a comprehensive overview of Quantum Key Distribution (QKD) technology and its applications in securing autonomous vehicle communications. The work explores the theoretical foundations of quantum cryptography, implementation challenges, and practical use cases in modern transportation systems. Key topics include BB84 protocol, quantum channel security, and integration with existing automotive security frameworks."
    },
    {
      title: "Introduction to Healthcare 5.0",
      publisher: "Nova Publishers",
      status: "Published",
      description: "Discussed AI-driven healthcare ecosystems integrating IoT, ML, and blockchain.",
      fullSummary: "This chapter introduces the concept of Healthcare 5.0, exploring how artificial intelligence, Internet of Things (IoT), machine learning, and blockchain technology converge to create next-generation healthcare systems. The work examines intelligent patient monitoring, predictive diagnostics, secure health records management, and the ethical implications of AI-driven medical decision-making."
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
            <BookOpen className="w-16 h-16 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Book Chapters
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Contributing to academic knowledge through published book chapters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
