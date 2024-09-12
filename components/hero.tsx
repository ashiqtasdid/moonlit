"use client";
import React from "react";
import { motion as m } from "framer-motion";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[600px] bg-[url('/assets/background.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 backdrop-blur-sm"></div>
      <div className="relative text-center align-middle flex flex-col justify-center h-full">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white md:mx-0 text-6xl font-semibold"
        >
          Craft, Create, Conquer with <span className="bg-gradient-to-b from-purple-400 to-slate-300 text-transparent bg-clip-text">Moonlit</span>
        </m.h1>
        <m.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-300 md:mx-72 pt-10 text-2xl font-medium"
        >
          Affordable game server hosting with unrivalled performance
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-5"
        >
          <Link href={"#play"}>
            <button className="text-sm bg-gray-950 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full mt-5">
              Our Servers
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="text-sm bg-gray-500 ring-2 ring-gray-600 text-white bg-opacity-50 hover:ring-gray-400 font-bold py-2 px-4 rounded-full mt-5 ml-5">
              About
            </button>
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default Hero;
