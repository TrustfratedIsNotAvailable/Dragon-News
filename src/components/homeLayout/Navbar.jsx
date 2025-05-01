import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <div className="flex gap-3 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn w-[100px] btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
