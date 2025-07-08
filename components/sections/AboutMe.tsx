"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from "../Styledpic";
import { FaLightbulb } from "react-icons/fa";
import { useScrollSection } from "@/hooks/use-scroll-section";

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div
      id="about"
      className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20"
      ref={ref}
    >
      <motion.div
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              🚀 I’m a passionate and results-driven full-stack developer with
              over 8 years of experience delivering modern, scalable software
              solutions. My expertise spans across artificial intelligence (AI),
              full-stack web development, and advanced video streaming
              technologies — allowing me to contribute to a wide range of
              projects, from intelligent automation systems to real-time media
              platforms.
            </p>
            <p>
              I specialize in Python and JavaScript (Vue.js, Node.js), and have
              hands-on experience with machine learning, deep learning, and data
              analytics. I’ve used tools such as TensorFlow, OpenCV, and
              scikit-learn to build smart, adaptive applications tailored to
              solve real-world problems.
            </p>
            <p>
              On the web side, I’ve developed full-stack systems using REST
              APIs, responsive front-end frameworks, and cloud-based deployment
              pipelines. I also bring deep experience in real-time video
              technologies like WebRTC, FFmpeg, RTMP, and HLS, enabling the
              creation of efficient, interactive, and scalable streaming
              platforms.
            </p>
            <p>
              I thrive on solving complex challenges, improving performance, and
              writing clean, maintainable code. Whether working independently or
              collaborating with cross-functional teams 🤝, I bring clear
              communication, adaptability, and a strong commitment to building
              impactful, user-centered technology.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <StyledPic />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
