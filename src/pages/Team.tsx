import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import { Linkedin, Mail, Award, ExternalLink } from 'lucide-react';
import jayathriImg from '../images/jayathri.png';
import thyagiImg from '../images/thyagi.png';
import poornaImg from '../images/poorna.png';
import chirathImg from '../images/chirath.png';
import pipuniImg from '../images/pipuni wijesiri.png';
import thamaliImg from '../images/thamali dasanayake.png';

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
          {/* Team Member 1 - Jayathri */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              <img 
                src={jayathriImg} 
                alt="Jayathri Weerasinghe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jayathri Weerasinghe</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Group Leader</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jayathri is a dedicated undergraduate from SLIIT with a keen interest in software quality assurance. She has gained practical experience through her internship at Virtusa, where she honed her skills in ensuring software reliability and performance. Her commitment to excellence and attention to detail make her a valuable asset to any team.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/jayathri-weerasinghe-706a78217/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 2 - Thyagi */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              <img 
                src={thyagiImg} 
                alt="Thyagi Jayathunge" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Thyagi Jayathunge</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Member</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Thyagi is a passionate undergraduate from SLIIT, currently interning as a Business Analyst at HealthRecon Connect LLC. She brings a unique blend of analytical thinking and creativity, evident in her writings on AI and machine learning applications. Thyagi's enthusiasm for exploring innovative solutions and her ability to bridge technical concepts with real-world applications highlight her as a dynamic contributor.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/thyagi-jayathunge-815a77217/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 3 - Poorna */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              <img 
                src={poornaImg} 
                alt="Poorna Manodya Gunasekera" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Poorna Gunasekera</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Member</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Poorna is a proactive IT undergraduate at SLIIT, currently working as a Junior Software Developer at LiveRoom Technologies. With a strong foundation in software development, he is eager to tackle complex challenges and contribute to impactful projects. His dedication to continuous learning and adaptability positions him well for success in the tech industry. 
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/poorna-manodya-gunasekera/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </Card>
          
          {/* Team Member 4 - Chirath */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              <img 
                src={chirathImg} 
                alt="Chirath Wickramasinghe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chirath Wickramasinghe</h3>
              <p className="text-sm text-[#3d9942] dark:text-[#5eb468] mb-3">Member</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Chirath is an enthusiastic student at SLIIT with a growing interest in information technology. He is committed to expanding his knowledge and skills in the field, aiming to make meaningful contributions to technological advancements. Chirath's curiosity and dedication to learning are the driving forces behind his academic and professional pursuits.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/chirath-wickramasinghe/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Supervisor 1 */}
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={pipuniImg} 
                    alt="Dr. Pipuni Wijesiri" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MS. Pipuni Wijesiri</h3>
                <p className="text-[#3d9942] dark:text-[#5eb468] mb-4">Research Supervisor, Senior Lecturer at SLIIT</p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  MS. Pipuni Wijesiri is a Lecturer in the Faculty of Computing at the Sri Lanka Institute of Information Technology (SLIIT), with a specialization in Computer Networks. She is currently pursuing a Master of Science in Computer Science, specializing in Cloud Computing, at the University of Moratuwa.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  MS. Wijesiri has actively contributed to IEEE initiatives, having served as the Education Activity Chair for the IEEE Computer Society Sri Lanka Chapter and currently holding the position of Assistant Secretary for the IEEE Women in Engineering Affinity Group of Sri Lanka. Her involvement in these roles has led to the organization of over 20 technical events, aiming to empower and connect the tech community.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:pipuni.w@sliit.lk" 
                    className="inline-flex items-center text-[#3d9942] dark:text-[#5eb468] hover:underline"
                  >
                    <Mail size={16} className="mr-1" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Supervisor 2 */}
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={thamaliImg} 
                    alt="Dr. Thamali Dasanayake" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MS. Thamali Dasanayake</h3>
                <p className="text-[#3d9942] dark:text-[#5eb468] mb-4">Research Supervisor, Senior Lecturer at SLIIT</p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ms. Gaya Thamali Dassanayake is a Lecturer in the Department of Information Technology at SLIIT, where she also serves as the Academic Coordinator for IT. With over six years of experience in tertiary education, she holds a Master of Computer Science from the University of Colombo School of Computing and a B.Sc. (Hons) in Information Technology from SLIIT.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Her research interests encompass Data Science, Big Data Management, Business Intelligence, Data Mining, and Data Analytics. Ms. Dassanayake has contributed to several publications and conference proceedings in these areas.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:thamali.d@sliit.lk" 
                    className="inline-flex items-center text-[#3d9942] dark:text-[#5eb468] hover:underline"
                  >
                    <Mail size={16} className="mr-1" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        {/* <Heading 
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
        </div> */}
        
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Publications</h3>
          
          <Card className="p-8">
            <ul className="space-y-6">
              <li className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">2025 5th International Conference on Advanced Research in Computing (ICARC)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  "Developing Predictive Models for Future Stress Likelihood and Recovery Time Using Behavioral and Emotional Data"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Authors: W. P. D. J. N Weerasinghe; H. D. P. M Gunasekera; B. G. W. M. C. R Wickramasinghe; K. A. D. T. R. Jayathunge; Pipuni Wijesiri; Thamali Dassanayake (2025)
                </p>
              </li>
              
              {/* <li className="border-l-4 border-[#3d9942] dark:border-[#5eb468] pl-4 py-2">
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
              </li> */}
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