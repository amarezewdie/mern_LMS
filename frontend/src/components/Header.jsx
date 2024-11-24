import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className=" flex flex-col sm:flex sm:flex-row justify-center items-center gap-5 bg-blue-800 sm:max-w-[80vw] mx-auto my-5 rounded-lg sm:h-[90vh] p-7 pb-0">
      {/* ....left side ........ */}
      <div className="flex flex-col  p-8 pl-16   gap-10 ">
        <p className="sm:text-6xl text-2xl capitalize whitespace-nowrap text-white  font-semibold sm:leading-[60px]">
          book appointment <br /> with trusted <br /> doctor
        </p>
        <div className=" flex flex-col sm:flex gap-3">
          <img className="max-w-[200px]" src={assets.group_profiles} alt="" />
          <p className="text-sm text-white">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#specialty"
          className="flex gap-3 max-w-[200px] bg-white rounded-full  px-5 py-2 hover:scale-110"
        >
          <button className="capitalize whitespace-nowrap">
            book appointment
          </button>
          <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/*............ right side .......... */}
      <div className="flex self-end">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
