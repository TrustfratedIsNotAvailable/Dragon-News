import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-4 bg-base-200 p-3">
      <p className="btn w-[80px] btn-secondary">Latest</p>
      <Marquee pauseOnHover speed={50}>
        <p className="mx-4">🧠 OpenAI announces GPT-5 preview with advanced reasoning and real-time search capabilities.</p>
        <p className="mx-4">📱 Google Pixel 9 leaks show under-display camera and AI-driven photo editing.</p>
        <p className="mx-4">🔐 Microsoft warns of new phishing attack using AI-generated emails.</p>
        <p className="mx-4">🚀 SpaceX to launch 100th Starlink mission of the year this weekend.</p>
        <p className="mx-4">💻 Apple may ditch M3 MacBooks in favor of M4 chips by early 2026.</p>
        <p className="mx-4">🌐 Meta introduces AI-powered moderation tools for Instagram and Threads.</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
