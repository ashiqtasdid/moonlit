import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 ">
      <div className="flex flex-col md:flex-row items-center md:justify-between text-white mx-5 md:mx-10 space-y-5 md:space-y-0">
        <div className="flex space-x-3 items-center">
          <Image src="/assets/logo.png" width={50} height={50} alt="logo" />
          <span className="text-xl font-bold">Moonlit Hosting</span>
        </div>
        <div className="text-center">
          <ul className="flex flex-wrap justify-center md:justify-start text-sm font-semibold text-gray-400 space-x-3">
            <li>Home</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center md:justify-end text-xl font-semibold text-gray-400 space-x-3">
            <li>
              <FaDiscord />
            </li>
            <li>
              <FaSquareXTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <SiTrustpilot />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-gray-700 mx-5 md:mx-10 text-center md:text-left text-sm font-semibold">
          © 2024 Moonlit Hosting. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
