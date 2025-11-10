import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";

const Publications = () => {
  const ieeeLink = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar";
  
  const publications = [
    {
      title: "Serve Surplus: A Smart Food Redistribution Platform for Reducing Urban Food Waste and Combating Hunger",
      venue: "IEEE ICSCDS",
      year: "2024",
      description: "Designed a mobile platform connecting food donors, NGOs, and recipients with intelligent matching systems and real-time communication features.",
      tags: ["Mobile Development", "AI Matching", "Social Impact"]
    },
    {
      title: "Enhancing Education Infrastructure through Machine Learning",
      venue: "IEEE ICFTS",
      year: "2024",
      description: "Classified schools using ML models like Isolation Forest and LightGBM to identify infrastructure needs and improve educational quality.",
      tags: ["Machine Learning", "Education", "Data Analysis"]
    },
    {
      title: "Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation",
      venue: "IEEE AIMLA",
      year: "2024",
      description: "Proposed hybrid GAN and transfer learning-based malware detection approach achieving superior accuracy in identifying threats.",
      tags: ["GANs", "Transfer Learning", "Cybersecurity"]
    },
    {
      title: "Hybrid Design for Privacy Preserved Image Representation in a Cloud Environment",
      venue: "IEEE ICCSP",
      year: "2024",
      description: "Developed a secure cloud storage architecture using hybrid encryption techniques for privacy-preserving image storage.",
      tags: ["Cloud Security", "Encryption", "Privacy"]
    },
    {
      title: "Face Recognition Based Attendance System – A Deep Dive",
      venue: "IEEE ICSCDS",
      year: "2024",
      description: "Built real-time attendance system using LBPH and Haar Cascade algorithms for automated student tracking.",
      tags: ["Computer Vision", "Face Recognition", "Real-time Systems"]
    },
    {
      title: "Integrating Facial Expressions and Audio Cues for Real-Time Mental Health Monitoring",
      venue: "Accepted – Yet to be Published",
      year: "2025",
      description: "Proposed multimodal AI system combining facial and audio cues for emotional state recognition and mental health support.",
      tags: ["Multimodal AI", "Healthcare", "Emotion Recognition"]
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

          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Publications
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Research contributions and academic work published in peer-reviewed
            conferences and journals
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="glass-card hover:glow-border"
              asChild
            >
              <a href={ieeeLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View on IEEE Xplore
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass-card hover:glow-border h-full border-2 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text mb-2">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-base text-secondary">
                    {pub.venue} • {pub.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 glass-card rounded-full text-sm hover:glow-border transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
