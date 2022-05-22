import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans ">
      <div className="flex items-center h-screen w-full ">
        <div className="w-full bg-white rounded shadow-lg p-6 m-4 md:max-w-sm md:mx-auto border-t-4 border-purple-600">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" >
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-5">
              <a
                className="text-blue-700 text-center text-sm hover:underline hover:font-semibold"
                href="/login"
              >
                Forgot password?
              </a>
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full">
              Login
            </button>

            <div className="text-center mt-3">
              <small>
                Don't have an account? <strong className="hover:underline text-green-500 hover:text-green-700"><Link to='/SignUp'>Sign Up</Link></strong>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
