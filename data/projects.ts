// data/projects.ts
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow - Project Management App",
    description:
      "A collaborative project management tool for teams, featuring task boards, real-time updates, user roles, and analytics.",
    icon: FaReact,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Socket.io",
      "Chart.js",
    ],
    githubLink: "https://github.com/universe-diamond",
    skills: [
      { name: "Frontend Development" },
      { name: "Real-Time Collaboration" },
      { name: "UI/UX Design" },
      { name: "State Management" },
      { name: "Data Visualization" },
    ],
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    description:
      "A machine learning-powered application that analyzes job descriptions and resumes using GPT and TensorFlow, providing tailored feedback and suggestions for improvement.",
    icon: FaPython,
    technologies: ["Python", "TensorFlow", "GPT", "pandas", "scikit-learn"],
    githubLink: "https://github.com/universe-diamond",
    skills: [
      { name: "Machine Learning" },
      { name: "Natural Language Processing" },
      { name: "Data Analysis" },
      { name: "AI Integration" },
    ],
  },
  {
    id: 3,
    title: "Streamify - Video Streaming Platform",
    description:
      "A full-stack video streaming platform built with Node.js, Express, React, and MongoDB, supporting real-time video playback, user authentication, and scalable content delivery.",
    icon: FaNodeJs,
    technologies: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "TypeScript",
      "Socket.io",
      "Video.js",
    ],
    githubLink: "https://github.com/universe-diamond",
    skills: [
      { name: "Full-Stack Development" },
      { name: "Video Streaming" },
      { name: "Real-Time Communication" },
      { name: "Database Design" },
      { name: "Authentication" },
    ],
  },
];
