import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black dark:bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-300 dark:text-gray-300">
              Hello, I'm Abdessamad Dadda, a full stack developer and currently a third-year student in a Bachelor's program in Web and Mobile Development. 
              I hold a DTS from ISTA NTIC Rabat and a diploma in entrepreneurship, which reinforces my ability to manage projects from both a technical and strategic perspective.
            </p>
            <p className="leading-relaxed text-gray-300 dark:text-gray-300">
              I have worked on a variety of real-world projects, including educational platforms and e-commerce sites. 
              My development approach blends clean design, performance, and usability, with a constant focus on learning and improving.
            </p>
            <p className="leading-relaxed text-gray-300 dark:text-gray-300">
              I’ve studied and practiced with many technologies such as PHP, AngularJS, Python, Flutter, Django, Microsoft Azure, Node.js, JavaScript, React, Laravel, Vue.js, and more.
              I enjoy building impactful digital experiences that are both functional and engaging.
            </p>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SkillCategory 
                title="Frontend" 
                skills={["React.js", "Vue.js", "AngularJS", "HTML/CSS", "Tailwind CSS"]} 
              />
              <SkillCategory 
                title="Backend" 
                skills={["Laravel", "Node.js", "Django", "PHP", "REST APIs"]} 
              />
              <SkillCategory 
                title="Mobile & Cloud" 
                skills={["Flutter", "Microsoft Azure"]} 
              />
              <SkillCategory 
                title="Others" 
                skills={["Python", "JavaScript", "UI/UX Design", "Git", "Figma", "Entrepreneurship"]} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h4 className="mb-3 text-lg font-medium text-gray-200 dark:text-gray-200">{title}</h4>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
            <span className="text-gray-300 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
