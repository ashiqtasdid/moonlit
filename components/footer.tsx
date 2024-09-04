import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 max-w-[1650px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:justify-between text-white mx-5 md:mx-10 space-y-5 md:space-y-0">
        <div className="flex space-x-3 items-center">
          <Image src="/assets/logo.png" width={50} height={50} alt="logo" />
          <span className="text-xl font-bold">Moonlit Hosting</span>
        </div>
        <div className="text-center">
          <ul className="flex flex-wrap justify-center md:justify-start text-sm font-semibold text-gray-400 space-x-3">
            <li className="hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/privacy">Privacy</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center md:justify-end text-xl font-semibold text-gray-400 space-x-3">
            <li className="hover:text-white">
              <a
                href="
              https://moonlitservers.com/discord"
                target="_blank"
              >
                <FaDiscord />
              </a>
            </li>

            <li className="hover:text-white">
              <a href="https://moonlitservers.com/github">
                <FaGithub />
              </a>
            </li>
            <li className="hover:text-white">
              <a href="https://moonlitservers.com/trustpilot">
                <SiTrustpilot />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-gray-700 mx-5 pt-5 md:mx-10 text-center md:text-left text-sm font-semibold">
          © 2024 Moonlit Hosting. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
