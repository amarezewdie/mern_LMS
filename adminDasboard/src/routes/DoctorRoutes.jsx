import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DoctorDashboard from "../pages/DoctorDashboard";
import Profile from "../pages/Profile";

const DoctorRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<DoctorDashboard />} />
            <Route path="/profile" element={<Profile />} />
            {/* Redirect to dashboard if path is not found */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DoctorRoutes;
