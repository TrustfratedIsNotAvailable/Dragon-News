import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the React News Portal</h1>
        <p className="text-gray-600 mb-6">
          Stay informed with the latest updates, trending news, and insightful articles curated just for you.
        </p>
        <a
          href="/category/0"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Browse News
        </a>
      </div>
    </div>
  );
};

export default Home;
