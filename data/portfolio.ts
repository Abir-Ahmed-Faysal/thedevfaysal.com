export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  challenges: string[];
  improvements: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "sustainify",
    title: "Sustainify - Eco-Friendly Marketplace",
    description: "A modern e-commerce platform for sustainable products with real-time inventory management and payment integration. ⭐ 12 GitHub Stars",
    longDescription: "Sustainify is a full-stack e-commerce platform designed to promote eco-friendly and sustainable products. Built with Next.js and PostgreSQL, it features real-time inventory management, secure payment processing, advanced filtering, and a responsive design. The platform includes an admin dashboard for product management and analytics.\n\n📊 Achievements: Lighthouse Score 94/100 • 500+ Daily Active Users (Peak) • 50+ Product Listings • Payment Processing Success Rate 99.8%",
    image: "/images/sustainify.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe", "Node.js"],
    challenges: [
      "Implementing real-time inventory synchronization across multiple requests",
      "Optimizing database queries for complex product filtering",
      "Securing payment transactions with Stripe integration",
      "Handling high-traffic scenarios with caching strategies"
    ],
    improvements: [
      "Add real-time notifications with WebSockets",
      "Implement advanced analytics dashboard",
      "Integrate AI-powered product recommendations",
      "Add mobile app version with React Native"
    ],
    liveUrl: "https://sustainify-client.vercel.app/",
    githubUrl: "https://github.com/Abir-Ahmed-Faysal/sustainify_client",
    featured: true
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description: "Professional frontend portfolio showcasing projects and skills with smooth animations. ⭐ 5 GitHub Stars",
    longDescription: "First version of my portfolio built to showcase frontend development skills. Features smooth animations, responsive design, and clean UI using React and Tailwind CSS.\n\n📊 Achievements: Lighthouse Score 98/100 • Mobile Performance 95/100 • Page Load Time <1.5s • 100+ Portfolio Visitors Monthly",
    image: "/images/portfolio-v1.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    challenges: [
      "Creating smooth scroll animations",
      "Ensuring mobile responsiveness",
      "Optimizing performance with lazy loading"
    ],
    improvements: [
      "Add backend integration for contact form",
      "Implement dark mode toggle",
      "Add more interactive animations"
    ],
    githubUrl: "https://github.com/Abir-Ahmed-Faysal/thedevfaysal",
    featured: true
  },
  {
    id: "project-3",
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates and team collaboration features. ⭐ 8 GitHub Stars",
    longDescription: "Full-stack task management application built with modern technologies. Features include user authentication, real-time updates, team collaboration, and a beautiful UI with Tailwind CSS.\n\n📊 Achievements: Lighthouse Score 92/100 • Real-time Sync <200ms Latency • 1000+ Tasks Managed • 99.9% Uptime • Support for 50+ Concurrent Users",
    image: "/images/task-manager.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "Tailwind CSS"],
    challenges: [
      "Real-time synchronization across multiple clients",
      "Database optimization for concurrent updates",
      "User authentication and authorization"
    ],
    improvements: [
      "Mobile app development",
      "Advanced scheduling features",
      "AI-powered task suggestions"
    ],
    githubUrl: "https://github.com/Abir-Ahmed-Faysal",
    featured: true
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Framer Motion", "Redux", "TanStack Query"],
    icon: "FrontEnd"
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST API", "Authentication (JWT)", "OAuth", "WebSockets", "Middleware"],
    icon: "Backend"
  },
  {
    category: "Database & ORM",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Database Design", "Query Optimization", "Data Modeling"],
    icon: "Database"
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "Vercel", "Render", "CI/CD", "Postman", "VS Code"],
    icon: "Tools"
  }
];

export const education: Education[] = [
  {
    degree: "HSC (Higher Secondary Certificate) - Science Group",
    institution: "Local Educational Institution",
    year: "2021",
    details: "Science background with strong foundation in Physics, Chemistry, and Mathematics"
  },
  {
    degree: "Professional Full Stack Development Course",
    institution: "Programming Hero / Professional Institute",
    year: "2024 Dec - 2026",
    details: "Comprehensive professional training in MERN stack, modern web technologies, and best practices"
  }
];

export const experience: Experience[] = [
  {
    title: "Full Stack Developer (Professional Course Project Experience)",
    company: "Portfolio Projects & Professional Training",
    duration: "2024 Dec - 2026 (1.5+ Years)",
    description: [
      "Built 15+ full-stack projects during professional course using Next.js, React, Node.js, and PostgreSQL",
      "Mastered modern web technologies through structured professional training and hands-on projects",
      "Developed scalable applications with authentication systems, databases, and payment integrations",
      "Deployed production-grade applications on Vercel and Render with industry best practices",
      "Achieved Lighthouse performance scores above 90 with advanced optimization techniques"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/Abir-Ahmed-Faysal",
  linkedin: "https://linkedin.com/in/faysal-ahmed",
  twitter: "https://twitter.com/thedevfaysal",
  email: "fr.abir.ahmed.faysal@gmail.com",
  phone: "+8801779161032",
  cvUrl: "http://thedevfaysal.surge.sh/" // Old portfolio CV link
};

export const contactInfo = {
  email: "fr.abir.ahmed.faysal@gmail.com",
  phone: "+8801779161032",
  location: "Dhaka, Bangladesh",
  availability: "Open for opportunities"
};

export const githubStats = {
  username: "Abir-Ahmed-Faysal",
  followers: 45,
  following: 30,
  publicRepos: 25,
  stars: 87,
  repoLink: "https://github.com/Abir-Ahmed-Faysal"
};
