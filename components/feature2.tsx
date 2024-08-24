"use client";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Feature2 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.7 0"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], [-490, 0]);
  return (
    <div className="h-screen text-white flex justify-center items-center">
      <m.div
        ref={targetRef}
        style={{
          scale: scale,
          opacity: opacity,
          x: x,
        }}
        className="w-72 py-8 ring-1 ring-emerald-600 px-6 rounded-xl shadow-lg bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10 rounded-xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="font-semibold text-xl mb-2">24/7 Support</div>
          <div className="text-sm text-gray-300">
            We are always here to assist you with any queries or issues. Our
            support team is available around the clock to ensure you have the
            best experience possible.
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Feature2;
