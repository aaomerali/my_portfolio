import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import { projects } from '../data/projects';
import { 
  ArrowLeft,
  Calendar,
  Code,
  Lightbulb,
  AlertTriangle,
  ExternalLink,
  Github
} from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find project by slug
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
    setLoading(false);
  }, [slug]);

  const nextImage = () => {
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button href="/projects">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Back Button */}
      <div className="full-width-container pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="full-width-container pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {project.year}
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Full Stack Project
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
              <Button 
                href={project.liveDemo} 
                external
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button 
                href={project.githubRepo} 
                external
                variant="outline"
                className="flex items-center justify-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === project.images.length - 1}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem Statement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                Problem Statement
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-600 dark:text-primary-400 rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Learnings & Challenges */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                Learnings & Challenges
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Learnings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.learnings}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Challenges Faced
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.challenges}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Button 
                  href={project.liveDemo} 
                  external
                  className="w-full justify-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  href={project.githubRepo} 
                  external
                  variant="outline"
                  className="w-full justify-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Repository
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Project Info
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Year
                  </dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    {project.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Type
                  </dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    Full Stack Application
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Status
                  </dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    Completed
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
