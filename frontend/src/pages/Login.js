import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#121212] text-white">
      <div className="max-w-6xl h-screen mx-auto">
        <form className="w-full h-full flex justify-center items-center">
          <div className="p-5 ring-1 ring-white/20 rounded-lg max-w-[80%] bg-[#272727]/60 shadow-md">
            <h1 className="text-3xl font-medium">Login</h1>
            <p className="mt-2 text-slate-400">
              Enter your email and password below to login to your account
            </p>
            <div className="my-3 flex flex-col gap-1">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
              />
              <label className="text-lg" htmlFor="pass">
                Password
              </label>
              <input
                id="pass"
                type="password"
                placeholder="***********"
                className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
              />
            </div>
            <button className="mt-2 w-full bg-white text-black py-1 text-lg font-semibold rounded-lg">
              Login
            </button>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to={"/"} className="text-indigo-600">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
