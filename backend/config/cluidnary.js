import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLUODINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};


export default connectCloudinary;