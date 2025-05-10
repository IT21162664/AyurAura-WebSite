import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Download } from 'lucide-react';

const Research = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Research Components" 
          subtitle="AyurAura is built on a foundation of rigorous academic research"
        />
        
        <Card className="p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Literature Review</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our comprehensive literature review examined existing stress management approaches, with a focus on three key areas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Digital Stress Management</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Analysis of 37 existing mobile applications and digital platforms for stress management, evaluating their effectiveness, personalization capabilities, and therapeutic approaches.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Ayurvedic Therapies</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Examination of traditional Ayurvedic approaches to stress management, with particular emphasis on creative therapies such as Mandala art and Raga-based music therapy.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">AI in Mental Health</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Review of current applications of AI and ML in mental health contexts, including stress detection, prediction models, and personalized intervention systems.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Key findings from the literature review revealed significant gaps in existing solutions, particularly in the integration of traditional therapies with modern technology, personalization based on individual stress responses, and predictive capabilities for proactive stress management.
          </p>
        </Card>
        
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Gap</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our analysis identified several critical gaps in current stress management approaches:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Lack of Personalization</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Most existing solutions offer generic approaches that fail to account for individual differences in stress responses, personality types, and cultural contexts.
              </p>
            </div>
            
            <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Limited Integration of Traditional and Modern Approaches</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Few solutions effectively combine evidence-based traditional practices with cutting-edge technology, missing opportunities for synergistic benefits.
              </p>
            </div>
            
            <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Absence of Predictive Capabilities</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Current applications focus primarily on reactive stress management rather than proactive prediction and prevention.
              </p>
            </div>
            
            <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Inadequate Adaptation to User Progress</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Few systems continuously learn from user interactions to improve recommendations and therapeutic approaches over time.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            AyurAura addresses these gaps by creating a comprehensive, personalized stress management ecosystem that combines traditional Ayurvedic therapies with AI-driven predictions and adaptations.
          </p>
        </Card>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Research Objectives" 
          subtitle="Our research was guided by nine specific objectives addressing different aspects of stress management"
        />
        
        <Card className="p-8">
          <ol className="space-y-6">
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">1</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Develop a Real-Time Stress Detection System</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Create and validate a computer vision-based system for identifying stress levels through eye-blinking pattern analysis, supplemented with questionnaire data.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">2</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Implement Predictive Modeling for Future Stress</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Design and train a machine learning model capable of predicting future stress levels based on behavioral patterns and historical data.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">3</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Digitize Ayurvedic Creative Therapies</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Develop digital implementations of Mandala art therapy and Raga-based music therapy that preserve their therapeutic principles.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">4</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Create Performance-Based Stress Estimation</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Establish metrics and algorithms to evaluate user performance in creative therapy activities as indicators of stress levels.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">5</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Develop Recovery Time Prediction Model</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Design an algorithm to predict individualized recovery timelines based on stress levels, selected interventions, and user characteristics.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">6</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Integrate an AI Chatbot for Emotional Guidance</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Implement a conversational AI system capable of providing emotional support and personalized activity suggestions.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">7</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Create a Comprehensive Tracking Dashboard</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Design an intuitive user interface for monitoring emotional states, activities, and stress levels over time.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">8</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Validate System Effectiveness</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Conduct user studies to evaluate the effectiveness of the integrated system in reducing stress levels and improving well-being.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">9</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Develop a Commercialization Strategy</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Create a sustainable business model for deploying the system at scale, including pricing structures and partnership opportunities.
                </p>
              </div>
            </li>
          </ol>
        </Card>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="Predictive Modeling" 
          subtitle="AyurAura employs sophisticated predictive models to deliver personalized stress management"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">System Flow Diagram</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-4 text-center">
              <p className="text-gray-700 dark:text-gray-300 italic">
                System flow diagram would be displayed here, showing data collection, processing, model inference, and feedback loops.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              The system employs a continuous feedback loop where user interactions and responses to interventions are used to refine future predictions and recommendations, creating an increasingly personalized experience over time.
            </p>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Model Architecture</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-4 text-center">
              <p className="text-gray-700 dark:text-gray-300 italic">
                Model architecture diagram would be displayed here, showing the structure of the Random Forest model for stress prediction.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              The Random Forest model for future stress prediction utilizes 100 decision trees with a maximum depth of 15, trained on a feature set that includes behavioral patterns, historical stress data, activity logs, and demographic information.
            </p>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            href="/path-to-research-paper.pdf" 
            variant="primary"
            download
            icon={<Download size={18} />}
          >
            Download Full Research Paper
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Research;