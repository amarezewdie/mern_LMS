import validator from "validator";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import userModel from "../models/userModel.js";
//add doctor
const addDoctor = async (req, res) => {
  console.log(req.body);
  try {
    const {
      name,
      email,
      password,
      experience,
      fees,
      about,
      specialty,
      degree,
      address,
    } = req.body;
    if (!req.file)
      return res
        .status(404)
        .json({ message: "File is not uploaded", success: false });
    const imageFile = req.file;
    console.log(imageFile);

    //check all data included
    if (
      !name ||
      !email ||
      !password ||
      !experience ||
      !fees ||
      !about ||
      !specialty ||
      !degree ||
      !address
    ) {
      return res
        .status(400)
        .json({ success: false, message: "messing doctor data" });
    }

    //validate email
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "please add valid email format" });
    }
    //email exist
    const emailExist = await doctorModel.findOne({ email });
    if (emailExist) {
      return res
        .status(400)
        .json({ success: false, message: "email already exist" });
    }
    //check password is strong
    if (password.length < 6) {
      return res
        .status(400)
        .json({ success: false, message: "add Strong password" });
    }
    if (!imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor profile image is required" });
    }
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const uploadImage = await cloudinary.uploader.upload(imageFile.path);
    const imageUrl = uploadImage.secure_url;
    const newDoctor = new doctorModel({
      name,
      email,
      password: hashPassword,
      experience,
      fees,
      about,
      specialty,
      degree,
      address: JSON.parse(address),
      image: imageUrl,
      date: Date.now(),
    });

    await newDoctor.save();
    res.status(201).json({ success: true, message: "doctor add successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "server error in add doctor" });
  }
};

export { addDoctor };
