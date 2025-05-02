import React, { use } from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { currentUser, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.error("Logout successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <ul className="flex gap-3 text-accent">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/career"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : ""
            }
          >
            Career
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src={user} alt="" />
        {currentUser ? (
          <button onClick={handleLogout} className="btn w-[100px] btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn w-[100px] btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
