"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { FaDiscord, FaStar } from "react-icons/fa";
import { SiLivechat } from "react-icons/si";
import { TbDeviceDesktopExclamation } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InfoGrid: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (message === "" || email === "") {
        setLoading(false);
        toast.error("Please enter both email and message");
        return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ email, subject, message }),
      });
      const data = await response.json();

      setLoading(false);

      if (data && data.id) {
        toast.success(`Thank you for contacing us! We will get back to you soon!`);
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Apologies! Please try again.");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Ooops! Unfortunately, some error has occurred.");
    }
  };

  return (
    <div className="bg-blue-950 mx-auto max-w-7xl text-gray-200 py-36 px-6">
      <ToastContainer theme="dark" />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="https://moonlitservers.com/discord" target="_blank">
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-blue-500 py-[30px] px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <FaDiscord className="text-7xl mr-4 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Discord</h3>
                <p className="text-sm text-gray-300">
                  Open a ticket in our Discord server, or ask for help from our
                  experienced community of server owners.
                </p>
              </div>
            </div>
          </Link>
          <Link href="#">
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
          <Link href="http://billing.moonlitservers.com/index.php?rp=/knowledgebase">
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-purple-500 py-[30px] px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <TbDeviceDesktopExclamation className="text-7xl mr-4 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Helpdesk</h3>
                <p className="text-sm text-gray-300">
                  Browse the range of articles we&apos;ve written to help you
                  run your game server through our control panel
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://moonlitservers.com/trustpilot">
            <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-green-500 py-5 px-5 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center">
              <FaStar className="text-7xl mr-4 text-green-500" />
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
              XXX XXX ROAD <br />
              NewPortLand, XXXXX <br />
              United Kingdom <br />
              <br />A registered company in the UK with no.{" "}
              <strong>XXXXX</strong>
              <br />
              Registered for VAT in the UK with no. <strong>XXXXXXXXX</strong>
              <br />
              ICO data protection ref. <strong>XXXXXXXX</strong>
              <br />
              <br />
              Moonlit is a UK-based game server hosting provider
            </p>
          </div>
          <div className="bg-blue-900 font-semibold p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
            <form method="post" onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm" htmlFor="email">
                E-mail address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md mb-4"
                placeholder="you@yourmail.com"
              />

              <label className="block mb-2 text-sm" htmlFor="subject">
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md mb-4"
                placeholder="I need a custom EPIC server"
              />
              <label className="block mb-2 text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md"
                placeholder="Take my money and gimme a server"
                rows={4}
              />
              <button
                type="submit"
                className={`mt-4 ${
                  loading ? "bg-gray-500" : "bg-gray-950"
                }bg-gray-950 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
