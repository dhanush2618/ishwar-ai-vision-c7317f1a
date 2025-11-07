import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import projectsBg from "@/assets/projects-bg.jpg";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "GAN-Based Synthetic Data Augmentation for Rare Disease Imaging",
      description: "Built custom GAN models to generate synthetic MRI images for underrepresented diseases, addressing critical data scarcity in medical AI research."
    },
    {
      title: "Machine Learning-Based Stroke Prediction Model",
      description: "Developed a predictive healthcare model using medical and demographic data to identify high-risk patients for early intervention."
    },
    {
      title: "Semantic-Aware Book Recommendation Framework",
      description: "Designed an AI-based recommendation system using semantic embeddings and natural language processing for personalized book suggestions."
    },
    {
      title: "Sentiment Modeling of IMDB Reviews",
      description: "Built deep learning models (LSTMs, TF-IDF) for sentiment classification achieving high accuracy on large-scale movie review datasets."
    },
    {
      title: "Predictive Modeling of Customer Churn",
      description: "Used Logistic Regression, XGBoost, and SHAP analysis to identify key retention drivers and predict customer churn behavior."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${projectsBg})`,
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

          <Sparkles className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions bridging research and real-world applications
          </p>
        </motion.div>
      </section>

      {/* Projects Content */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full glass-card hover-glow transition-all duration-300">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
