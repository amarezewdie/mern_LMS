import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useParams } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[20%] border-r custom-height p-4 pr-0 pl-0 flex flex-col gap-4">
      <NavLink
        to={"/admin/dashboard"}
        className="flex gap-3 p-3 capitalize flex-col sm:flex-row"
      >
        <img src={assets.home_icon} alt="" className="min-w-7 max-w-[20px]" />
        <p>dashboard</p>
      </NavLink>
      <NavLink
        to={"/admin/appointment"}
        className="flex gap-4 p-3 capitalize flex-col sm:flex-row"
      >
        <img
          src={assets.appointment_icon}
          alt=""
          className="min-w-7 max-w-[20px]"
        />
        <p>appointment</p>
      </NavLink>
      <NavLink
        to={"/admin/add-doctor"}
        className="flex gap-3 p-3 capitalize flex-col sm:flex-row"
      >
        <img src={assets.add_icon} alt="" className="min-w-7 max-w-[20px]" />
        <p>add doctor</p>
      </NavLink>
      <NavLink
        to={"/admin/list-doctor"}
        className="flex gap-3 p-3 capitalize flex-col sm:flex-row"
      >
        <img src={assets.people_icon} alt="" className="min-w-7 max-w-[20px]" />
        <p>doctor list</p>
      </NavLink>
      <NavLink
        to={`/updateRole/`}
        className="flex gap-3 p-3 capitalize flex-col sm:flex-row"
      >
        <img src={assets.people_icon} alt="" className="min-w-7 max-w-[20px]" />
        <p>update role</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
