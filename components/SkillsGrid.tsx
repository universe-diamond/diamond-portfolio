// components/SkillsGrid.tsx
import React, { useMemo, useState } from "react";
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
  FaChalkboardTeacher,
  FaChartBar,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaServer,
  FaNetworkWired,
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
} from "react-icons/si";

const SkillsGrid = () => {
  const [expanded, setExpanded] = useState(false);
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
    ],
    []
  );

  // Show 8 skills (2 lines of 4) if not expanded
  const visibleSkills = expanded ? skills : skills.slice(0, 8);

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
    <>
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
      {!expanded && skills.length > 8 && (
        <div className="flex justify-center mb-6">
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
            onClick={() => setExpanded(true)}
          >
            Read more
          </button>
        </div>
      )}
      {expanded && skills.length > 8 && (
        <div className="flex justify-center mt-2 mb-6">
          <button
            className="px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition-colors"
            onClick={() => setExpanded(false)}
          >
            Show less
          </button>
        </div>
      )}
    </>
  );
};

export default SkillsGrid;
