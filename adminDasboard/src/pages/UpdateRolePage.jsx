import React, { useState,useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";


const UpdateRolePage = () => {
  const {token,backend_url} =useContext(AppContext);
  const { id } = useParams(); // Get the userId from the URL
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // To navigate back to the admin dashboard after updating
console.log(id)

  const handleRoleChange = (event) => {
    setRole(event.target.value); // Update role state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send PATCH request to update the role
      const response = await axios.patch(
        `${backend_url}/api/admin/updateRole/${id}`, // Use userId in URL
        { role }, // Send the new role in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token for authentication
          },
        }
      );

      setMessage(response.data.message); // Display success message

      // Redirect to admin dashboard (or any other page)
      navigate("/admin/dashboard"); // Adjust the path as needed
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating role");
    }
  };

  return (
    <div>
      <h3>Update Role for User {id}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role:</label>
          <select value={role} onChange={handleRoleChange} required>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className="border p-2 my-3">Update Role</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateRolePage;
