import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/aaomerali',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aaomerali',
      icon: LinkedinIcon,
    },
    {
      name: 'Email',
      href: 'aaomerali@gmail.com',
      icon: MailIcon,
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Design', href: '/design' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                AO
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Full Stack Web Developer & Graphic Designer passionate about creating beautiful, functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Based in Istanbul, Turkey
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineering Developer
              </p>
              <a
                href="mailto:aaomerali@gmail.com"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <MailIcon className="h-4 w-4 mr-2" />
                aaomerali@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Abdulrahman Omar. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Built with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
