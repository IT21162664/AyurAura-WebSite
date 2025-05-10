import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import { Building, Users, TrendingUp, CreditCard } from 'lucide-react';

const Commercialization = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Commercialization Strategy" 
          subtitle="AyurAura employs a sustainable business model to ensure widespread access while supporting ongoing development"
        />
        
        <Card className="p-8 mb-10">
          <div className="flex items-start">
            <div className="mr-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0f9f1] dark:bg-[#2d7d32] text-[#3d9942] dark:text-white">
                <CreditCard size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Freemium Model</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                AyurAura adopts a freemium business model to balance accessibility with sustainability. This approach ensures that basic stress management tools are available to all users while providing enhanced features to premium subscribers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Free Tier</h4>
                  <ul className="space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Basic stress detection</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Limited daily mandala therapy</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Basic raga therapy sessions</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">7-day stress history</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Limited chatbot interactions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#f0f9f1] dark:bg-[#1e4121]/40 p-6 rounded-lg border-2 border-[#3d9942] dark:border-[#5eb468]">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Premium Tier</h4>
                    <span className="bg-[#3d9942] text-white dark:bg-[#5eb468] dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Rs. 300/month
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Advanced real-time stress detection</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Future stress prediction</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Unlimited personalized therapies</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Premium mandala patterns & ragas</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Unlimited stress history & analytics</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Advanced chatbot with unlimited queries</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Recovery time predictions</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#3d9942] dark:text-[#5eb468] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Export and share progress reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Building className="w-8 h-8 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hospital Partnerships</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Strategic partnerships with healthcare providers to integrate AyurAura into clinical stress management programs. This approach offers benefits for:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Hospital mental health departments
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Outpatient stress management programs
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Corporate wellness initiatives
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <TrendingUp className="w-8 h-8 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">In-App Purchases</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Additional revenue streams through optional in-app purchases to enhance the user experience:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Premium mandala pattern packs
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Exclusive raga compositions
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Advanced analytics and insights
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      One-time therapy intensives
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Users className="w-8 h-8 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Community Engagement</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building a community of users and supporters through strategic partnerships and outreach:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Social media and influencer partnerships
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Corporate wellness program integration
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Academic institutional collaborations
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3d9942] dark:bg-[#5eb468] mt-2 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mental health awareness campaigns
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Market Analysis" 
          subtitle="AyurAura addresses a growing market need for effective stress management solutions"
        />
        
        <Card className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Target Market Segments</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Urban Professionals</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Career-focused individuals aged 25-45 experiencing high workplace stress, with limited time for traditional stress management practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Healthcare Providers</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hospitals, clinics, and mental health professionals seeking evidence-based digital tools to complement their stress management programs.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Academic Institutions</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Universities and research organizations interested in innovative approaches to stress management for students and research participants.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Corporate Wellness Programs</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Companies seeking to improve employee well-being and productivity through effective stress management solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Competitive Advantage</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Integration of Traditional and Modern Approaches</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Unlike competitors that focus solely on either traditional practices or modern technology, AyurAura combines Ayurvedic wisdom with AI-driven personalization.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Predictive Capabilities</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Most existing solutions offer only reactive stress management, while AyurAura provides proactive stress prediction and prevention.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Scientific Validation</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    AyurAura's approach is grounded in rigorous research and validation studies, providing evidence-based results that many competitors lack.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Adaptive Learning</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The system continuously learns from user interactions to provide increasingly personalized recommendations, creating a unique user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="Growth Strategy" 
          subtitle="A phased approach to market expansion and product development"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Phase 1: Launch & Validation</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">1</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Initial launch in Sri Lankan market with focused marketing to early adopters.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">2</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Partnerships with 2-3 key healthcare institutions for clinical validation.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">3</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Continuous refinement based on initial user feedback and performance data.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">4</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Publication of initial research findings in academic journals.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Phase 2: Expansion</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">1</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Expansion to broader South Asian market with localized content.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">2</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Development of enterprise solutions for corporate wellness programs.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">3</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Integration with popular wearable devices for enhanced data collection.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">4</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Strategic partnerships with yoga and meditation centers.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Phase 3: Global Reach</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">1</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Adaptation for global markets with cultural customizations.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">2</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Development of a comprehensive API for healthcare system integration.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">3</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Expanded research collaborations with international institutions.
                </p>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3d9942] dark:bg-[#5eb468] text-white font-bold mr-4">4</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Development of specialized versions for specific health conditions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Commercialization;