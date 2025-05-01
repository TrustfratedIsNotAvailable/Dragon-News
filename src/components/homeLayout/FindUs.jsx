import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <p className="text-primary font-semibold mb-4">Find Us On</p>
      <div className="join join-vertical w-full *:p-5 *:hover:bg-base-content">
        <button className="btn join-item text-accent bg-transparent justify-start"><FaFacebook size={20} className="text-blue-400 mr-2"/>Facebook</button>
        <button className="btn join-item text-accent bg-transparent justify-start"><FaTwitter size={20} className="text-blue-400 mr-2"/>Twitter</button>
        <button className="btn join-item text-accent bg-transparent justify-start"><FaInstagram size={20} className="text-pink-600 mr-2"/>Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
