import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { specialty } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoctors, setFilterDoctor] = useState([]);
  const [showFilter,setShowFilter]=useState(false)
  const navigate = useNavigate();

  const applyFilter = async () => {
    if (specialty) {
      const filterDoc = doctors.filter((doc) => doc.specialty === specialty);
      setFilterDoctor(filterDoc);
    } else {
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialty]);

  return (
    <div className="flex flex-col gap-4 my-3">
      <h1>Browse through the doctors specialist.</h1>
      <div className="flex flex-col md:flex-row gap-4 items-start my-3">
        <button onClick={()=>setShowFilter(perv=>!perv)} className={`${showFilter ?"bg-blue-300 text-white" :""} py-2 px-4 border capitalize md:hidden`}>filter</button>
        <div className={`flex flex-col gap-4 ${showFilter ? "flex w-full" :"hidden"}`}>
          <p
            onClick={() =>
              specialty === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`p-2 border cursor-pointer px-8 whitespace-nowrap ${
              specialty === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            } `}
          >
            General physician
          </p>
          <p
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`p-2 border  cursor-pointer px-8 whitespace-nowrap  ${
              specialty === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            } `}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specialty === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`p-2 border  cursor-pointer px-8 whitespace-nowrap ${
              specialty === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            } `}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specialty === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`p-2 border cursor-pointer px-8 whitespace-nowrap ${
              specialty === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            } `}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`p-2 border  cursor-pointer px-8 whitespace-nowrap ${
              specialty === "Neurologist" ? "bg-indigo-100 text-black" : ""
            } `}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              specialty === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`p-2 border cursor-pointer px-8 whitespace-nowrap ${
              specialty === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            } `}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filterDoctors.map((item, index) => (
            <div
            onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
              className="border rounded-lg pb-3 hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              
            >
              <img
                src={item.image}
                alt=""
                className="bg-blue-50 rounded-lg rounded-b-none"
              />
              <div className="flex gap-2 items-center my-2">
                <span className="w-3 h-3 bg-green-400  rounded-full mx-2"></span>
                <span>available</span>
              </div>
              <p className="mx-3">{item.name}</p>
              <p className="mx-3">{item.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
