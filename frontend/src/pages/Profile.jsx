import React, { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    image: assets.profile_pic,
    name: "amare",
    email: "amare@gmail.com",
    phone: "000000000",
    address: {
      line1: "dmu",
      line2: "aa",
    },
    gender: "male",
    birthday: "12/12/2000",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col gap-2 mx-4 my-7">
      <div>
        <img src={userData.image} alt="" className="max-w-[130px] rounded-lg" />
        {isEdit ? (
          <input
            className="mt-2 p-2"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((perv) => ({ ...perv, name: e.target.value }))
            }
          />
        ) : (
          <p className="mt-2 p-2">{userData.name}</p>
        )}
      </div>
      <hr className="mt-0 "/>
      <p className="underline mt-2">CONTACT INFORMATION</p>
      <div className="flex gap-4">
        <p >Email id:</p>
        <p className="text-blue-300">{userData.email}</p>
      </div>
      <div className="flex gap-3">
        <p>Phone:</p>

        {isEdit ? (
          <input
            type="number"
            value={userData.phone}
            onChange={(e) =>
              setUserData((perv) => ({ ...perv, phone: e.target.value }))
            }
          />
        ) : (
          <p>{userData.phone}</p>
        )}
      </div>
      <div className="flex gap-4">
        <p>Address:</p>
        {isEdit ? (
          <div className="flex flex-col">
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((perv) => ({
                  ...perv,
                  address: { ...perv.address, line1: e.target.value },
                }))
              }
            />
            <br/>
            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((perv) => ({
                  ...perv,
                  address: { ...perv.address, line2: e.target.value },
                }))
              }
            />
          </div>
        ) : (
          <p>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>
      <p className="underline">BASIC INFORMATION</p>
      <div className="flex gap-4">
        <p>Gender:</p>
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) =>
              setUserData((perv) => ({ ...perv, gender: e.target.value }))
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
      </div>
      <div className="flex gap-4">
        <p>Birthday:</p>
        {isEdit ? (
          <input
            type="date"
            value={userData.birthday}
            onChange={(e) =>
              setUserData((perv) => ({ ...perv, birthday: e.target.birthday }))
            }
          />
        ) : (
          <p>{userData.birthday}</p>
        )}
      </div>
      <div>
        {isEdit ? (
          <button className="border p-2 rounded-lg px-4 hover:bg-blue-400 hover:text-white capitalize"  onClick={() => setIsEdit(false)}>save information</button>
        ) : (
          <button className="border p-2 rounded-lg px-4 hover:bg-blue-400 hover:text-white capitalize" onClick={() => setIsEdit(true)}>edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
