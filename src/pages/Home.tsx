import React, { useEffect, useRef, useState } from 'react';
import { 
  Eye, 
  BarChart, 
  Brain, 
  Clock, 
  MessageCircle, 
  LayoutDashboard,
  ArrowRight 
} from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import FeatureCard from '../components/ui/FeatureCard';
import Heading from '../components/ui/Heading';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AYURAURA
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-6">
              Personalized Stress Management with Ayurvedic Creative Therapies
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Combining Ayurveda and AI to revolutionize how we manage stress.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                to="/project-overview" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Learn More
              </Button>
              <Button 
                to="/downloads" 
                variant="outline" 
                size="lg"
              >
                Download Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section 
        bgColor="alternate" 
        ref={featuresRef}
      >
        <Heading 
          title="Key Features" 
          subtitle="AyurAura leverages AI and Ayurvedic principles to provide comprehensive stress management"
          centered
        />
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <FeatureCard 
            icon={<Eye size={24} />}
            title="Real-Time Stress Detection"
            description="Advanced eye-blinking analysis and questionnaire evaluation for accurate stress detection."
          />
          
          <FeatureCard 
            icon={<BarChart size={24} />}
            title="Future Stress Prediction"
            description="Behavioral analysis using Random Forest ML model to predict future stress levels with 94% accuracy."
          />
          
          <FeatureCard 
            icon={<Brain size={24} />}
            title="Current Stress Estimation"
            description="Performance analysis in Mandala drawing & Raga therapy for real-time stress evaluation."
          />
          
          <FeatureCard 
            icon={<Clock size={24} />}
            title="Recovery Time Prediction"
            description="Personalized 'Recovery Days' metric to forecast stress reduction timeframes."
          />
          
          <FeatureCard 
            icon={<MessageCircle size={24} />}
            title="Interactive Chatbot"
            description="AI-powered emotional guidance and personalized activity suggestions."
          />
          
          <FeatureCard 
            icon={<LayoutDashboard size={24} />}
            title="Daily Tracking Dashboard"
            description="Comprehensive monitoring of emotions, activities, and stress levels."
          />
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="primary">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our research is revolutionizing personalized stress management through the integration of ancient wisdom and modern technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              to="/research" 
              variant="primary" 
              size="lg"
            >
              Explore Research
            </Button>
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;