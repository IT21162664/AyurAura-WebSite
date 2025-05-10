import React from 'react';
import { Leaf, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-7 w-7 text-[#3d9942] dark:text-[#5eb468]" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">AyurAura</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Combining Ayurveda and AI to revolutionize how we manage stress.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@ayuraura.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project-overview" className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                  Project Overview
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Affiliations</h4>
            <a 
              href="https://www.sliit.lk/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#3d9942] dark:hover:text-[#5eb468] mb-2"
            >
              <span>Sri Lanka Institute of Information Technology</span>
              <ExternalLink size={16} className="ml-1" />
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Faculty of Computing
            </p>
            <div className="flex items-center">
              <span className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} AyurAura
              </span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            AyurAura - Personalized Stress Management with Ayurvedic Creative Therapies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;