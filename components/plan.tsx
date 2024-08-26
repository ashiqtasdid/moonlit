import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";

const Plan = () => {
  return (
    <div className="text-white pb-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-6 md:mx-20">
        <div className="flex flex-col items-start">
          <h1 className="font-semibold pt-7 text-xl">
            Included with <br />
            <span className="text-blue-400">Every Plan</span>
          </h1>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>99.95% uptime SLA</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>5</span>
            <SiTrustpilot className="text-blue-400 text-xl mx-1" />
            <span>support</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>Instant deployment</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>Upgrade at any time</span>
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-6 md:mx-20 pt-5">
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-xl invisible">
            Included with <br />
            <span className="text-blue-400">Every Plan</span>
          </h1>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>Off-site backups</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>Additional ports</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>MySQL databases</span>
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="flex font-semibold space-x-2">
            <RiVerifiedBadgeFill className="text-blue-400 mt-0.5" />
            <span>24/7 monitoring</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Plan;
