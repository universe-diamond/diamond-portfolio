// components/SkillsGrid.tsx
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaBrain,
  FaRobot,
  FaCloud,
  FaLaptopCode,
  FaVideo,
  FaStream,
  FaAws,
  FaChartBar,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaServer,
  FaNetworkWired,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiTensorflow,
  SiPostgresql,
  SiPowerbi,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiWebrtc,
  SiFfmpeg,
  SiGraphql,
} from "react-icons/si";

const SkillsGrid = () => {
  const skills = useMemo(
    () => [
      { icon: <FaBrain />, name: "AI/ML" },
      { icon: <FaRobot />, name: "Deep Learning" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaDatabase />, name: "SQL/NoSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <FaCloud />, name: "Cloud" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaLaptopCode />, name: "Full Stack" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiScikitlearn />, name: "scikit-learn" },
      { icon: <SiOpencv />, name: "OpenCV" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <FaChartBar />, name: "Data Viz" },
      { icon: <SiPowerbi />, name: "Power BI" },
      { icon: <FaServer />, name: "Backend" },
      { icon: <FaNetworkWired />, name: "Networking" },
      { icon: <FaVideo />, name: "Video Processing" },
      { icon: <FaStream />, name: "Streaming" },
      { icon: <SiWebrtc />, name: "WebRTC" },
      { icon: <SiFfmpeg />, name: "FFmpeg" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiGraphql />, name: "GraphQL" },
    ],
    []
  );

  const skillsPerRow = 4;
  const rowsPerSlide = 3;
  const skillsPerSlide = skillsPerRow * rowsPerSlide;
  const totalSlides = Math.ceil(skills.length / skillsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startIdx = currentSlide * skillsPerSlide;
  const endIdx = startIdx + skillsPerSlide;
  const visibleSkills = skills.slice(startIdx, endIdx);

  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="flex flex-col items-center mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="mb-2 p-2 rounded-full bg-card text-primary disabled:opacity-40"
        aria-label="Previous"
      >
        <FaChevronUp />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
      >
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-card text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
          >
            <div className="text-2xl sm:text-3xl mb-1 text-primary">
              {skill.icon}
            </div>
            <p className="text-xs sm:text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-card text-primary disabled:opacity-40"
        aria-label="Next"
      >
        <FaChevronDown />
      </button>
      <div className="mt-2 text-xs text-muted-foreground">
        Slide {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  );
};

export default SkillsGrid;
