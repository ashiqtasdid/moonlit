import Footer from "@/components/footer";
import MinecraftFeatures from "@/components/MinecraftFeatures";
import MinecraftHero from "@/components/MinecraftHero";
import Nav from "@/components/nav";
import Plan from "@/components/plan";
import Prices from "@/components/prices";
import ServerConfigurator from "@/components/ServerConfigurator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Minecraft Server | Moonlit Hosting",
  description:
    "Create your own Minecraft server with Moonlit Hosting. Get started with our basic Minecraft server hosting.",
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

export default function Minecraft() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <MinecraftHero />
      <div className="bg-blue-950 text-center pt-20">
        <div className="flex items-center justify-center space-x-4">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></span>
          <div className="text-gray-500 text-sm font-semibold tracking-wide">
          PRICES
          </div>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></span>
        </div>
      </div>
      <div id="plans">
      <Prices />
      </div>
      <MinecraftFeatures />
      <Plan />
      <Footer />
    </div>
  );
}
