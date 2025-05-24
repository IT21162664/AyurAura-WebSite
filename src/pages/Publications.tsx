import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Publications = () => {
  return (
    <Section bgColor="primary">
      <Heading 
        title="Publications" 
        subtitle="Our research papers and publications"
      />
      
      <Card className="p-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Developing Predictive Models for Future Stress Likelihood and Recovery Time
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This research paper presents our innovative approach to stress prediction and management using machine learning models. 
          The study demonstrates the effectiveness of our predictive models in identifying future stress likelihood and estimating recovery time.
        </p>
        
        <a
          href="https://github.com/IT21162664/AyurAura-WebSite/blob/090eb58958d3c5e32a587a73cfe5cca28c2e3a0a/Documents/published%20research/Developing%20Predictive%20Models%20for%20Future%20Stress%20Likelihood%20and%20Recovery%20Time.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3d9942] hover:bg-[#2d7a32] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d9942] transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Research Paper
        </a>
      </Card>
    </Section>
  );
};

export default Publications; 