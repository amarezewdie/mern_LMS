import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialtyMenu = () => {
  return (
    <div
      id="specialty"
      className="flex flex-col items-center justify-center gap-4"
    >
      <p className="font-semibold text-2xl capitalize">Find by Speciality</p>
      <p className="sm:w-1/3 text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex items-center justify-center gap-4 w-full overflow-scroll ">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            className=" flex flex-col flex-shrink-0 hover:translate-y-[-8px] gap-3 transition-all duration-500 p-3"
          >
            <img src={item.image} alt="" className="w-24" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMenu;
