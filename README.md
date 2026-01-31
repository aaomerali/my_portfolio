# Abdulrahman Omar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS for Abdulrahman Omar, a Software Engineering student and Full Stack Web Developer based in Istanbul, Turkey.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Dynamic Routing**: React Router for seamless navigation between pages
- **Project Showcase**: Dynamic project pages with detailed information and image galleries
- **Design Gallery**: Graphic design portfolio with lightbox functionality
- **Contact Form**: Validated contact form with error handling
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Loading**: Optimized for performance with lazy loading and efficient bundling

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Heroicons** - Beautiful SVG icons

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Card.jsx        # Project card component
│   ├── Footer.jsx      # Footer component
│   └── Header.jsx      # Navigation header
├── data/               # Static data
│   ├── designWorks.js  # Graphic design portfolio data
│   ├── projects.js     # Development projects data
│   └── skills.js       # Skills and expertise data
├── hooks/              # Custom React hooks
│   └── useDarkMode.js  # Dark mode functionality
├── pages/              # Page components
│   ├── Contact.jsx     # Contact page with form
│   ├── Design.jsx      # Graphic design gallery
│   ├── Home.jsx        # Landing page
│   ├── ProjectDetail.jsx # Individual project page
│   └── Projects.jsx    # Projects listing page
├── utils/              # Utility functions
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
├── index.css           # Default styles
└── tailwind.css        # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdulrahman/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

1. Open `src/data/projects.js`
2. Add a new project object to the array:
```javascript
{
  id: 4,
  slug: 'your-project-slug',
  title: 'Your Project Title',
  year: 2024,
  description: 'Brief project description',
  problem: 'Problem it solves',
  features: ['Feature 1', 'Feature 2'],
  techStack: ['React', 'Node.js', 'MongoDB'],
  images: ['/images/project1.jpg', '/images/project2.jpg'],
  liveDemo: 'https://your-demo-url.com',
  githubRepo: 'https://github.com/your-repo',
  learnings: 'What you learned',
  challenges: 'Challenges faced'
}
```

### Adding Design Works

1. Open `src/data/designWorks.js`
2. Add a new design work object:
```javascript
{
  id: 7,
  title: 'Your Design Title',
  category: 'Branding',
  description: 'Design description',
  image: '/images/design/your-design.jpg',
  year: 2024
}
```

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 📱 Features Breakdown

### Home Page
- Hero section with call-to-action buttons
- About section with education and background
- Skills section with progress bars and categories

### Projects Page
- Filterable project gallery
- Search functionality
- Category-based filtering
- Project statistics

### Project Detail Page
- Image gallery with navigation
- Detailed project information
- Tech stack display
- Live demo and GitHub links

### Design Gallery
- Masonry grid layout
- Category filtering
- Lightbox image viewer
- Smooth animations

### Contact Page
- Validated contact form
- Social media links
- Contact information display
- Error handling and success messages

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please create an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdulrahman Omar**
- Software Engineering Student at Istanbul Nişantaşı University
- Full Stack Web Developer
- Graphic Designer (5+ years experience)
- Based in Istanbul, Turkey

📧 abdulrahman.omar@example.com
🔗 [LinkedIn](https://linkedin.com/in/abdulrahman-omar)
🔗 [GitHub](https://github.com/abdulrahman)

---

⭐ If you like this project, please consider giving it a star!
