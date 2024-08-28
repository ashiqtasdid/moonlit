import Link from 'next/link';
import React from 'react';

const InfoGrid: React.FC = () => {
  return (
    <div className="bg-blue-950 text-gray-200 py-36 p-6 flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href={'https://discord.gg/GRmdaV4w'} target='_blank'>
          <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-purple-500 py-5 px-5 p-4 rounded-md shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2">Discord</h3>
            <p className="text-sm">Open a ticket in our Discord server, or ask for help from our experienced community of server owners</p>
          </div>
            </Link>
            <Link href={'#'}>
                      <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-yellow-500 py-5 px-5 p-4 rounded-md shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2">Trustpilot</h3>
            <p className="text-sm">Explore reviews from our satisfied customers on Trustpilot. We pride ourselves on transparency and customer satisfaction—your feedback helps us improve and grow.</p>
          </div>
            </Link>
            <Link href={'#'} >
          <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-green-500 py-5 px-5 p-4 rounded-md shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2">Twitter</h3>
            <p className="text-sm">Follow us on Twitter for real-time updates, tips, and insights. Stay informed about the latest features, maintenance schedules, and community events.</p>
          </div>
            </Link>
            <Link href={'#'}>
          <div className="bg-blue-900 font-semibold hover:ring-2 hover:ring-red-500 py-5 px-5 p-4 rounded-md shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2">Github</h3>
            <p className="text-sm">Visit our GitHub repository to explore our open-source projects, contribute to the codebase, or report issues. We&apos;re committed to collaborating with the developer community.</p>
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
              United Kingdom <br /><br />
              A registered company in the UK with no. <strong>14830432</strong><br />
              Registered for VAT in the UK with no. <strong>441876868</strong><br />
              ICO data protection ref. <strong>ZB549220</strong><br /><br />
              Lilypad is a UK-based game server hosting provider
            </p>
          </div>
          <div className="bg-blue-900 font-semibold p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
            <form>
              <label className="block mb-2 text-sm" htmlFor="email">E-mail address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md mb-4"
                placeholder="you@yourmail.com"
              />
              <label className="block mb-2 text-sm" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full bg-gray-700 text-gray-200 p-2 rounded-md"
                placeholder="Take my money and gimme a server"
                rows={4}
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoGrid;
