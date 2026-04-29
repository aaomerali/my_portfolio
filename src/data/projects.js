
import hireready1 from '../assets/hireready project/1.png';
import hireready2 from '../assets/hireready project/2.png';
import hireready3 from '../assets/hireready project/3.png';
import hireready4 from '../assets/hireready project/4.png';
import hireready5 from '../assets/hireready project/5.png';
import hireready6 from '../assets/hireready project/6.png';
import hireready7 from '../assets/hireready project/7.png';
import hireready8 from '../assets/hireready project/8.png';
import hireready9 from '../assets/hireready project/9.png';
import evote1 from '../assets/e-vote platform/1.jpg';
import evote2 from '../assets/e-vote platform/2.jpg';
import evote3 from '../assets/e-vote platform/3.jpg';
import evote4 from '../assets/e-vote platform/4.jpg';
import evote5 from '../assets/e-vote platform/5.jpg';
import evote6 from '../assets/e-vote platform/6.jpg';
import evote7 from '../assets/e-vote platform/7.jpg';
import haseela1 from '../assets/haseela app/1.png';
import haseela2 from '../assets/haseela app/2.png';
import haseela3 from '../assets/haseela app/3.png';
import haseela4 from '../assets/haseela app/4.png';
import haseela5 from '../assets/haseela app/5.png';
import haseela6 from '../assets/haseela app/6.png';
import daftari1 from '../assets/daftarı project/1.jpg';
import daftari2 from '../assets/daftarı project/2.png';
import daftari3 from '../assets/daftarı project/3.png';
import daftari4 from '../assets/daftarı project/4.png';
import daftari5 from '../assets/daftarı project/5.png';
import daftari6 from '../assets/daftarı project/6.png';
import daftari7 from '../assets/daftarı project/7.png';
import daftari8 from '../assets/daftarı project/8.png';

