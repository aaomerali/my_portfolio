import { useState } from 'react';
import { designWorks, designCategories } from '../data/designWorks';
import { 
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter works based on selected category
  const filteredWorks = selectedCategory === 'All' 
    ? designWorks 
    : designWorks.filter(work => work.category === selectedCategory);

  const openLightbox = (work) => {
    setSelectedWork(work);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedWork(null);
  };

  const nextImage = () => {
    if (selectedWork && currentImageIndex < 0) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="page-container">
      <div className="full-width-container py-16">
        {/* Header */}
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Graphic Design Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my graphic design work spanning logos, branding, UI/UX, and digital marketing materials. 
            With 5+ years of design experience, I create visually compelling solutions that communicate effectively.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-7xl mx-auto">
          {designCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(work)}
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x400?text=${encodeURIComponent(work.title)}`;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">
                          {work.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {work.category} • {work.year}
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
              No designs found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {designWorks.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Designs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {designCategories.length - 1}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              5+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {Math.max(...designWorks.map(w => w.year)) - Math.min(...designWorks.map(w => w.year)) + 1}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years of Work</div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedWork && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(selectedWork.title)}`;
                }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                disabled={currentImageIndex >= 0}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedWork.title}
              </h2>
              <p className="text-gray-300 mb-4">
                {selectedWork.description}
              </p>
              <div className="flex justify-center items-center space-x-4 text-gray-400">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {selectedWork.category}
                </span>
                <span className="text-sm">
                  {selectedWork.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
