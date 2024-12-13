import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState({});
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [slotTime, setSlotTime] = useState(null);
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = () => {
    setDocInfo(doctors.find((doc) => doc._id === docId));
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();
    let timeSlots = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let dailySlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        dailySlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      timeSlots.push({
        day: dayOfWeek[currentDate.getDay()],
        date: currentDate.getDate(),
        slots: dailySlots,
      });
    }

    setDocSlots(timeSlots);
  };

  useEffect(() => {
    if (docInfo._id) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-7 items-start">
        <img
          src={docInfo.image || assets.defaultDoctorImage}
          alt="Doctor"
          className="max-h-[300px] object-cover bg-blue-400 rounded-lg"
        />
        <div>
          <div className="flex flex-col items-start border p-6 rounded-lg border-gray-400">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-2xl">Dr. Richard James</p>
              <img src={assets.verified_icon} alt="" className="w-4 h-4" />
            </div>
            <div className="flex gap-3 my-2 font-medium">
              <p>
                <span>{docInfo.degree}</span> - <span>{docInfo.specialty}</span>
              </p>
              <button className="border rounded-full px-2">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <div className="flex gap-2">
                <p className="font-bold">About</p>
                <img src={assets.info_icon} alt="" />
              </div>
              <p className="p-2 text-sm font-light">{docInfo.about}</p>
              <p className="capitalize p-2">
                Appointment fee:{" "}
                <span className="font-bold">${docInfo.fees}</span>
              </p>
            </div>
          </div>
          {/* Day selection */}
          <div>
            <p className="font-bold mb-4">Select a Day for Booking:</p>
            <div className="flex gap-3">
              {dayOfWeek.map((day) => (
                <button
                  key={day}
                  className={`p-2 border rounded-md ${
                    selectedDay === day ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Available slots for selected day */}
            {selectedDay && (
              <div className="mt-4">
                <p className="font-semibold">
                  {selectedDay}'s Available Slots:
                </p>
                <div className="flex max-w-[600px]">
                  {docSlots.length > 0 &&
                    docSlots
                      .filter((item) => item.day === selectedDay)
                      .map((item, index) => (
                        <div key={index} className="flex overflow-scroll">
                          {item.slots.map((slot, slotIndex) => (
                            <button
                              key={slotIndex}
                              className={`p-2 rounded-md m-1 ${
                                slotTime === slot.time
                                  ? "bg-blue-300"
                                  : "bg-gray-200"
                              }`}
                              onClick={() => setSlotTime(slot.time)}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (selectedDay && slotTime) {
                  console.log(
                    `Booking appointment for ${selectedDay} at ${slotTime}`
                  );
                } else {
                  alert("Please select a day and a time slot.");
                }
              }}
              className="bg-blue-600 text-white p-2 rounded-lg mt-5"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <div>
        <RelatedDoctor docId={docId} specialty={docInfo.specialty} />
      </div>
    </div>
  );
};

export default Appointment;
