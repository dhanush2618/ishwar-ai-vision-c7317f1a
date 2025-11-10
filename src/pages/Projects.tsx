import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import NeonBackground from "@/components/NeonBackground";
import projectsIcon from "@/assets/projects-icon.jpg";
import ganMedical from "@/assets/placeholders/dark/gan-medical.svg";
import strokePrediction from "@/assets/placeholders/dark/stroke-prediction.svg";
import bookReco from "@/assets/placeholders/dark/book-reco.svg";
import imdbSentiment from "@/assets/placeholders/dark/imdb-sentiment.svg";
import churnModel from "@/assets/placeholders/dark/churn-model.svg";
import resumeNlp from "@/assets/placeholders/dark/resume-nlp.svg";

const Projects = () => {
  const projects = [
    {
      title: "GAN-Based Synthetic Data Augmentation for Rare Disease Imaging",
      description: "Built custom GAN models to generate synthetic MRI images for underrepresented diseases, addressing critical data scarcity in medical AI research.",
      tech: ["GANs", "TensorFlow", "Medical Imaging"],
      image: ganMedical
    },
    {
      title: "Machine Learning-Based Stroke Prediction Model",
      description: "Developed a predictive healthcare model using medical and demographic data to identify high-risk patients for early intervention.",
      tech: ["Machine Learning", "Healthcare", "Python"],
      image: strokePrediction
    },
    {
      title: "Semantic-Aware Book Recommendation Framework",
      description: "Designed an AI-based recommendation system using semantic embeddings and natural language processing for personalized book suggestions.",
      tech: ["NLP", "Recommendation System", "Embeddings"],
      image: bookReco
    },
    {
      title: "Sentiment Modeling of IMDB Reviews",
      description: "Built deep learning models (LSTMs, TF-IDF) for sentiment classification achieving high accuracy on large-scale movie review datasets.",
      tech: ["LSTM", "NLP", "TF-IDF"],
      image: imdbSentiment
    },
    {
      title: "Predictive Modeling of Customer Churn",
      description: "Used Logistic Regression, XGBoost, and SHAP analysis to identify key retention drivers and predict customer churn behavior.",
      tech: ["XGBoost", "SHAP", "Analytics"],
      image: churnModel
    },
    {
      title: "Resume Evaluation using NLP",
      description: "Created an automated resume screening system using natural language processing to match candidates with job requirements.",
      tech: ["NLP", "Text Analysis", "Automation"],
      image: resumeNlp
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

          <div className="mb-8 rounded-lg overflow-hidden max-w-3xl mx-auto">
            <img src={projectsIcon} alt="Projects" className="w-full h-48 object-cover opacity-80" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Innovative AI/ML solutions bridging research and real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="glass-card hover:glow-border h-full border-2 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 rounded-md overflow-hidden h-36 w-full ring-2 ring-secondary/40">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl gradient-text">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs"
                      >
                        {tech}
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

export default Projects;
