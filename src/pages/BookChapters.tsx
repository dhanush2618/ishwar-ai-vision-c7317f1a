import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import booksBg from "@/assets/books-bg.jpg";

const BookChapters = () => {
  const navigate = useNavigate();

  const bookChapters = [
    {
      title: "Quantum Key Distribution (QKD) – Theory and Applications in AV Security",
      publisher: "Nova Publishers",
      description: "Explained QKD fundamentals and secure communication in autonomous systems."
    },
    {
      title: "Introduction to Healthcare 5.0",
      publisher: "Nova Publishers",
      description: "Discussed AI-driven healthcare ecosystems integrating IoT, ML, and blockchain."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${booksBg})`,
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

          <BookOpen className="h-16 w-16 text-gold mx-auto mb-4 gold-accent" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Book Chapters
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to academic knowledge through published book chapters
          </p>
        </motion.div>
      </section>

      {/* Book Chapters Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {bookChapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card hover-glow">
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 gold-accent">
                      {chapter.publisher}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{chapter.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{chapter.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookChapters;
