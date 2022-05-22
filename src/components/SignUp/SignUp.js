import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="antialiased bg-gray-200 text-gray-900 font-sans ">
      <div className="flex items-center h-screen w-full ">
        <div className="w-full bg-white rounded shadow-lg p-6 m-4 md:max-w-sm md:mx-auto border-t-4 border-green-600">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Signup
          </span>
          <form className="mb-4">
          <div className="mb-4 md:w-full">
              <label htmlFor="name" className="block text-xs mb-1">
                Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
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
              
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full">
              Login
            </button>

            <div className="text-center mt-3">
              <small>
                Have an account? <strong className="hover:underline text-green-500 hover:text-green-700"><Link to='/login'>Log In</Link></strong>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;