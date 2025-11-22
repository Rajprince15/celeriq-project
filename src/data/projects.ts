// Project Data Configuration
// Update this file with your actual project details, videos, and links

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  videoPath: string; // Path to video file in /public/videos/projects/
  thumbnail: string; // Fallback image if video not available
  category: string;
  accentColor: string; // Tailwind color class for theming
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Skull Reconstruction",
    description: "Advanced medical imaging application using AI to reconstruct 3D skull models from CT scans. Helps surgeons plan complex craniofacial procedures with precision.",
    techStack: ["Python", "TensorFlow", "3D Reconstruction", "Medical Imaging"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-1.mp4",
    thumbnail: "/placeholder.svg",
    category: "Medical AI",
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    title: "Skin Disease Detection",
    description: "Machine learning-powered diagnostic tool for early detection of skin conditions. Uses computer vision to analyze dermatological images and provide instant insights.",
    techStack: ["Deep Learning", "CNN", "Flask", "OpenCV"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-2.mp4",
    thumbnail: "/placeholder.svg",
    category: "Healthcare AI",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 3,
    title: "Head and Neck Segmentation",
    description: "Automated medical image segmentation system for radiotherapy planning. Precisely identifies anatomical structures in CT/MRI scans for cancer treatment.",
    techStack: ["U-Net", "PyTorch", "Medical Imaging", "DICOM"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-3.mp4",
    thumbnail: "/placeholder.svg",
    category: "Medical AI",
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    title: "Owner Renter",
    description: "Full-stack property management platform connecting property owners with potential renters. Features include listing management, search filters, and secure messaging.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-4.mp4",
    thumbnail: "/placeholder.svg",
    category: "Web Application",
    accentColor: "from-violet-500 to-purple-600"
  },
  {
    id: 5,
    title: "Mock Interview Platform",
    description: "AI-powered interview preparation platform with real-time feedback. Practice technical and behavioral interviews with intelligent question generation.",
    techStack: ["React", "FastAPI", "OpenAI", "WebRTC"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-5.mp4",
    thumbnail: "/placeholder.svg",
    category: "EdTech AI",
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: 6,
    title: "Cancer Website",
    description: "Comprehensive cancer awareness and information portal. Provides educational resources, treatment options, and support community for patients and families.",
    techStack: ["React", "Tailwind CSS", "Strapi CMS", "PostgreSQL"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-6.mp4",
    thumbnail: "/placeholder.svg",
    category: "Healthcare Portal",
    accentColor: "from-red-500 to-rose-600"
  },
  {
    id: 7,
    title: "Gee Ess Opticals",
    description: "Modern e-commerce platform for eyewear retail. Features virtual try-on, prescription management, and seamless checkout experience.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    liveLink: "https://geeessopticals.netlify.app",
    videoPath: "/videos/projects/project-7.mp4",
    thumbnail: "/placeholder.svg",
    category: "E-commerce",
    accentColor: "from-indigo-500 to-blue-600"
  },
  {
    id: 8,
    title: "Rajasthan Diamonds Website",
    description: "Elegant jewelry showcase website with stunning visuals and smooth animations. Features product catalog, custom design requests, and contact management.",
    techStack: ["React", "Next.js", "Framer Motion", "Sanity CMS"],
    liveLink: "#", // Update with your actual link
    videoPath: "/videos/projects/project-8.mp4",
    thumbnail: "/placeholder.svg",
    category: "E-commerce",
    accentColor: "from-yellow-500 to-amber-600"
  }
];
