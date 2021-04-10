import React, { useState } from "react";
import { authenticate, login } from "../../helpers/authHelpers";

const Login = ({ authListener }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const { email, password, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    login({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
          setTimeout(() => {
            setValues({ ...values, error: "" });
          }, 5000);
        } else {
          authenticate(data);
          authListener();
        }
      })
      .catch((err) => {
        console.log("Error in signup", err);
      });
  };

  return (
    <>
      <p className="mt-4 text-xl text-center text-gray-600">Welcome back!</p>
      <p
        className="pt-2 text-md text-center text-red-600"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </p>
      <div className="mt-2">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          required
          onChange={handleChange("email")}
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-green-500  focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <a href="/" className="text-xs text-gray-500  hover:underline">
            Forget Password?
          </a>
        </div>

        <input
          id="password"
          type="password"
          autoComplete="password"
          value={password}
          required
          onChange={handleChange("password")}
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="mt-8">
        <button
          onClick={onSubmit}
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded hover:bg-green-700 focus:outline-none "
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default Login;
