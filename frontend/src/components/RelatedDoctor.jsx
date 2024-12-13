import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({ specialty, docId }) => {
  const [relDoc, setRelDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate=useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && specialty) {
      const docData = doctors.filter(
        (doc) => doc.specialty === specialty && doc._id !== docId
      );
      setRelDoc(docData);
      
    }
  }, [docId, specialty, doctors]);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl capitalize p-3 self-center">Related Doctors</h1>
      <p className="mb-5 w-1/2 self-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-3">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border  border-blue-200 rounded-lg hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} alt="" className="bg-blue-50 rounded-t-lg" />
            <div className="p-3 flex gap-2 items-center">
              <p className="bg-green-500 w-3 h-3 rounded-full"></p>
              <p className="text-green-400">Available</p>
            </div>
            <p className="px-3 capitalize">{item.name}</p>
            <p className="px-3 capitalize pb-3">{item.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctor;
