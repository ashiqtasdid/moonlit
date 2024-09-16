"use client";

import Footer from "@/components/footer";
import Nav from "@/components/nav";
import React from "react";
import { useEffect, useState } from "react";

const Discord = () => {
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://moonlitservers.com";
    }, 5000);
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, []);
  return (
    <div>
      <Nav />
      <div className="h-screen mx-auto flex bg-blue-950 text-white justify-center items-center align-middle text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
          <p className="text-xl">
            You will be redirected in {counter} seconds.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discord;
