"use client";
import React from "react";
import {
  SiGithub,
  SiTwitch,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiTrustpilot,
  SiDiscord,
  SiInstagram,
} from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useAnimate } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="bg-blue-950 px-4 h-screen text-white">
      <div className="mx-auto md:mx-20 pt-36 max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

export default Contact;

const ClipPathLinks: React.FC = () => {
  return (
    <div className="divide-y divide-neutral-600 border border-neutral-600">
      <div className="grid grid-cols-2 divide-x divide-neutral-600">
        <LinkBox Icon={SiGithub} href="#" />
        <LinkBox Icon={FaSquareXTwitter} href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-600">
        <LinkBox Icon={SiTrustpilot} href="#" />
        <LinkBox
          Icon={SiDiscord}
          href="
        https://discord.gg/GRmdaV4w"
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type Side = keyof typeof ENTRANCE_KEYFRAMES;

interface LinkBoxProps {
  Icon: React.ElementType;
  href: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>): Side => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
      boxShadow:
        "0 0 20px rgba(34, 197, 94, 0.8), 0 0 50px rgba(34, 197, 94, 0.5), 0 0 100px rgba(34, 197, 94, 0.3)", // Neon green glow
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
      boxShadow: "none", // Remove neon glow
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-green-600 text-white transition-transform duration-300 ease-out"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
