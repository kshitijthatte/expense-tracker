import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helpers/authHelpers";
import MoneyImage from "../images/undraw_wallet_aym5.png";
import Tracker from "./Dashboard/Tracker";
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";

const Main = () => {
  const [user, setUser] = useState(isAuthenticated());
  const [loginForm, setLoginForm] = useState(true);
  const formSwitcher = () => {
    setLoginForm(!loginForm);
  };

  const authListener = () => {
    isAuthenticated() ? setUser(isAuthenticated()) : setUser(null);
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <Tracker />
      ) : (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-400 to-green-500">
          <div className="flex items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl ">
            <div className="lg:w-1/2 hidden lg:block ">
              <img src={MoneyImage} alt="money-logo" />
            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
                Money Tracker
              </h2>
              {loginForm ? (
                <Login authListener={authListener} />
              ) : (
                <Signup authListener={authListener} />
              )}

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  md:w-1/4"></span>
                <button
                  onClick={formSwitcher}
                  className="text-xs text-gray-500 uppercase hover:underline focus:outline-none"
                >
                  {loginForm ? "or sign up" : "or sign in"}
                </button>
                <span className="w-1/5 border-b  md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
