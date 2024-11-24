import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {

  const { specialty } = useParams();
  const { doctors, navigate } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === specialty));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialty]);
  return (
    <div className="max-w-[80vw] mx-auto my-10 flex flex-col items-start">
      <p className="capitalize mb-3">Browse through the doctors specialist.</p>
      <div className="flex gap-6">
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            onClick={() =>
              specialty === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`border whitespace-nowrap p-2 ${
              specialty === "General physician" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`border whitespace-nowrap p-2 ${
              specialty === "Gynecologist" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specialty === " Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`border whitespace-nowrap p-2  ${
              specialty === "Dermatologist" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specialty === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`border whitespace-nowrap p-2 ${
              specialty === "Pediatricians" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`border whitespace-nowrap p-2 ${
              specialty === "Neurologist" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              specialty === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`border whitespace-nowrap p-2 ${
              specialty === "Gastroenterologist" ? "bg-indigo-50 text-black" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-10 p-3">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border  border-blue-200 rounded-lg hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={item.image}
                alt=""
                className="bg-blue-50 rounded-t-lg max-w-[250px]"
              />
              <div className="p-3 flex gap-2 items-center">
                <p className="bg-green-500 w-3 h-3 rounded-full"></p>
                <p className="text-green-400">Available</p>
              </div>
              <p className="px-3 capitalize">{item.name}</p>
              <p className="px-3 capitalize pb-3">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