export const projects = [
  {
    id: 1,
    slug: 'hireready',
    title: 'HireReady',
    year: 2025,
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
    githubRepo: 'https://github.com/aaomerali/HireReady-AI-Career-Preparation-Platform',
    learnings: 'The project emphasizes robust data management and user experience:\n\n• NoSQL Schema Design: Implementing flexible collections for users, CV metadata, and interview transcripts.\n\n• UI/UX Integration: Creating a seamless flow from a landing page to a functional dashboard that tracks total interviews and average scores.',
    challenges: 'Bridging the Gap: Developing an AI that can accurately simulate industry-specific interview questions.\n\n• Real-time Integration: Connecting real-time job APIs with a user-friendly filtering system.'
  },
  {
    id: 2,
    slug: 'e-voting-platform',
    title: 'E-Voting Platform',
    year: 2024,
    description: 'The E-Voting Platform is a streamlined web application designed to digitize and manage the electoral process for student organizations. Developed specifically for the Hadhrami Students Forum in Turkey, the platform facilitates secure, online voting for the forum\'s presidency. It provides a dual-interface system: a comprehensive dashboard for the Election Preparatory Committee and a user-friendly voting portal for students.',
    problem: 'Traditional student elections often face logistical hurdles, including:\n\n• Manual Counting Errors: Slow and error-prone manual tallying of physical ballots.\n\n• Geographic Barriers: Difficulty in gathering students from different Turkish cities in one physical location at the same time.\n\n• Lack of Transparency: The need for a controlled environment to ensure each student votes only once and within the allowed timeframe.\n\n• Delayed Results: Long waiting periods between the end of voting and the announcement of winners.',
    features: [
      'Admin Dashboard: Full management of student/candidate records and real-time election statistics.',
      'Secure Authentication: Dual-step login using registered email and a unique voting ID.',
      'Smart Validation: Prevents double-voting, empty ballots, or exceeding the allowed candidate selection.',
      'Live Election Control: Global toggle to instantly open or close the voting window.',
      'Instant Results: Automated vote tallying and immediate data visualization for the election committee.',
      'Responsive UI: A mobile-friendly design with clear instructional guides for a smooth user experience.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    images: [evote1, evote2, evote3, evote4, evote5, evote6, evote7],
    cardImage: evote1,
    liveDemo: 'hadrami-voting-platform.vercel.app',
    githubRepo: 'https://github.com/aaomerali/Hadrami-Forum-Election-Platform',
    learnings: 'Real-World Deployment: This project marked my first transition from local development to a live environment used by real people, emphasizing the importance of stability.\n\n• State Management: Gained deep experience in managing complex application states, particularly around authentication and voting permissions.\n\n• Security Mindset: Learned to implement front-end and back-end constraints to prevent unauthorized access or ballot stuffing.\n\n• UX/UI Design: Focused on creating a responsive design that works seamlessly on both mobile and desktop, ensuring accessibility for all students.',
    challenges: 'Data Integrity: Ensuring that the database remained consistent and that votes were recorded accurately without any possibility of duplication.\n\n• Time Constraints: Delivering a fully functional, bug-free platform within the strict deadline of the forum\'s election cycle.\n\n• Edge Case Handling: Managing scenarios such as users attempting to vote after the deadline or navigating back to the voting page after submission.'
  },
  {
    id: 3,
    slug: 'haseela',
    title: 'Haseela',
    year: 2025,
    description: 'Haseela is a comprehensive, cloud-native financial management platform tailored specifically for freelancers, independent contractors, and creative professionals. The application serves as a "Digital Harvest" (as the name implies in Arabic), allowing users to track their diverse income streams, manage client relationships, and monitor their progress toward specific financial milestones.',
    problem: 'Freelancers and independent professionals often struggle with fragmented financial management, using multiple tools to track income, manage clients, and monitor progress toward financial goals, leading to inefficiency and missed opportunities.',
    features: [
      'Smart Authentication & Cloud Sync: Secure login with real-time data synchronization across devices.',
      'Dynamic Financial Dashboard: Real-time overview of income, expenses, and goal progress.',
      'Advanced Client & Task Management: Comprehensive client relationship management with task tracking.',
      'Monthly Goal Strategy: Set and track monthly financial goals with progress visualization.',
      'Performance Reports & Data Visualization: Detailed analytics and visual reports for business insights.',
      'Earnings Archive (History): Complete historical record of all earnings and transactions.',
      'Modern UI/UX Design: Intuitive, responsive interface optimized for productivity.'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Supabase'],
    images: [haseela1, haseela2, haseela3, haseela4, haseela5, haseela6],
    cardImage: haseela1,
    liveDemo: 'https://haseela.vercel.app/',
    githubRepo: 'https://github.com/aaomerali/haseela',
    learnings: 'Financial Logic Programming: Gained experience in developing precise algorithms for calculating goal progress, monthly averages, and projected earnings based on active tasks.',
    challenges: 'Complex State Synchronization: Ensuring the Dynamic Dashboard reflected changes immediately after a task was completed or a client was edited required a robust state management strategy.'
  },
  {
    id: 4,
    slug: 'daftari',
    title: 'Daftari',
    year: 2025,
    description: 'Daftari (دفتري) is a secure, offline-first desktop application designed specifically for small to medium-sized retail businesses. Featuring a native Arabic Right-to-Left (RTL) interface, it serves as a comprehensive Point of Sale (POS) and accounting solution that helps store owners seamlessly manage their daily operations directly from their local machines.',
    problem: 'Many small retail store owners struggle to manage their daily operations, inventory, and bookkeeping using either error-prone manual ledgers or complex, cloud-dependent enterprise software. They need a simple, fast, and localized solution that can run completely offline, ensuring absolute data privacy, zero recurring subscription fees, and operational continuity regardless of internet connectivity.',
    features: [
      'Comprehensive Accounting Suite: End-to-end management of Point of Sale (POS), Inventory (Products), Expenses, Customers, and Suppliers.',
      'Unified Invoice Management: Centralized handling of Sales and Purchases invoices, featuring real-time search, advanced filtering, and editing capabilities.',
      'Thermal Printing Support: Custom-optimized functionality for generating and printing 80mm receipts directly to local thermal printers.',
      'Secure Authentication: Built-in local login and user management system utilizing robust SHA-256 password hashing.',
      'Interactive Dashboard: Visual analytics and data reporting to track business performance over time.',
      'Dynamic Configuration: Real-time application settings for customizing store details, user profiles, and local currencies.'
    ],
    techStack: ['React.js', 'Electron.js', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'better-sqlite3', 'Zustand', 'React Router DOM', 'Recharts', 'jsPDF'],
    images: [daftari1, daftari2, daftari3, daftari4, daftari5, daftari6, daftari7, daftari8],
    cardImage: daftari1,
    liveDemo: '',
    githubRepo: '',
    learnings: 'Offline-First Architecture: Gained deep knowledge of building robust applications that rely entirely on local storage while maintaining complex features like relational data handling and rapid search.\n\n• Electron & Native Modules: Mastered the integration of native Node.js modules (like better-sqlite3) within an Electron environment.\n\n• Hardware Interaction: Learned the intricacies of interfacing with desktop hardware, specifically optimizing CSS and window behaviors for 80mm thermal receipt printers.\n\n• Advanced State Management: Improved proficiency in managing complex, multi-view application states using Zustand.',
    challenges: 'Inter-Process Communication (IPC): Designing a secure, bottleneck-free communication bridge between Electron\'s Main process (handling the database) and the React Renderer process.\n\n• Print Layout Optimization: Achieving pixel-perfect print layouts for thermal printers, which required precise CSS media queries and handling variable content lengths dynamically.\n\n• UI/UX Navigation Structuring: Architecting an intuitive user experience, such as logically nesting historical sales views within the POS module to keep the sidebar clean while ensuring features remain highly accessible.\n\n• Local Data Integrity: Designing a rock-solid SQLite schema and ensuring reliable data interactions to prevent corruption in a purely local environment.'
  }
];
