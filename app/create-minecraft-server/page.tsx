import Footer from "@/components/footer";
import MinecraftHero from "@/components/MinecraftHero";
import Nav from "@/components/nav";
import Plan from "@/components/plan";
import Prices from "@/components/prices";
import Pricing from "@/components/pricing";
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
      <Pricing />
      <Prices />
      <ServerConfigurator />
      <Plan />
      <Footer />
    </div>
  );
}
