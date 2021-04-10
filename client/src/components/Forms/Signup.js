import React, { useState } from "react";
import { authenticate, login, signup } from "../../helpers/authHelpers";

const Signup = ({ authListener }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const { name, email, password, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
          setTimeout(() => {
            setValues({ ...values, error: "" });
          }, 5000);
        } else {
          login({ email, password }).then((data) => {
            if (data.errors) {
              setValues({ ...values, error: data.errors });
              setTimeout(() => {
                setValues({ ...values, error: "" });
              }, 5000);
            } else {
              authenticate(data);
              authListener();
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error in signup", err);
      });
  };

  return (
    <>
      <p className="mt-2 text-xl text-center text-gray-600">Sign Up Now!</p>

      <p
        className="pt-2 text-md text-center text-red-600"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </p>

      <div className="mt-2">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          required
          onChange={handleChange("name")}
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-green-500  focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="mt-4">
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
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="password"
        >
          Password
        </label>

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
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded hover:bg-green-700 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Signup;
