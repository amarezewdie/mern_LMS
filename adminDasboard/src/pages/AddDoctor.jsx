import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AddDoctor = () => {
  const axiosPrivate = useAxiosPrivate();
  const [formData, setFormData] = useState({
    docImg: "",
    name: "",
    email: "",
    password: "",
    experience: "1 year",
    fees: "",
    specialty: "Neurologist",
    degree: "",
    address1: "",
    address2: "",
    about: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change (for doctor image)
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      docImg: e.target.files[0],
    }));
  };

  // Prepare form data for submission
  const prepareDoctorData = () => {
    const doctorData = new FormData();
    doctorData.append("image", formData.docImg);
    doctorData.append("name", formData.name);
    doctorData.append("email", formData.email);
    doctorData.append("password", formData.password);
    doctorData.append("experience", formData.experience);
    doctorData.append("fees", Number(formData.fees));
    doctorData.append("specialty", formData.specialty);
    doctorData.append("degree", formData.degree);
    doctorData.append(
      "address",
      JSON.stringify({ line1: formData.address1, line2: formData.address2 })
    );
    doctorData.append("about", formData.about);
    return doctorData;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields (example validation, you can adjust according to your needs)
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.fees
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const doctorData = prepareDoctorData();

    try {
      const response = await axiosPrivate.post(
        `/api/admin/add-doctor`,
        doctorData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Doctor added successfully!");
        // Reset form after successful submission
        setFormData({
          docImg: "",
          name: "",
          email: "",
          password: "",
          experience: "1 year",
          fees: "",
          specialty: "Neurologist",
          degree: "",
          address1: "",
          address2: "",
          about: "",
        });
      } else {
        toast.error("Failed to add doctor.");
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      toast.error(
        error.response ? error.response.data.message : "Error adding doctor."
      );
    }
  };

  return (
    <form
      className="flex flex-col p-6 w-full h-[100vh] bg-gray-100"
      onSubmit={handleSubmit}
    >
      <h1 className="capitalize text-2xl">Add Doctor</h1>
      <div className="flex flex-col border element overflow-y-scroll p-7 bg-white">
        <div>
          <label htmlFor="img">
            <img
              className="max-w-[100px] my-3 border p-3 rounded-lg"
              src={
                formData.docImg
                  ? URL.createObjectURL(formData.docImg)
                  : assets.upload_area
              }
              alt="Doctor"
            />
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            id="img"
            hidden
          />
          <p>Upload Doctor Picture</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-3">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="capitalize p-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border"
            />
            <label htmlFor="email" className="capitalize p-1">
              Doctor Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border"
            />
            <label htmlFor="password" className="capitalize p-1">
              Set Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border"
            />
            <label htmlFor="experience" className="capitalize p-1">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="p-2 border"
            >
              <option value="1 year">1 year</option>
              <option value="2 year">2 year</option>
              <option value="3 year">3 year</option>
              <option value="5 year">5 year</option>
              <option value="6 year">6 year</option>
              <option value="7 year">7 year</option>
              <option value="8 year">8 year</option>
              <option value="9 year">9 year</option>
              <option value="10 year">10 year</option>
            </select>
            <label htmlFor="fees" className="capitalize p-1">
              Fees
            </label>
            <input
              type="number"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
              className="p-2 border"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="specialty" className="capitalize p-1">
              Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="Neurologist">Neurologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="General physician">General physician</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
            <label htmlFor="degree" className="capitalize p-1">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="p-2 border"
            />
            <label htmlFor="address1" className="capitalize p-1">
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className="p-2 border"
            />
            <label htmlFor="address2" className="capitalize p-1">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="p-2 border"
            />
          </div>
        </div>

        <label htmlFor="about" className="capitalize p-1">
          About Doctor
        </label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Write about the doctor's experience, specialties, etc."
          className="w-full border p-12 resize-none"
        ></textarea>

        <button
          type="submit"
          className="p-3 capitalize self-start bg-blue-400 text-white my-3 rounded-lg px-6"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
