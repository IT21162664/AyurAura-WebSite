import React from 'react';
import { Download, Users, Building, Globe } from 'lucide-react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProjectOverview = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Project Overview" 
          subtitle="AyurAura fills critical gaps in current stress management solutions by integrating traditional wisdom with cutting-edge technology"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mission Statement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Stress has emerged as a significant public health challenge in Sri Lanka and globally, affecting productivity, health, and overall quality of life. Current solutions often offer generic approaches that fail to account for individual differences in stress responses and cultural contexts.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                AyurAura addresses these limitations by creating a personalized stress management ecosystem that combines the ancient wisdom of Ayurvedic creative therapies with the predictive power of artificial intelligence and machine learning. Our approach recognizes that effective stress management must be tailored to individual needs, continuously adaptive, and culturally relevant.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                By integrating real-time stress detection, future prediction, and personalized therapy recommendations, AyurAura provides a comprehensive solution that evolves with the user, offering increasingly accurate and effective stress management strategies over time.
              </p>
              {/* <div className="flex justify-start">
                <Button 
                  href="/path-to-research-paper.pdf" 
                  variant="primary"
                  download
                  icon={<Download size={18} />}
                >
                  Download Full Research Paper
                </Button>
              </div> */}
            </Card>
          </div>
          
          <div>
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Target Impact</h3>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Users className="w-6 h-6 text-[#3d9942] dark:text-[#5eb468]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Individuals</h4>
                  <p className="text-gray-600 dark:text-gray-400">Personalized stress management for everyday life improvement</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1">
                  <Building className="w-6 h-6 text-[#3d9942] dark:text-[#5eb468]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Healthcare Providers</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tools for more effective patient care and monitoring</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Globe className="w-6 h-6 text-[#3d9942] dark:text-[#5eb468]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Research Community</h4>
                  <p className="text-gray-600 dark:text-gray-400">Novel methodologies for integrating traditional practices with modern technology</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Key Features" 
          subtitle="AyurAura combines multiple innovative technologies to create a comprehensive stress management ecosystem"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Real-Time Stress Detection</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Using advanced computer vision algorithms, AyurAura analyzes eye-blinking patterns to detect stress levels in real-time. This non-invasive approach is supplemented with questionnaire-based assessments to provide a comprehensive stress evaluation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The system employs the VGG16 CNN architecture to analyze video data, achieving high accuracy in distinguishing normal vs. stress-related blinking patterns.
            </p>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Future Stress Prediction</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              AyurAura's predictive modeling uses a Random Forest algorithm to forecast future stress levels based on behavioral patterns, activity logs, and historical stress data. This proactive approach allows users to take preventive measures before stress escalates.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our model achieves a remarkable 94% accuracy in predicting stress levels, outperforming other machine learning approaches in our comparative analysis.
            </p>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personalized Creative Therapies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Based on real-time stress assessments, AyurAura recommends personalized Mandala drawing exercises and Raga-based music therapy sessions. These creative interventions are rooted in Ayurvedic principles and adapted to individual stress profiles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The system analyzes performance in these activities to further refine stress estimates and therapy recommendations, creating a continuously improving personalized experience.
            </p>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recovery Time Prediction</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              AyurAura introduces the innovative "Recovery Days" metric, which predicts how long it will take to reduce stress levels based on recommended interventions and historical data. This feature helps users set realistic expectations and track progress effectively.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The recovery prediction model uses a combination of user data and therapy effectiveness metrics to generate personalized timelines for stress reduction.
            </p>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Bridging Ancient Wisdom and Modern Technology
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              AyurAura represents a unique intersection of traditional Ayurvedic practices that have been refined over thousands of years and cutting-edge artificial intelligence that continues to evolve rapidly. This powerful combination creates a system that is both deeply rooted in proven therapeutic approaches and highly adaptive to individual needs.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              By digitizing and personalizing Ayurvedic creative therapies, we make these valuable stress management techniques more accessible and effective for contemporary users while preserving their essential principles.
            </p>
            <Button 
              to="/research" 
              variant="primary"
            >
              Explore Our Research
            </Button>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Mandala art therapy" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProjectOverview;