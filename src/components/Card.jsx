import { Link } from 'react-router-dom';
import { Calendar, Folder, ExternalLink } from 'lucide-react';

const Card = ({
  title,
  description,
  image,
  cardImage,
  category,
  year,
  href,
  external = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700';
  const classes = `${baseClasses} ${className}`;

  // Use cardImage if provided, otherwise use the first image from images array
  const displayImage = cardImage || image;

  const cardContent = (
    <>
      {/* Image Section */}
      {displayImage && (
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
          <div className="aspect-video">
            <img
              src={displayImage}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          {year && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-2">
              <Calendar className="h-4 w-4 mr-1" />
              {year}
            </div>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {children}

        {/* Link Indicator */}
        {(href || external) && (
          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
            {external ? 'View Project' : 'Learn More'}
            <ExternalLink className="ml-2 h-4 w-4" />
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes} group block`}
          {...props}
        >
          {cardContent}
        </a>
      );
    }
    return (
      <Link to={href} className={`${classes} group block`} {...props}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {cardContent}
    </div>
  );
};

export default Card;
