import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="w-[350px] mx-auto">
      <img src={logo} alt="" className="mt-10 mb-3" />
      <p className="text-accent text-center mb-1.5">
        Journalism Without Fear or Favour
      </p>
      {/* <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p> */}
      <p className="text-accent text-center font-medium">
        <span className="text-primary">{format(new Date(), "EEEE, ")}</span>
        {format(new Date(), "MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
