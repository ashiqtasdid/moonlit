import Link from "next/link";
import React from "react";
import { FaDiscord, FaStar } from "react-icons/fa";
import { SiLivechat } from "react-icons/si";
import { TbDeviceDesktopExclamation } from "react-icons/tb";

const InfoGrid: React.FC = () => {
  return (
    <div className="bg-blue-950 mx-auto max-w-7xl text-gray-200 py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href={"https://discord.gg/GRmdaV4w"} target="_blank">
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-purple-500 py-[30px] px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <FaDiscord className="text-7xl mr-4 text-purple-500" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Discord</h3>
                <p className="text-sm text-gray-300">
                  Open a ticket in our Discord server, or ask for help from our
                  experienced community of server owners.
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-yellow-500 py-[30px] px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <SiLivechat className="text-7xl mr-4 text-yellow-400" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Live chat</h3>
                <p className="text-sm text-gray-300">
                  Click the chat button in the bottom-right of any of our
                  websites to start a conversation with us
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-green-500 py-[30px] px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <TbDeviceDesktopExclamation className="text-7xl mr-4 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Helpdesk</h3>
                <p className="text-sm text-gray-300">
                  Browse the range of articles we&apos;ve written to help you
                  run your game server through our control panel
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-red-500 py-5 px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <FaStar className="text-7xl mr-4 text-yellow-500" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Trustpilot</h3>
                <p className="text-sm text-gray-300">
                  Explore reviews from our satisfied customers on Trustpilot. We
                  pride ourselves on transparency and customer satisfaction—your
                  feedback helps us improve and grow.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 font-semibold md:grid-cols-2 gap-10 mt-8">
          <div className="bg-blue-900 p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Company Information</h3>
            <p className="text-sm">
              Moonlit Hosting Ltd <br />
              124 City Road <br />
              London, EC1V 2NJ <br />
              United Kingdom <br />
              <br />A registered company in the UK with no.{" "}
              <strong>14830432</strong>
              <br />
              Registered for VAT in the UK with no. <strong>441876868</strong>
              <br />
              ICO data protection ref. <strong>ZB549220</strong>
              <br />
              <br />
              Lilypad is a UK-based game server hosting provider
            </p>
          </div>
          <div className="bg-blue-900 font-semibold p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
            <form>
              <label className="block mb-2 text-sm" htmlFor="email">
                E-mail address
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md mb-4"
                placeholder="you@yourmail.com"
              />
              <label className="block mb-2 text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md"
                placeholder="Take my money and gimme a server"
                rows={4}
              />
              <button
                type="submit"
                className="mt-4 bg-gray-900 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
