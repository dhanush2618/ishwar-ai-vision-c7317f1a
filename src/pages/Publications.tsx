import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import publicationsIcon from "@/assets/publications-icon.jpg";
import serveSurplus from "@/assets/placeholders/dark/serve-surplus.svg";
import educationML from "@/assets/placeholders/dark/education-ml.svg";
import malwareGAN from "@/assets/placeholders/dark/malware-gan.svg";
import cloudPrivacy from "@/assets/placeholders/dark/cloud-privacy.svg";
import faceAttendance from "@/assets/placeholders/dark/face-attendance.svg";
import resumeNlp from "@/assets/placeholders/dark/resume-nlp.svg";
import emotionMultimodal from "@/assets/placeholders/dark/emotion-multimodal.svg";
import patternGeneric from "@/assets/placeholders/dark/pattern-generic.svg";

const Publications = () => {
  const ieeeLink = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar";
  
  const publications = [
    {
      title: "Serve Surplus: A Smart Food Redistribution Platform for Reducing Urban Food Waste and Combating Hunger",
      venue: "IEEE ICSCDS",
      year: "2024",
      description: "Designed a mobile platform connecting food donors, NGOs, and recipients with intelligent matching systems and real-time communication features.",
      tags: ["Mobile Development", "AI Matching", "Social Impact"],
      publisher: "IEEE",
      status: "Published",
      image: serveSurplus
    },
    {
      title: "Enhancing Education Infrastructure through Machine Learning",
      venue: "IEEE ICFTS",
      year: "2024",
      description: "Classified schools using ML models like Isolation Forest and LightGBM to identify infrastructure needs and improve educational quality.",
      tags: ["Machine Learning", "Education", "Data Analysis"],
      publisher: "IEEE",
      status: "Published",
      image: educationML
    },
    {
      title: "Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation",
      venue: "IEEE AIMLA",
      year: "2024",
      description: "Proposed hybrid GAN and transfer learning-based malware detection approach achieving superior accuracy in identifying threats.",
      tags: ["GANs", "Transfer Learning", "Cybersecurity"],
      publisher: "IEEE",
      status: "Published",
      image: malwareGAN
    },
    {
      title: "Hybrid Design for Privacy Preserved Image Representation in a Cloud Environment",
      venue: "IEEE ICCSP",
      year: "2024",
      description: "Developed a secure cloud storage architecture using hybrid encryption techniques for privacy-preserving image storage.",
      tags: ["Cloud Security", "Encryption", "Privacy"],
      publisher: "IEEE",
      status: "Published",
      image: cloudPrivacy
    },
    {
      title: "Face Recognition Based Attendance System – A Deep Dive",
      venue: "IEEE ICSCDS",
      year: "2024",
      description: "Built real-time attendance system using LBPH and Haar Cascade algorithms for automated student tracking.",
      tags: ["Computer Vision", "Face Recognition", "Real-time Systems"],
      publisher: "IEEE",
      status: "Published",
      image: faceAttendance
    },
    {
      title: "Integrating Facial Expressions and Audio Cues for Real-Time Mental Health Monitoring",
      venue: "Accepted – Yet to be Published",
      year: "2025",
      description: "Proposed multimodal AI system combining facial and audio cues for emotional state recognition and mental health support.",
      tags: ["Multimodal AI", "Healthcare", "Emotion Recognition"],
      publisher: "TBD",
      status: "Accepted",
      image: emotionMultimodal
    },
    {
      title: "Automated Resume Evaluation and Skill Roadmap Generation using NLP Techniques",
      venue: "Presented – Yet to Publish",
      year: "2025",
      description: "AI-driven job matcher with resume analysis, grammar check, generative AI scoring, and NLP-based skill roadmap generation.",
      tags: ["NLP", "Generative AI", "Recruitment"],
      publisher: "IEEE",
      status: "Presented",
  image: resumeNlp,
      bulletPoints: [
        "Built an AI-driven job matcher with resume analysis, grammar check, and generative AI scoring.",
        "Integrated NLP and live job search to create skill roadmaps and improve candidate–employer fit",
        "Publisher: IEEE"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NeonBackground />
      <CursorTrail />
      <Navigation />
      
  <div className="container mx-auto px-4 py-28 page-safe-top">
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

          <div className="mb-8 rounded-lg overflow-hidden max-w-3xl mx-auto">
            <img src={publicationsIcon} alt="Publications" className="w-full h-48 object-cover opacity-80" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center page-title">
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

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-4">
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
                  <div className="mb-4 rounded-md overflow-hidden h-40 w-full ring-2 ring-primary/30">
                    <img src={pub.image} alt={pub.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = patternGeneric; }} />
                  </div>
                  <CardTitle className="text-2xl gradient-text mb-2">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-base text-secondary">
                    {pub.venue}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-gold/20 text-gold border border-gold/30">{pub.status}</span>
                    {pub.publisher && <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">{pub.publisher}</span>}
                  </div>
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
                  {pub.bulletPoints && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      {pub.bulletPoints.map((bp, bpIndex) => (
                        <li key={bpIndex}>{bp}</li>
                      ))}
                    </ul>
                  )}
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
