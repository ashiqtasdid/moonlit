import Footer from "@/components/footer";
import TerrariaHero from "@/components/TerrariaHero";
import Nav from "@/components/nav";
import Plan from "@/components/TerrariaPlan";
import TerrariaPrices from "@/components/TerrariaPrices";
import Card from "@/components/card";
import type { Metadata } from "next";
import TerrariaFAQ from "@/components/TerrariaFAQ";

export const metadata: Metadata = {
  title: "Create Terraria Server | Moonlit Hosting",
  description:
    "Create your own Terraria server with Moonlit Hosting. Get started with our basic Terraria server hosting.",
  keywords: [
    "free minecraft hosing",
    "hosting",
    "terraria",
    "server",
    "moonlit hosting",
    "moonlit",
    "free",
    "terraria server",
    "terraria hosting",
    "terraria server hosting",
    "terraria server",
    "terraria server free",
    "terraria server free hosting",
  ],
};

export default function terraria() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <TerrariaHero />
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
      <TerrariaPrices />
      </div>
      <Plan />
      <TerrariaFAQ/>
      <Card />
      <Footer />
    </div>
  );
}
