import React from "react";
import { Outlet } from "react-router";
import Header from "../components/homeLayout/Header";
import LatestNews from "../components/homeLayout/LatestNews";
import Navbar from "../components/homeLayout/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import bg from "../assets/bg.png";

const HomeLayouts = () => {
  return (
    <>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-5">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-5">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-2 self-start">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-2 self-start">
          <RightAside />
          <img src={bg} alt="bg" srcset="" className="w-full h-auto" />
        </aside>
      </main>
    </>
  );
};

export default HomeLayouts;
