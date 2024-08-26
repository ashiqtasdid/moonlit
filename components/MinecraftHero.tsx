"use client";
import React from "react";
import { motion as m } from "framer-motion";
import { LuSwords } from "react-icons/lu";
import { useState } from "react";
import StepModal from "@/components/modal";

const MinecraftHero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="h-screen bg-[url('/assets/minecraft-5.jpeg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 backdrop-blur-sm"></div>
      <div className="relative text-left flex flex-col justify-center h-full pl-8 md:pl-16">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Let&apos;s play <span className="text-emerald-400">Minecraft</span>
        </m.h1>
        <m.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 pt-6 text-xl md:text-2xl font-medium"
        >
          Multiplayer worlds hosted on the best hardware on the market
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-10"
        >
          <button
            onClick={handleOpenModal}
            className="text-sm flex space-x-2 md:text-base bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-1.5 px-6 rounded-full"
          >
            <span className="text-xl pr-2">
              <LuSwords />
            </span>{" "}
            Create server
          </button>
          <StepModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </m.div>
      </div>
    </div>
  );
};

export default MinecraftHero;
