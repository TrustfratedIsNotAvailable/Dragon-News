import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Navbar from "../components/homeLayout/Navbar";

const AuthLayout = () => {
  return (
    <>
      <Toaster position="top-right" />

      <div className="bg-base-200 min-h-screen">
        <header className="w-11/12 mx-auto py-4">
          <Navbar />
        </header>
        <main className="w-11/12 mx-auto py-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
