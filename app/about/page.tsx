import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Card from "@/components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Moonlit Hosting",
  description:
    "Moonlit Hosting is a hosting company aimed to provide the best hosting experience for Minecraft servers. We offer a wide range of hosting plans to fit your needs.",
  keywords: [
    "free minecraft hosing",
    "hosting",
    "minecraft",
    "server",
    "moonlit hosting",
    "moonlit",
    "free",
    "minecraft server",
    "minecraft hosting",
    "minecraft server hosting",
    "minecraft server",
    "minecraft server free",
    "minecraft server free hosting",
  ],
};
export default function About() {
  return (
    <div className="relative bg-blue-950 text-white">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center h-[500px] bg-cover bg-center text-center"
        style={{
          backgroundImage: "url(/assets/about.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950"></div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-0">
          <span className="bg-gradient-to-b from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Moonlit
          </span>
        </h1>
        <p className="mt-4 text-lg md:mx-36 md:text-xl lg:text-2xl max-w-3xl mx-auto relative z-0">
          Providing affordable, high-performance game servers to customers
          around the world
        </p>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-20 bg-blue-950 text-center">
        <h2 className="text-3xl font-semibold">Our mission</h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-left max-w-4xl mx-auto text-gray-400">
          At Moonlit, our mission is to elevate the gaming experience by
          providing top-tier Minecraft hosting solutions that are reliable,
          scalable, and accessible to everyone. We are committed to delivering
          an infrastructure that not only meets the demands of today&apos;s
          gamers but also anticipates the needs of tomorrow.
          <br />
          <br />
          We believe in creating a platform where every server owner, regardless
          of their budget or community size, can thrive. Our focus on innovation
          ensures that our technology remains at the forefront of the industry,
          offering seamless performance and uninterrupted gameplay.
          <br />
          <br />
          We’re more than just a hosting provider; we&apos;re your partners in
          success. Our dedicated support team is here to guide you through every
          challenge, helping you build and sustain vibrant communities. At
          Moonlit, we take pride in the trust you place in us, and we work
          tirelessly to uphold it with exceptional service and an unwavering
          commitment to quality.
          <br />
          <br />
          Join us at Moonlit, where your gaming community isn&apos;t just hosted—it&apos;s
          empowered. Together, we can create a world where every player finds
          their place, and every server owner has the tools to succeed..
        </p>
      </div>
      <Card />
      <Footer />
    </div>
  );
}
