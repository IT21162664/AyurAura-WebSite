import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FileText, Monitor, FileImage, Database, Download } from 'lucide-react';

const Downloads = () => {
  return (
    <>
      <Section bgColor="primary">
        <Heading 
          title="Research Downloads" 
          subtitle="Access our research papers, presentations, and other resources"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-6">
                <FileText className="w-12 h-12 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full Dissertation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our comprehensive research paper detailing the methodology, implementation, results, and future directions of the AyurAura project. (PDF, 5.2MB)
                </p>
                <Button 
                  href="/path-to-dissertation.pdf" 
                  variant="primary"
                  download
                  icon={<Download size={18} />}
                >
                  Download Full Paper
                </Button>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-6">
                <Monitor className="w-12 h-12 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Presentation Slides</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A visual presentation of our research findings and the AyurAura system, suitable for academic and professional audiences. (PPTX, 3.8MB)
                </p>
                <Button 
                  href="/path-to-presentation.pptx" 
                  variant="primary"
                  download
                  icon={<Download size={18} />}
                >
                  Download Presentation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <FileImage className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Research Poster</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A detailed academic poster summarizing our research methodology and key findings. (PDF, 2.1MB)
                </p>
                <Button 
                  href="/path-to-poster.pdf" 
                  variant="outline"
                  download
                  icon={<Download size={18} />}
                >
                  Download Poster
                </Button>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <Database className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sample Dataset</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Anonymized sample data from our research for academic and research purposes. (CSV, 1.3MB)
                </p>
                <Button 
                  href="/path-to-dataset.csv" 
                  variant="outline"
                  download
                  icon={<Download size={18} />}
                >
                  Download Dataset
                </Button>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-start">
              <div className="mr-4">
                <FileText className="w-10 h-10 text-[#3d9942] dark:text-[#5eb468]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Publication List</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Complete list of our published research papers and conference presentations. (PDF, 0.5MB)
                </p>
                <Button 
                  href="/path-to-publications.pdf" 
                  variant="outline"
                  download
                  icon={<Download size={18} />}
                >
                  Download List
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="alternate">
        <Heading 
          title="Citation Information" 
          subtitle="Please use the following formats when citing our research"
          centered
        />
        
        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">APA Format</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300 font-mono text-sm break-words">
              Doe, J., Smith, J., Chen, D., Kumar, S., & Perera, R. (2024). AyurAura: Personalized Stress Management with Ayurvedic Creative Therapies and Artificial Intelligence. <em>Journal of Healthcare Informatics, 15</em>(2), 45-62. doi:10.1234/jhi.2024.12345
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">MLA Format</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300 font-mono text-sm break-words">
              Doe, John, et al. "AyurAura: Personalized Stress Management with Ayurvedic Creative Therapies and Artificial Intelligence." <em>Journal of Healthcare Informatics</em>, vol. 15, no. 2, 2024, pp. 45-62.
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Chicago Format</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 font-mono text-sm break-words">
              Doe, John, Jane Smith, David Chen, Sarah Kumar, and Ramesh Perera. 2024. "AyurAura: Personalized Stress Management with Ayurvedic Creative Therapies and Artificial Intelligence." <em>Journal of Healthcare Informatics</em> 15 (2): 45-62.
            </p>
          </div>
        </Card>
      </Section>
      
      <Section bgColor="default">
        <Heading 
          title="License Information" 
          subtitle="Terms of use for our research materials and datasets"
        />
        
        <Card className="p-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Research Publication</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our research papers and publications are shared under a Creative Commons Attribution 4.0 International License (CC BY 4.0). This means you are free to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Share — copy and redistribute the material in any medium or format</li>
              <li>Adapt — remix, transform, and build upon the material for any purpose, even commercially</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Under the following terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              <li>Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sample Dataset</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The sample dataset is provided for academic and research purposes only under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The dataset may be used for non-commercial research and educational purposes only</li>
              <li>Any publications resulting from the use of this dataset must cite our original research</li>
              <li>The dataset may not be redistributed without permission</li>
              <li>The dataset has been fully anonymized to protect user privacy</li>
            </ul>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Downloads;