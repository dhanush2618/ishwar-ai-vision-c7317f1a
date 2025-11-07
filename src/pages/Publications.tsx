import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import publicationsBg from "@/assets/publications-bg.jpg";

const Publications = () => {
  const navigate = useNavigate();

  const publications = [
    {
      title: "Serve Surplus: A Smart Food Redistribution Platform",
      conference: "IEEE ICSCDS",
      description: "Designed a mobile platform connecting food donors, NGOs, and recipients with intelligent matching systems."
    },
    {
      title: "Enhancing Education Infrastructure through Machine Learning",
      conference: "IEEE ICFTS",
      description: "Classified schools using ML models like Isolation Forest and LightGBM."
    },
    {
      title: "Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation",
      conference: "IEEE AIMLA",
      description: "Proposed hybrid GAN and transfer learning-based malware detection approach."
    },
    {
      title: "Hybrid Design for Privacy Preserved Image Representation in Cloud",
      conference: "IEEE ICCSP",
      description: "Developed a secure cloud storage architecture using hybrid encryption."
    },
    {
      title: "Face Recognition Based Attendance System",
      conference: "IEEE ICSCDS",
      description: "Built real-time attendance system using LBPH and Haar Cascade."
    },
    {
      title: "Integrating Facial Expressions and Audio Cues for Real-Time Mental Health Monitoring",
      conference: "Accepted – Yet to be Published",
      description: "Proposed multimodal AI system combining facial and audio cues for emotional state recognition."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${publicationsBg})`,
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

          <FileText className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Publications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Peer-reviewed research contributions to AI/ML and computer science
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-gold text-gold hover:bg-gold/10 glow-border"
          >
            <a 
              href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All on IEEE Xplore
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Publications Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full glass-card hover-glow">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      {pub.conference}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
