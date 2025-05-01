import React from "react";
import { Outlet } from "react-router";
import Header from "../components/homeLayout/Header";
import LatestNews from "../components/homeLayout/LatestNews";
import Navbar from "../components/homeLayout/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

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
        {/*  *:border  */}
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default HomeLayouts;
