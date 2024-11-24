import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center justify-center gap-4 max-w-[80vw] mx-auto bg-blue-600 max-h-[95vh] my-7 p-7 pb-0 rounded-lg">
      <div className="flex flex-col gap-6 p-7">
        <h1 className="sm:text-5xl text-2xl font-semibold text-white sm:leading-[60px]">
          <b className="whitespace-nowrap">Book Appointment</b> <br /> With 100+
          Trusted Doctors
        </h1>
        <button
          onClick={() => {
            navigate("/login", scrollTo(0, 0));
          }}
          className="bg-white flex self-start px-6 py-2 rounded-full font-light hover:scale-110"
        >
          create account
        </button>
      </div>
      <div className="flex self-end">
        <img
          className=" hidden sm:block w-[300px] "
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
