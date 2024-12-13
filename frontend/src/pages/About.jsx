import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <h1 className="text-center my-10 capitalize text-2xl">ABOUT US</h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-14 ">
        <div className="mr-6 ml-0 w-full">
          <img src={assets.about_image} alt="" className="w-full sm:min-w-[360px]" />
        </div>
        <div className=" flex flex-col gap-4 text-sm ">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h1 className="text-2xl">Our Vision</h1>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="capitalize text-2xl mt-6">WHY CHOOSE US</h1>
        <div className="flex flex-col sm:flex-row ">
          <div className="border p-16 hover:bg-blue-400 hover:text-white transition-all  items-center">
            <p className="text-2xl capitalize p-3">EFFICIENCY:</p>
            <p className="max-w-48">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border p-16 hover:bg-blue-400 hover:text-white transition-all  items-center">
            <p className="text-2xl capitalize p-3">CONVENIENCE:</p>
            <p className="max-w-48">
              Access to a network of trusted healthcare professionals in your
              area.e.
            </p>
          </div>
          <div className="border p-16 hover:bg-blue-400 hover:text-white transition-all  items-center">
            <p className="text-2xl capitalize p-3">PERSONALIZATION:</p>
            <p className="max-w-48">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
