import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Methodology = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Methodology" 
          subtitle="AyurAura employs a robust framework of data collection and machine learning techniques to deliver personalized stress management"
        />
        
        <Card className="p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Collection Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Questionnaires and Surveys</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Standardized stress assessment questionnaires were adapted and validated for the Sri Lankan context, ensuring cultural relevance. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Perceived Stress Scale (PSS)</li>
                <li>Depression Anxiety Stress Scale (DASS-21)</li>
                <li>Custom behavioral pattern questionnaires</li>
                <li>Activity and lifestyle surveys</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                These instruments provide baseline data for model training and ongoing calibration for each user.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Video Analysis</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Eye-blinking patterns were recorded under controlled conditions, with participants exposed to various stressors and relaxation techniques. This data was used to train the real-time stress detection model.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Video data processing involved:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Frame extraction and preprocessing</li>
                <li>Facial landmark detection</li>
                <li>Eye region isolation</li>
                <li>Blink pattern analysis and classification</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Machine Learning Model Selection</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Algorithm
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Selection Rationale
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    CNN (VGG16)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Real-time stress detection from eye-blinking
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    89%
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Superior performance in image classification; transfer learning capabilities
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Random Forest
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Future stress prediction
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    94%
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Highest accuracy among tested models; robust to overfitting; handles mixed data types well
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    SVM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Therapy effectiveness classification
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    87%
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Effective for high-dimensional data; good generalization properties
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Logistic Regression
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    Recovery time estimation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    81%
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Interpretable results; efficient for binary outcomes; low computational requirements
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    KNN
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    User similarity grouping
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    83%
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Effective for recommendation systems; simple implementation; non-parametric approach
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Implementation Technologies" 
          subtitle="AyurAura leverages a robust technology stack to deliver a seamless user experience"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The mobile application was developed using Flutter, providing a cross-platform solution with native-like performance on both Android and iOS devices. Key features of the frontend implementation include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Responsive UI design for various device sizes</li>
              <li>Real-time data visualization for stress metrics</li>
              <li>Interactive Mandala drawing canvas</li>
              <li>Integrated audio player for Raga therapy</li>
              <li>Offline functionality for core features</li>
              <li>Secure local data storage with encryption</li>
            </ul>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend Services</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The backend infrastructure was built with Python Flask, providing RESTful API services to the mobile application. The server architecture includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>API endpoints for data synchronization</li>
              <li>Real-time prediction service for stress detection</li>
              <li>User authentication and authorization</li>
              <li>Secure data storage and retrieval</li>
              <li>Model inference endpoints</li>
              <li>Analytics and reporting services</li>
            </ul>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Machine Learning Infrastructure</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The ML models were developed using TensorFlow and Scikit-learn, with custom pipelines for data preprocessing, model training, and evaluation:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>TensorFlow for deep learning models (CNN)</li>
              <li>Scikit-learn for traditional ML algorithms</li>
              <li>Model versioning and tracking</li>
              <li>Automated retraining pipelines</li>
              <li>Model optimization for mobile deployment</li>
              <li>TensorFlow Lite for on-device inference</li>
            </ul>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Storage and Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Firebase was used for authentication and cloud storage, providing a scalable and secure solution for user data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Firebase Authentication for user management</li>
              <li>Firestore for structured data storage</li>
              <li>Firebase Storage for media files</li>
              <li>Real-time database for synchronization</li>
              <li>Secure data access with custom rules</li>
              <li>Automated backups and disaster recovery</li>
            </ul>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="System Architecture" 
          subtitle="AyurAura employs a modular architecture with clear separation of concerns"
          centered
        />
        
        <Card className="p-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-gray-700 dark:text-gray-300 italic">
              System architecture diagram would be displayed here, showing the interaction between mobile app, backend services, ML models, and data storage.
            </p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Architecture Components</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The AyurAura system architecture consists of the following key components:
            </p>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Mobile Application Layer</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  The Flutter-based mobile app serves as the primary user interface, providing access to stress detection, therapy activities, and personalized recommendations. It includes local storage for offline functionality and secure data handling.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">API Gateway</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A Flask-based RESTful API layer that handles authentication, request routing, and data validation before forwarding requests to appropriate services.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Inference Services</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Dedicated services for real-time inference using the trained ML models, optimized for low-latency responses to support the real-time stress detection functionality.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Data Storage Layer</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Firebase services provide secure, scalable storage for user data, therapy content, and application settings, with appropriate access controls and encryption.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Analytics and Monitoring</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A comprehensive analytics pipeline collects anonymous usage data to continuously improve the ML models and user experience, with strict adherence to privacy guidelines.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Methodology;