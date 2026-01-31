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
    images: [
      '/images/hireready-1.png',
      '/images/hireready-2.png',
      '/images/hireready-3.png'
    ],
    liveDemo: 'https://hireready-demo.com',
    githubRepo: 'https://github.com/abdulrahman/hireready',
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
    images: [
      '/images/ecommerce-1.png',
      '/images/ecommerce-2.png'
    ],
    liveDemo: 'https://ecommerce-demo.com',
    githubRepo: 'https://github.com/abdulrahman/ecommerce',
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
    images: [
      '/images/taskmanager-1.png',
      '/images/taskmanager-2.png',
      '/images/taskmanager-3.png'
    ],
    liveDemo: 'https://taskmanager-demo.com',
    githubRepo: 'https://github.com/abdulrahman/taskmanager',
    learnings: 'Mastered Firebase real-time database and learned about collaborative UI patterns.',
    challenges: 'Implementing real-time synchronization and handling concurrent user actions.'
  }
];
