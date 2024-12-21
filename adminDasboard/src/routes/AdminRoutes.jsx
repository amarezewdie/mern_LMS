import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import AdminDashboard from "../pages/AdminDashboard";
import Appointment from "../pages/Appointment";
import AddDoctor from "../pages/AddDoctor";
import ListDoctor from "../pages/ListDoctor";
import Profile from "../pages/Profile";
import Missing from "../pages/Missing";
import UpdateRolePage from "../pages/UpdateRolePage";

const AdminRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/list-doctor" element={<ListDoctor />} />
            <Route path="/updateRole/:id" element={<UpdateRolePage />} />
            <Route path="/profile" element={<Profile />} />
            {/* Redirect to dashboard if path is not found */}
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminRoutes;
