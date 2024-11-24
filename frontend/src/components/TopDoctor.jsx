import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {
  const { navigate, doctors } = useContext(AppContext);
  return (
    <div className="max-w-[80vw] mx-auto flex flex-col items-center my-7">
      <h1 className="text-3xl capitalize p-3">Top Doctors to Book</h1>
      <p className="mb-5 w-1/2">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-3">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border  border-blue-200 rounded-lg hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} alt="" className="bg-blue-50 rounded-t-lg" />
            <div className="p-3 flex gap-2 items-center">
              <p className="bg-green-500 w-3 h-3 rounded-full"></p>
              <p className="text-green-400">Available</p>
            </div>
            <p className="px-3 capitalize">{item.name}</p>
            <p className="px-3 capitalize pb-3">{item.speciality}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="my-7 border font-light px-12 py-2 rounded-full hover:bg-slate-100"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctor;
