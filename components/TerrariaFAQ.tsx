import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure you have this import setup
import Image from "next/image"; // Assuming you're using Next.js
import TerrariaImage from "@/public/assets/terraria-thumbnail.jpg"; // Update this with the correct path

const TerrariaFAQ = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-dark-900 text-white max-w-[1050px] mx-auto py-10 space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-1/2 space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-gray-400">
            <AccordionTrigger className="text-white">
              Why should I choose Moonlit to host my Terraria server?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Moonlit offers top-tier server hosting with high uptime, easy mod
              support, and a dedicated team for troubleshooting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-gray-400">
            <AccordionTrigger className="text-white">
              Do you fully support tModLoader and TShock?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Yes, we offer full support for tModLoader and TShock, allowing you
              to customize your server experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-gray-400">
            <AccordionTrigger className="text-white">
              For what platforms can I host a Terraria server?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Terraria servers hosted on Moonlit can support all major platforms
              including PC, Mac, and Linux.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-gray-400">
            <AccordionTrigger className="text-white">
              How many friends can I play with on a Terraria server?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              You can invite up to 16 friends to join your Terraria server for a
              collaborative gaming experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-gray-400">
            <AccordionTrigger className="text-white">
              Can I play Terraria in singleplayer instead?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Yes, Terraria supports both singleplayer and multiplayer modes,
              allowing you to enjoy the game in either format.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-lg h-auto">
          <Image
            src={TerrariaImage}
            alt="Terraria gameplay"
            className="rounded-lg shadow-lg object-cover"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default TerrariaFAQ;
