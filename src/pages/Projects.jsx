import { useState } from 'react';
import Card from '../components/Card';
import { projects } from '../data/projects';
import { 
  Code, 
  Search
} from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="page-container">
      <div className="full-width-container py-16">
        {/* Header */}
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing full stack development skills, 
            problem-solving abilities, and attention to detail.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6 max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.images[0]}
                cardImage={project.cardImage}
                year={project.year}
                href={`/projects/${project.slug}`}
                className="transform hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Code className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {projects.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {projects.filter(p => p.techStack.includes('React.js')).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">React Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {projects.filter(p => p.techStack.includes('Node.js')).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Node.js Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {new Set(projects.flatMap(p => p.techStack)).size}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
