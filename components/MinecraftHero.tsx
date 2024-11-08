"use client";
import React from "react";
import { motion as m } from "framer-motion";
import { LuSwords } from "react-icons/lu";
import { useState } from "react";
import StepModal from "@/components/modal";
import Link from "next/link";

const MinecraftHero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="h-[600px] bg-[url('/assets/minecraft-5.jpeg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 backdrop-blur-sm"></div>
      <div className="relative text-left flex flex-col mx-auto max-w-[1100px] justify-center h-full pl-8 md:pl-16">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Let&apos;s play{" "}
          <span className="bg-gradient-to-b from-purple-400 to-slate-300 text-transparent bg-clip-text">
            Minecraft
          </span>
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
          <Link href="/minecraft#plans">
            <button className="text-sm flex space-x-2 md:text-base bg-gray-950 hover:bg-purple-500 text-white font-bold py-1.5 px-6 rounded-full">
              <span className="text-xl pr-2">
                <LuSwords />
              </span>{" "}
              Create server
            </button>
          </Link>
          <StepModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </m.div>
      </div>
    </div>
  );
};

export default MinecraftHero;
