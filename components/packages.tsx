"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const Packages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-36 md:gap-6 p-10">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Basic />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Premium />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Mixed />
      </motion.div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const CardTemplate: React.FC<{
  imgSrc: string;
  altText: string;
  ringColor: string;
  shadowColor: string;
}> = ({ imgSrc, altText, ringColor, shadowColor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE) * 1;
    const rX = ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative h-[28rem] w-[22rem] mx-auto rounded-xl transition-transform hover:scale-105`}
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          className={`rounded-xl overflow-hidden ring-0 ${
            isHovered ? `ring-4 ${ringColor}` : ""
          } ring-offset-2 ring-offset-gray-800 shadow-xl ${
            isHovered ? `shadow-${shadowColor}/50` : ""
          }`}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src={imgSrc}
            width={350}
            height={200}
            alt={altText}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Basic = () => (
  <CardTemplate
    imgSrc="/assets/java.jpg"
    altText="JAVA"
    ringColor="ring-emerald-400"
    shadowColor="emerald-400"
  />
);

const Premium = () => (
  <CardTemplate
    imgSrc="/assets/bedrock.jpg"
    altText="BEDROCK"
    ringColor="ring-blue-500"
    shadowColor="blue-500"
  />
);

const Mixed = () => (
  <CardTemplate
    imgSrc="/assets/bedrock.jpg"
    altText="MIXED"
    ringColor="ring-purple-500"
    shadowColor="purple-500"
  />
);

export default Packages;
