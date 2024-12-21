import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../contexts/AppContext";

const NavBar = () => {
  const { logOut } = useContext(AppContext);
  return (
    <div className="border-b h-[70px]">
      <div className="flex justify-between mx-4 sm:mx-[5%] p-3">
        <div className="flex gap-4">
          <img src={assets.admin_logo} alt="" className="w-32" />
          <h1>admin</h1>
        </div>
        <button
          onClick={logOut}
          className="capitalize bg-blue-500 text-white py-1 px-6 rounded-lg"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
