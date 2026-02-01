import gallery1 from '../assets/gallery/1.jpg';
import gallery2 from '../assets/gallery/2.jpg';
import gallery3 from '../assets/gallery/3.jpg';
import gallery4 from '../assets/gallery/4.jpg';
import gallery5 from '../assets/gallery/5.jpg';
import gallery6 from '../assets/gallery/6.jpg';

export const projects = [
  {
    id: 1,
    slug: 'hireready',
    title: 'HireReady',
    year: 2024,
    description: 'A comprehensive job matching platform connecting skilled professionals with employers',
    problem: 'Many job seekers struggle to find positions that match their skills, while employers have difficulty finding qualified candidates efficiently.',
    features: [
      'Advanced skill-based matching algorithm',
      'Real-time chat between candidates and employers',
      'Video interview scheduling',
      'Resume builder and portfolio showcase',
      'Company reviews and ratings'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    images: [gallery1, gallery2, gallery3],
    liveDemo: 'https://hireready-demo.com',
    githubRepo: 'https://github.com/aaomerali/hireready',
    learnings: 'Learned about real-time communication systems and advanced database optimization techniques.',
    challenges: 'Implementing efficient matching algorithms and handling real-time data synchronization.'
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    year: 2024,
    description: 'A full-featured e-commerce solution with inventory management and payment processing',
    problem: 'Small businesses need affordable, scalable e-commerce solutions with easy inventory management.',
    features: [
      'Product catalog with advanced filtering',
      'Shopping cart and wishlist',
      'Secure payment integration',
      'Order tracking and management',
      'Admin dashboard for inventory',
      'Email notifications'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Stripe API', 'Nodemailer'],
    images: [gallery4, gallery5],
    liveDemo: 'https://ecommerce-demo.com',
    githubRepo: 'https://github.com/aaomerali/ecommerce',
    learnings: 'Gained experience with payment gateway integration and complex state management.',
    challenges: 'Implementing secure payment processing and managing complex inventory relationships.'
  },
  {
    id: 3,
    slug: 'task-manager',
    title: 'Collaborative Task Manager',
    year: 2023,
    description: 'A real-time collaborative project management tool for teams',
    problem: 'Teams need better tools for real-time collaboration and project tracking.',
    features: [
      'Real-time task updates',
      'Drag-and-drop kanban board',
      'Team collaboration features',
      'File attachments',
      'Time tracking',
      'Analytics dashboard'
    ],
    techStack: ['React.js', 'Firebase', 'Tailwind CSS', 'Chart.js', 'React DnD'],
    images: [gallery6, gallery1, gallery2],
    liveDemo: 'https://taskmanager-demo.com',
    githubRepo: 'https://github.com/aaomerali/taskmanager',
    learnings: 'Mastered Firebase real-time database and learned about collaborative UI patterns.',
    challenges: 'Implementing real-time synchronization and handling concurrent user actions.'
  }
];
