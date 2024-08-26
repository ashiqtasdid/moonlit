"use client";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative h-48 w-full max-w-4xl rounded-xl mx-auto my-12 md:my-36 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/assets/minecraft-4.jpeg')" }}
      >
        <div className="absolute inset-0 bg-blue-950 bg-opacity-40 rounded-xl"></div>
      </div>
      <div className="relative flex flex-col md:flex-row items-center pt-4 md:pb-0 justify-between px-4 md:px-6 h-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Get a server
          </h1>
          <h2 className="text-xl md:text-2xl -my-1 md:-my-3 font-bold text-white mb-4">
            <span className="text-white pr-1 md:pr-2">in</span>Seconds
          </h2>
        </div>
        <div className="flex-none pb-4 md:pb-0 md:mt-0">
          <Link href="/create-minecraft-server">
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <button className="relative bg-white bg-opacity-20 border border-white rounded-3xl text-white py-2 px-6 shadow-lg ring-1 ring-white ring-opacity-50 hover:ring-opacity-100 transition duration-300">
      <span className="relative z-10">Get Started</span>
    </button>
  );
};

export default Banner;
