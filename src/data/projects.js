import gallery1 from '../assets/gallery/1.jpg';
import gallery2 from '../assets/gallery/2.jpg';
import gallery3 from '../assets/gallery/3.jpg';
import gallery4 from '../assets/gallery/4.jpg';
import gallery5 from '../assets/gallery/5.jpg';
import gallery6 from '../assets/gallery/6.jpg';
import hireready1 from '../assets/hireready project/1.png';
import hireready2 from '../assets/hireready project/2.png';
import hireready3 from '../assets/hireready project/3.png';
import hireready4 from '../assets/hireready project/4.png';
import hireready5 from '../assets/hireready project/5.png';
import hireready6 from '../assets/hireready project/6.png';
import hireready7 from '../assets/hireready project/7.png';
import hireready8 from '../assets/hireready project/8.png';
import hireready9 from '../assets/hireready project/9.png';

export const projects = [
  {
    id: 1,
    slug: 'hireready',
    title: 'HireReady',
    year: 2024,
    description: 'HireReady is an AI-driven career preparation platform designed to bridge the gap between academic study and professional employment. It centralizes essential tools—mock interviews, resume analysis, and job searching—into a single digital ecosystem.',
    problem: 'The project addresses the "Transition Gap" where graduates possess theoretical knowledge but lack the practical skills to enter the job market. Key obstacles identified include:\n\n• Weak Profiles: Resumes that are not ATS-friendly are often filtered out by automated systems.\n\n• Interview Anxiety: A lack of practice leads to poor performance and communication under pressure.\n\n• Platform Scattering: Users often have to juggle multiple, unreliable tools to prepare for their careers.',
    features: [
      'AI-Based Mock Interviews: Users can simulate real-world interview scenarios tailored to specific job roles. The system provides a total score and instant, detailed feedback on user answers.',
      'AI-Powered CV Analyzer: This tool evaluates resumes against ATS (Applicant Tracking System) standards, providing an "Overall Match" percentage and smart suggestions for improvement.',
      'Trusted Job Search Engine: An integrated board powered by real-time APIs allows graduates to search, filter, and discover genuine opportunities directly within the interface.'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Google Gemini 1.5 Flash', 'Firebase', 'Cloud Firestore', 'Redux'],
    images: [hireready1, hireready2, hireready3, hireready4, hireready5, hireready6, hireready7, hireready8, hireready9],
    cardImage: hireready1,
    liveDemo: 'https://hireready-demo.com',
    githubRepo: 'https://github.com/aaomerali/hireready',
    learnings: 'The project emphasizes robust data management and user experience:\n\n• NoSQL Schema Design: Implementing flexible collections for users, CV metadata, and interview transcripts.\n\n• Security & Isolation: Using Firebase UIDs to ensure strict data isolation so users can only access their personal information.\n\n• UI/UX Integration: Creating a seamless flow from a landing page to a functional dashboard that tracks total interviews and average scores.',
    challenges: 'Bridging the Gap: Developing an AI that can accurately simulate industry-specific interview questions.\n\n• Real-time Integration: Connecting real-time job APIs with a user-friendly filtering system.\n\n• State Persistence: Ensuring that long interview simulations are not lost mid-session.'
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
    cardImage: gallery4,
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
    cardImage: gallery6,
    liveDemo: 'https://taskmanager-demo.com',
    githubRepo: 'https://github.com/aaomerali/taskmanager',
    learnings: 'Mastered Firebase real-time database and learned about collaborative UI patterns.',
    challenges: 'Implementing real-time synchronization and handling concurrent user actions.'
  }
];
