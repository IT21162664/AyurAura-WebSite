import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Results = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Results & Evaluation" 
          subtitle="Our models demonstrate high accuracy in stress detection and prediction"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Random Forest Model for Future Stress Prediction
            </h3>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Overall Accuracy</div>
              </div>
              <div className="mx-8 h-16 border-r border-gray-300 dark:border-gray-600"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">0.92</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">F1 Score</div>
              </div>
              <div className="mx-8 h-16 border-r border-gray-300 dark:border-gray-600"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">0.95</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AUC-ROC</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Random Forest model for future stress prediction outperformed all other tested algorithms, including SVM (87%), Logistic Regression (81%), and KNN (83%). Key factors contributing to its superior performance include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Ability to handle mixed data types without extensive preprocessing</li>
              <li>Effective management of non-linear relationships between features</li>
              <li>Robust performance with relatively small training datasets</li>
              <li>Resistance to overfitting through ensemble methodology</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300 italic">
                Confusion matrix visualization would be displayed here.
              </p>
            </div>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              CNN Model for Real-Time Stress Detection
            </h3>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">89%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Overall Accuracy</div>
              </div>
              <div className="mx-8 h-16 border-r border-gray-300 dark:border-gray-600"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">0.88</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Precision</div>
              </div>
              <div className="mx-8 h-16 border-r border-gray-300 dark:border-gray-600"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-[#3d9942] dark:text-[#5eb468] mb-2">0.90</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Recall</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The VGG16-based CNN model for eye-blinking analysis demonstrated strong performance in real-time stress detection. The model was trained on a dataset of 1,200 video samples collected from 75 participants under various stress conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fine-tuning the pre-trained VGG16 architecture with transfer learning significantly improved performance compared to training from scratch, particularly given the limited size of our specialized dataset.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-700 dark:text-gray-300 italic">
                Classification report visualization would be displayed here.
              </p>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Mobile Application Screenshots" 
          subtitle="AyurAura offers an intuitive, user-friendly interface for stress management"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Home screen screenshot would be displayed here
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Home Dashboard</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time stress metrics and activity recommendations
              </p>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Mandala therapy screenshot would be displayed here
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Mandala Therapy</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interactive mandala drawing with real-time guidance
              </p>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Music therapy screenshot would be displayed here
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Raga Therapy</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Personalized music selections with mood tracking
              </p>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Progress tracking screenshot would be displayed here
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Progress Tracking</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visualizations of stress reduction over time
              </p>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="User Study Results" 
          subtitle="Validation studies demonstrate the effectiveness of AyurAura in reducing stress levels"
        />
        
        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Stress Reduction Efficacy</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-4 text-center">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  Line chart showing stress reduction over 4 weeks would be displayed here.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                In a 4-week controlled study with 45 participants, AyurAura users experienced a 37% greater reduction in perceived stress levels compared to the control group using generic stress management techniques.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">User Satisfaction Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ease of Use</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.7/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#3d9942] dark:bg-[#5eb468] h-2.5 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Perceived Effectiveness</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#3d9942] dark:bg-[#5eb468] h-2.5 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recommendation Accuracy</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.5/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#3d9942] dark:bg-[#5eb468] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Likelihood to Continue</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.6/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#3d9942] dark:bg-[#5eb468] h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Satisfaction</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.8/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#3d9942] dark:bg-[#5eb468] h-2.5 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Findings from User Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Personalization Effectiveness</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Users reported that the personalized nature of AyurAura's recommendations was 43% more effective than generic stress management techniques they had tried previously.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Prediction Accuracy</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The system successfully predicted stress increases in 82% of cases at least 24 hours before users reported feeling stress, allowing for proactive interventions.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Therapy Engagement</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Users engaged with the Mandala and Raga therapies for an average of 18 minutes per session, 3.2 times per week, indicating strong adherence to recommended activities.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Long-term Benefits</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  In a 3-month follow-up, 78% of study participants continued to use AyurAura regularly, with 85% reporting sustained improvements in stress management.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Results;