import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import { Linkedin, Mail, Award, ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Our Team" 
          subtitle="Meet the innovative minds behind AyurAura"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Team member photo would be displayed here
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Lead Researcher</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Specializes in machine learning and AI applications in healthcare. Responsible for the predictive modeling aspects of AyurAura.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:john@ayuraura.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 2 */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Team member photo would be displayed here
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jane Smith</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Ayurvedic Specialist</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Expert in traditional Ayurvedic therapies with a focus on creative approaches to stress management. Led the integration of traditional practices.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:jane@ayuraura.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 3 */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Team member photo would be displayed here
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">David Chen</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Mobile Development Lead</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Flutter expert responsible for creating the cross-platform mobile application with a focus on user experience and performance optimization.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:david@ayuraura.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 4 */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                Team member photo would be displayed here
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sarah Kumar</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Backend Systems Architect</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Designed and implemented the Flask-based backend infrastructure, with expertise in machine learning model deployment and API optimization.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:sarah@ayuraura.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Academic Supervision" 
          subtitle="Expert guidance from leading researchers in the field"
        />
        
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
                  Supervisor photo would be displayed here
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dr. Ramesh Perera</h3>
              <p className="text-[#3d9942] dark:text-[#5eb468] mb-4">Research Supervisor, Associate Professor at SLIIT</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dr. Perera specializes in human-computer interaction and AI applications in healthcare, with over 15 years of research experience and more than 40 publications in international journals.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Under his guidance, the AyurAura project has received recognition for its innovative approach to integrating traditional practices with cutting-edge technology, including the SLIIT Best Research Project Award 2024.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#3d9942] dark:text-[#5eb468] hover:underline"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Academic Profile
                </a>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#3d9942] dark:text-[#5eb468] hover:underline"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Research Publications
                </a>
                
                <a 
                  href="mailto:ramesh.perera@sliit.lk" 
                  className="inline-flex items-center text-[#3d9942] dark:text-[#5eb468] hover:underline"
                >
                  <Mail size={16} className="mr-1" />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="Achievements & Recognition" 
          subtitle="AyurAura has received multiple accolades for its innovative approach"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Award className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Young Innovators Award 2024</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Recognized for innovative integration of traditional practices and modern technology in mental health applications.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Award className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">SLIIT Best Research Project 2024</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Top honors for research excellence and practical implementation in the field of healthcare technology.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Award className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">IEEE Healthcare Innovation Challenge Finalist</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Selected among top 10 healthcare innovation projects in the South Asian region.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Publications</h3>
          
          <Card className="p-8">
            <ul className="space-y-6">
              <li className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Journal of Healthcare Informatics</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  "Integration of Ayurvedic Creative Therapies with AI for Personalized Stress Management: A Novel Approach"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Authors: J. Doe, J. Smith, D. Chen, S. Kumar, R. Perera (2024)
                </p>
              </li>
              
              <li className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">International Conference on AI in Healthcare (ICAIH)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  "Predictive Modeling for Future Stress Levels: A Random Forest Approach with Behavioral Analysis"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Authors: J. Doe, S. Kumar, R. Perera (2023)
                </p>
              </li>
              
              <li className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Journal of Traditional and Complementary Medicine</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  "Digital Adaptation of Mandala Art Therapy and Raga-based Music Therapy for Modern Stress Management"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Authors: J. Smith, D. Chen, R. Perera (2023)
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="primary">
        <Heading 
          title="Institutional Affiliation" 
          subtitle="AyurAura is a research project developed at the Sri Lanka Institute of Information Technology"
          centered
        />
        
        <div className="flex justify-center mb-10">
          <div className="w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-300 p-4 text-center italic">
              SLIIT logo would be displayed here
            </p>
          </div>
        </div>
        
        <Card className="p-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The AyurAura project was developed as part of the Computing Faculty's research initiative at SLIIT, focusing on innovative applications of technology in healthcare and wellness.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            We extend our gratitude to SLIIT for providing the resources, facilities, and academic support necessary for the successful development and validation of the AyurAura system.
          </p>
        </Card>
      </Section>
    </>
  );
};

export default Team;