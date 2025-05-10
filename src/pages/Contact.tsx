import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, MapPin, Phone, Users, Building, BookOpen } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // For demonstration, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };
  
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Contact Us" 
          subtitle="Get in touch with the AyurAura team for collaborations, inquiries, or support"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                  <p>Your message has been sent successfully! We'll get back to you as soon as possible.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3d9942] dark:focus:ring-[#5eb468] focus:border-[#3d9942] dark:focus:border-[#5eb468] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3d9942] dark:focus:ring-[#5eb468] focus:border-[#3d9942] dark:focus:border-[#5eb468] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3d9942] dark:focus:ring-[#5eb468] focus:border-[#3d9942] dark:focus:border-[#5eb468] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="commercial">Commercial Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3d9942] dark:focus:ring-[#5eb468] focus:border-[#3d9942] dark:focus:border-[#5eb468] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3d9942] dark:focus:ring-[#5eb468] focus:border-[#3d9942] dark:focus:border-[#5eb468] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    variant="primary"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          
          <div>
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</h4>
                    <a href="mailto:contact@ayuraura.com" className="text-gray-700 dark:text-gray-300 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                      contact@ayuraura.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      +94 11 234 5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Address</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      SLIIT, New Kandy Road<br />
                      Malabe, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Users className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468] mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Building className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468] mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">ResearchGate</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-[#3d9942] dark:text-[#5eb468] mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Google Scholar</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="Collaboration Opportunities" 
          subtitle="We welcome partnerships with researchers, healthcare providers, and organizations"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Research Partnerships</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We are actively seeking collaborations with researchers and academic institutions interested in stress management, AI in healthcare, and Ayurvedic therapies.
            </p>
            <Button to="/contact" variant="outline">Contact Research Team</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Clinical Implementations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Healthcare providers interested in implementing AyurAura in clinical settings are invited to discuss potential partnerships and customizations.
            </p>
            <Button to="/contact" variant="outline">Discuss Implementation</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Commercial Opportunities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We welcome discussions with organizations interested in licensing or integrating AyurAura technology into their wellness offerings.
            </p>
            <Button to="/contact" variant="outline">Explore Partnerships</Button>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Contact;