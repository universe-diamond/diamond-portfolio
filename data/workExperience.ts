// data/workExperience.ts
import {
  FaBriefcase,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaAws,
  FaReact,
  FaChalkboardTeacher,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiPowerbi,
  SiTensorflow,
  SiScikitlearn,
  SiAzuredevops,
  SiMongodb,
  SiFastapi,
  SiNextdotjs,
  SiSocketdotio,
  SiMicrosoftazure,
  SiCsharp,
  SiDotnet,
  SiLaravel,
  SiAngular,
  SiVuedotjs,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiStyledcomponents,
  SiTailwindcss,
  SiMysql,
  SiCodeigniter,
  SiRabbitmq,
  SiNginx,
  SiWebpack,
  SiRedux,
  SiGraphql,
  SiHiveBlockchain,
} from "react-icons/si";
import { PiMathOperationsFill } from "react-icons/pi";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Spinnr Inc",
    position: "Senior Full Stack Developer",
    duration: "06/2023 - 05/2024",
    year: 2023,
    description: [
      "Developed and maintained a Python backend server using FastAPI, implementing new features to enhance the application's functionality.",
      "Integrated machine learning models for predictive analytics and personalized user experiences, leveraging libraries such as TensorFlow and scikit-learn.",
      "Managed infrastructure using Azure and MongoDB, ensuring the scalability, reliability, and security of the application.",
      "Constructed CI/CD pipelines using Docker to run tests and push to Azure Container Registry, deploying the server using Azure Web App Service.",
      "Collaborated with data scientists to integrate AI/ML models into the backend, enabling advanced features such as recommendation systems and anomaly detection.",
      "Built Next.js web applications and a Socket PubSub server using Node.js, hosted on Microsoft Azure.",
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Azure", icon: SiMicrosoftazure },
    ],
    logo: "/logos/concordia-university.png",
  },
  {
    company: "Shopee Vietnam",
    position: "Senior Full Stack Engineer",
    duration: "07/2022 - 06/2023",
    year: 2022,
    description: [
      "Designed and developed e-commerce websites.",
      "Developed websites using frameworks like Angular, Vue for the front end, and ASP.NET and Laravel for the back end.",
      "Developed scalable and secure web applications using the latest technologies and best practices.",
      "Led a team of web developers to successfully launch a high-traffic e-commerce website.",
      "Updated the company's website landing page and developed full-stack web applications using the latest technologies.",
      "Used technologies such as Blockchain.",
    ],
    skills: [
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: ".NET", icon: SiDotnet },
      { name: "Laravel", icon: SiLaravel },
    ],
    logo: "/logos/ia-flow.png",
  },
  {
    company: "NCC Plus Vietnam",
    position: "Senior Full Stack Developer",
    duration: "10/2020 - 05/2022",
    year: 2020,
    description: [
      "Designed and developed the websites using framework such as MERN Stack , React, Express, Next and Laravel.",
      "Developed the website using Python frameworks such as Django and Flask.",
      "Designed interface using the modern themes such as styled component and Tailwind CSS.",
      "Used technologies such as VoIP.",
      "Develop and iterate on new features to deliver amazing experiences.",
      "Work with other teams to build a technical ecosystem that enables high velocity, low-waste development.",
      "Used databases such as MySQL, MongoDB, and PostgreSQL.",
      "Developed, designed and architected several websites and web applications which I maintain on a daily basis.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Django", icon: SiDjango },
      { name: "MongoDB", icon: SiMongodb },
    ],
    logo: "/logos/ia-flow.png",
  },
  {
    company: "CO-WELL Asia",
    position: "Web Developer",
    duration: "04/2018 - 09/2020",
    year: 2018,
    description: [
      "Responsive Web designing using Bootstrap HTML, CSS and JavaScript.",
      "Developed websites using frameworks such as Laravel and CodeIgniter.",
      "Used databases such as MySQL and MongoDB.",
      "Customized themes to meet clients' requirements.",
      "Designed and developed websites using frameworks such as CodeIgniter and Laravel.",
      "Increased web traffic and content engagement by 30%.",
    ],
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Laravel", icon: SiLaravel },
      { name: "CodeIgniter", icon: SiCodeigniter },
    ],
    logo: "/logos/ia-flow.png",
  },
  {
    company: "S3Corp (Software Solution Services)",
    position: "Front End Developer",
    duration: "04/2017 - 03/2018",
    year: 2017,
    description: [
      "Used Nginx as a proxy to interact with Node.js services and REST API.",
      "Used NPM packages like babel, hot-loader, webpack, node-sass.",
      "Developed an isomorphic React app using Node.js and React.",
      "Build MVC architecture using React.js components including modules, controllers, templates, built-in and custom directives, services and filters.",
      "Developed high-load WebSocket Server distributed on different machines connected via Rabbit MQ.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Webpack", icon: SiWebpack },
      { name: "RabbitMQ", icon: SiRabbitmq },
    ],
    logo: "/logos/ia-flow.png",
  },
];
