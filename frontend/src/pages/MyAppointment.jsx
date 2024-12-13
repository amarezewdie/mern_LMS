import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const {doctors}=useContext(AppContext);
  return (
    <div className="flex flex-col my-7 ">
      <p className="mb-3">My appointments</p>
      <hr />
      <div className="flex flex-col gap-3">
        {doctors.slice(0, 2).map((item, index) => (
          <div className="flex  gap-4 border-b py-3 items-start sm:items-center pr-4">
            <div>
              <img
                src={item.image}
                alt=""
                className="max-w-[200px] bg-blue-100"
              />
            </div>
            <div className="flex flex-col gap-8  sm:flex-row justify-between w-full">
              <div className="m-3 p-2 sm:m-0 sm:p-0">
                <p>{item.name}</p>
                <p>{item.specialty}</p>
                <p>address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p>date and Time: 13 undefined 2024 | 01:30 PM</p>
              </div>
              <div className="mx-auto"></div>
              <div className="flex flex-col gap-4 self-end ">
                <button className="border p-2 capitalize hover:bg-blue-400 hover:text-w  transition-all rounded-md">
                  pay online
                </button>
                <button className="border p-2 capitalize hover:bg-red-500 hover:text-w  transition-all rounded-md">
                  cancel appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointment
