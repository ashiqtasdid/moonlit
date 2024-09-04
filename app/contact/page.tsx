import Nav from "@/components/nav";
import Footer from "@/components/footer";
import InfoGrid from "@/components/infoGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Moonlit Hosting",
  description:
    "Contact Moonlit Hosting for any questions or concerns. We offer a wide range of hosting plans to fit your needs.",
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

export default function Contact() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <div className="py-36 text-white bg-blue-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold">How can we help?</h1>
          <p className="pt-5 font-semibold text-gray-300 text-lg">
            Any questions or concerns? Don&apos;t hesitate to get in touch!
          </p>
        </div>
      </div>
      <InfoGrid/>
 
      <Footer />
    </div>
  );
}
