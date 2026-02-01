import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { technicalSkills, softSkills } from '../data/skills';
import { 
  Code, 
  GraduationCap, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import profilePhoto from '../assets/photo.jpeg';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 md:py-20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pb-20">
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100">
                Abdulrahman Omar
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Full Stack Web Developer
                </h2>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Abdulrahman Omar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-3 shadow-lg">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate web developer building modern, scalable applications using React, Node.js, and MongoDB. 
              Combining strong technical skills with 5+ years of graphic design expertise to create beautiful, functional digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white border-2 border-primary-600 hover:border-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Me
              </Button>
              <Button 
                href="/resume.pdf" 
                variant="outline"
                size="lg"
                download
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Download Resume
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="full-width-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                  About Me
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a Software Engineering student at Istanbul Nişantaşı University, expected to graduate in 2026 with a current GPA of 3.36. 
                  My journey in web development started with a curiosity about how things work on the internet, and has evolved into a passion for creating impactful digital solutions.
                </p>
                
                <p>
                  With a strong foundation in full stack development and over 5 years of graphic design experience, I bring a unique perspective to web development. 
                  I focus on building clean, intuitive user interfaces while ensuring robust backend functionality.
                </p>
                
                <p>
                  I'm particularly interested in React.js, Node.js, and modern web technologies that allow me to create scalable, performant applications. 
                  My design background helps me bridge the gap between aesthetics and functionality, ensuring that the applications I build are not only powerful but also visually appealing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">3.36</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GPA</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">2026</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Graduation</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Sparkles className="h-24 w-24 text-primary-600 dark:text-primary-400 mx-auto" />
                  <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Building the Future of Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="full-width-container">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set combining technical expertise with creative problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                  >
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button href="/projects" size="lg">
              View My Work
            </Button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
