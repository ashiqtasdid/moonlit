"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: scrolled ? 1 : 1 });
  }, [scrolled, controls]);

  return (
    <motion.nav
      className={`py-3 w-full fixed top-0 z-10 text-white ${scrolled ? "backdrop-filter backdrop-blur-md border-b-2 border-gray-700" : "bg-transparent"} transition-all duration-300`}
      animate={controls}
    >
      <div className="flex justify-between items-center mx-10">
        <div className="flex py-1 space-x-5 items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image src="/assets/logo.png" width={50} height={50} alt="logo" />
            </motion.div>
          </Link>
          <div className="text-lg font-semibold">Moonlit Hosting</div>
        </div>

        <div className="hidden md:flex space-x-5">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/servers" className="font-semibold">
            Pricing
          </Link>
          <Link href="/blog" className="font-semibold">
            Blog
          </Link>
          <Link href="/about" className="font-semibold">
            About
          </Link>
          <Link href="/contact" className="font-semibold">
            Contact
          </Link>
        </div>

        <div className="flex space-x-3 items-center">
          <div className="hidden md:flex space-x-3">
            <button className="bg-white font-semibold text-sm text-black px-2.5 py-1.5 rounded-2xl">
              Log in
            </button>
            <button className="bg-emerald-700 text-sm font-semibold text-white px-2.5 py-1.5 rounded-2xl">
              Create server
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-blue-950 z-50 flex flex-col justify-between items-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-center py-6">
              <Link href="/" onClick={toggleMenu}>
                <Image src="/logo.svg" width={50} height={50} alt="logo" />
              </Link>
            </div>

            <ul className="flex flex-col space-y-8 text-center">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servers" onClick={toggleMenu}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="w-full flex justify-center py-6">
              <button
                className="bg-emerald-700 text-sm text-white px-6 py-2 rounded-2xl"
                onClick={toggleMenu}
              >
                Create server
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;