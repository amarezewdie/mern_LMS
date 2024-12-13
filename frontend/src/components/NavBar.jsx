import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const { navigate, token, setToken } = useContext(AppContext);
  const [showMenu,setShowMenu]=useState(true)
  return (
    <div className="flex justify-between items-center  p-4 border-b border-black">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="w-36"
      />
      <ul className=" hidden md:flex gap-6 uppercase list-none  font-semibold">
        <NavLink to={"/"} className={"flex flex-col"}>
          <li>home</li>
          <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
        </NavLink>
        <NavLink to={"/doctors"} className={"flex flex-col"}>
          <li>all doctor</li>
          <hr className=" hidden w-16 bg-blue-800 h-[2px] self-center" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col"}>
          <li>about</li>
          <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col"}>
          <li>contact</li>
          <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
        </NavLink>
      </ul>
      <div className="flex gap-4">
        {token ? (
          <div className="flex gap-4 items-center  group relative cursor-pointer">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <div className="hidden group-hover:block absolute right-0 top-0 p-8 pt-12">
              <div className="flex flex-col whitespace-nowrap capitalize border gap-3 p-2 bg-gray-100">
                <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-blue-500 font-light"
                >
                  my profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-blue-500 font-light"
                >
                  my Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-blue-500 font-light"
                >
                  logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-400 text-white font-light p-2 px-5 rounded-full capitalize "
          >
            create account
          </button>
        )}
        
        {/* ................ mobile view ....................................... */}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden"
        />
        <div
          className={`${
            showMenu ? "fixed z-40 w-full " : "w-0 h-0"
          } md:hidden right-0 top-0 bottom-0 left-0 bg-white transition-all `}
        >
          <div className="flex justify-between my-5 border-b p-3 mx-4">
            <img src={assets.logo} alt="" className="w-28"/>
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="w-6 h-6 transition-all "
            />
          </div>
          <div>
           { showMenu &&(
            <ul className=" flex flex-col md:hidden gap-6 uppercase list-none items-center font-semibold">
              <NavLink
                onClick={() => setShowMenu(false)}
                to={"/"}
                className={"flex flex-col  "}
              >
                <li>home</li>
                <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to={"/doctors"}
                className={"flex flex-col "}
              >
                <li>all doctor</li>
                <hr className=" hidden w-16 bg-blue-800 h-[2px] self-center" />
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to={"/about"}
                className={"flex flex-col "}
              >
                <li>about</li>
                <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
              </NavLink>
              <NavLink
                onClick={() => setShowMenu(false)}
                to={"/contact"}
                className={"flex flex-col "}
              >
                <li>contact</li>
                <hr className=" hidden w-16 bg-blue-800 h-[2px]  self-center" />
              </NavLink>
            </ul>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
