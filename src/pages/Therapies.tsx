import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import { Palette, Music, BrainCircuit } from 'lucide-react';

const Therapies = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Creative Therapies" 
          subtitle="AyurAura integrates scientifically-backed Ayurvedic creative therapies for effective stress management"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0f9f1] dark:bg-[#2d7d32] text-[#3d9942] dark:text-white">
                  <Palette size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mandala Art Therapy</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Mandala Art Therapy has roots in ancient Eastern spiritual practices and has been adopted in modern psychology for its therapeutic benefits. Creating and coloring mandalas has been shown to reduce anxiety, promote mindfulness, and induce a meditative state.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  AyurAura digitizes this practice by providing personalized mandala templates and interactive drawing tools that adapt to the user's stress levels and preferences. The system analyzes drawing patterns, color choices, and completion times to further refine stress assessments and therapeutic recommendations.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Scientific Evidence</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Creating mandalas has been found to reduce symptoms of trauma in individuals with post-traumatic stress disorder." (Henderson et al., 2007)
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Coloring mandalas significantly reduced anxiety levels in adult participants compared to coloring other designs or free-form coloring." (Curry & Kasser, 2005)
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Creating mandalas activates the default mode network in the brain, which is associated with reduced rumination and increased mindfulness." (van der Vennet & Serice, 2012)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Digital Implementation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Adaptive Templates</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mandala patterns automatically adjust in complexity based on current stress levels and user preferences.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Color Psychology</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Color palettes tailored to promote specific emotional states based on Ayurvedic principles and modern color therapy.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Performance Analytics</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Subtle analysis of drawing patterns, pressure, consistency, and completion times to inform stress assessments.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Guided Sessions</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Optional voice guidance for mindful drawing, integrating breathing exercises and affirmations.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0f9f1] dark:bg-[#2d7d32] text-[#3d9942] dark:text-white">
                  <Music size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Raga-based Music Therapy</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Raga-based Music Therapy draws from the ancient Indian system of classical music, where specific melodic frameworks (ragas) are associated with particular times of day, seasons, and emotional states. Research has shown that listening to appropriate ragas can significantly influence physiological and psychological states.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  AyurAura's implementation offers personalized raga selections based on the user's current stress profile, time of day, and individual preferences. The system monitors physiological responses to optimize future recommendations.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Scientific Evidence</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Listening to Indian classical ragas led to significant reductions in blood pressure and anxiety levels in patients with hypertension." (Sharma et al., 2018)
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Specific morning and evening ragas showed differential effects on heart rate variability and cortisol levels, suggesting time-specific benefits." (Rao et al., 2014)
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "EEG studies indicate that certain ragas promote alpha wave activity associated with relaxation and reduced stress." (Mathur et al., 2015)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Digital Implementation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Personalized Raga Selection</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    AI-driven selection of ragas based on stress levels, time of day, and individual response patterns.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Adaptive Duration</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Optimized listening session lengths based on user engagement patterns and therapeutic needs.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Response Monitoring</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Optional integration with wearable devices to track physiological responses during music sessions.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Guided Meditation</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Combined raga music with optional guided meditation specifically designed for stress reduction.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="default">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Person practicing music therapy" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How AyurAura Personalizes Therapy
            </h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold">1</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Initial Assessment</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comprehensive evaluation of stress patterns, preferences, and personality traits through questionnaires and eye-blinking analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold">2</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Therapy Matching</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Algorithm-driven pairing of specific mandala patterns and raga compositions to the user's current stress profile and preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold">3</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Response Monitoring</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Continuous evaluation of user engagement and effectiveness of therapy sessions through behavioral analysis and self-reporting.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold">4</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Adaptive Refinement</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Machine learning algorithms continuously refine therapy recommendations based on accumulated user data and response patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="Integration of Traditional Wisdom and Modern Technology" 
          subtitle="AyurAura bridges ancient Ayurvedic principles with cutting-edge AI to create a unique therapeutic approach"
          centered
        />
        
        <Card className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f0f9f1] dark:bg-[#2d7d32] text-[#3d9942] dark:text-white mx-auto">
              <BrainCircuit size={32} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ayurvedic Foundations</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Dosha-Based Personalization</span> - Therapy recommendations consider Vata, Pitta, and Kapha dominance in users' profiles.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Circadian Rhythms</span> - Timing of therapy sessions aligned with Ayurvedic principles of optimal times for different activities.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Holistic Approach</span> - Consideration of physical, mental, and emotional factors in stress management recommendations.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Seasonal Adjustments</span> - Therapy recommendations adapted to seasonal changes according to Ritucharya principles.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modern AI Integration</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Computer Vision Analysis</span> - Real-time stress detection through eye-blinking patterns using deep learning.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Predictive Modeling</span> - Advanced algorithms to forecast future stress levels and personalize interventions.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Reinforcement Learning</span> - Continuous improvement of recommendations based on user feedback and outcomes.
                  </p>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Natural Language Processing</span> - Emotional analysis of user interactions to inform therapy recommendations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              This unique integration creates a system that honors traditional wisdom while leveraging modern technology to deliver personalized, effective stress management solutions that evolve with the user.
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Therapies;