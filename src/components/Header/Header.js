import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {user ? <button onClick={()=>{signOut(auth)
        toast('Log Out Successfull')}} className="font-semibold">Log Out</button> : <Link to="/login">Log In</Link>}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="1"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case flex font-serif text-3xl"
          >
            ToolSite
            <div>
              <small className=" text-sm text-orange-600 flex-row">.com</small>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">{menu}</ul>
        </div>
        <div className="navbar-end">
          <h1 className="font-semibold text-orange-600 btn btn-ghost invisible lg:visible">{user ? user.displayName: ''}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
