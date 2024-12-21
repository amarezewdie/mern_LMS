import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn"; // Your SignIn page
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoutes from "./routes/AdminRoutes"; // Your Admin routes
import DoctorRoutes from "./routes/DoctorRoutes"; // Your Doctor routes
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { auth } = useAuth(); // Get auth state from context
  const { accessToken, role } = auth; // Destructure auth object

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute isAuthorized={accessToken && role === "admin"}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        {/* Protected Doctor Routes */}
        <Route
          path="/doctor/*"
          element={
            <ProtectedRoute isAuthorized={accessToken && role === "doctor"}>
              <DoctorRoutes />
            </ProtectedRoute>
          }
        />

        {/* Redirect for unknown routes */}
        <Route
          path="*"
          element={<Navigate to={accessToken ? `/${role}` : "/sign-in"} />}
        />
      </Routes>
    </>
  );
};

export default App;
