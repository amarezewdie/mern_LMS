import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();

  const { setAuth, auth, backend_url } = useAuth(); // Get the setAuth function from context
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(auth, "auth before refresh");

    try {
      const response = await axios.post(
        `${backend_url}/api/auth/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const { accessToken, role } = response.data;

        // Set token and role in context
        setAuth({ accessToken, role });

        // Persist token and role to localStorage
        localStorage.setItem(
          "auth",
          JSON.stringify({ role: role, accessToken: accessToken })
        );

        // Redirect based on role
        if (role === "admin") {
          navigate("/admin-dashboard"); // Admin page
        } else if (role === "doctor") {
          navigate("/doctor-dashboard"); // Doctor page
        } else {
          toast.error("Only admin and doctor login is allowed.");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Invalid email or password.");
        } else if (error.response.status === 400) {
          toast.error("Bad request. Please check your input.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        toast.error("Network error. Please try again later.");
      }
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 shadow-lg">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full border p-2"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full border p-2"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
