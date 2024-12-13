import React, { useEffect, useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign-up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((perv) => ({ ...perv, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border shadow-lg my-10 px-6 py-10 flex flex-col items-start justify-center"
      >
        <p className="capitalize text-2xl ">
          {state === "sign-up" ? "Create Account" : "login"}
        </p>
        <p className="capitalize ">
          Please {state === "sign-up" ? "sign up" : "login"} to book appointment
        </p>
        {state === "sign-up" && (
          <div className="w-full items-start mt-4">
            <p>Full Name</p>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={formData.name}
              className="w-full p-2 border "
              required
            />
          </div>
        )}
        <div className="w-full items-start mt-3">
          <p>email</p>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            className="w-full p-2 border "
            required
          />
        </div>
        <div className="w-full items-start mt-3">
          <p>password</p>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
            className="w-full p-2 border "
            required
          />
        </div>
        <button className="w-full bg-blue-500 p-2 rounded-lg mt-4 text-white">
          {state === "sign-up" ? "Create Account" : "login"}
        </button>
        <p className="mt-2">
          {state === "sign-up" ? (
            <p>
              Already have an account?{" "}
              <span
                className="underline text-blue-400 cursor-pointer px-3"
                onClick={() => setState("login")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?
              <span
                className="underline text-blue-400 cursor-pointer px-3"
                onClick={() => setState("sign-up")}
              >
                Click here
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
