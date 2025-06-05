import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import React from "react";
const Header = () => {
  return (
    <div className="border shadow-lg flex justify-between ">
        <div className="flex justify-between ">
      <div className="m-4 p-4 flex items-center">
        <Link to="/">
          <img className="h-12 w-auto mr-6" src={LOGO_URL} />
        </Link>
        <span className="m-2 pt-2 text-lg">
          <Link to="/Explore">Explore</Link>
        </span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Find expert-led courses to boost your career"
          className="border border-black mt-10 p-2 pr-96 rounded-2xl"
        ></input>
      </div>
      
      <div className="bg-amber-300 h-6 w-6 m-12 p-3 ml-[944px] absolute rounded-2xl"></div>
      </div>
      <div className="flex items-center mr-16 ">
      <div className=" text-lg  ml-6">Coursematch Business</div>
      <div className=" text-lg  ml-6">About Us</div>
      <div className=" text-lg  ml-6 "><svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0"
  y="0"
  viewBox="0 0 128 128"
  className="h-6 w-6"
>
  <g>
    <path
      fill="black"
      d="M27.4 13.7V7.6H0v6.1h21.3V99H97.5v-6H27.4V13.7zm6.1 54.9h82.3v-6.1H33.5v6.1zm0 15.2h73.1v-6.1H33.5v6.1zm3.1 18.3c-5 0-9.1 4.1-9.1 9.1 0 5.1 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zm45.7 0c-5 0-9.1 4.1-9.1 9.1 0 5.1 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zM33.5 53.3h88.4v-6.1H33.5v6.1zm0-21.3v6.1H128V32H33.5z"
    />
  </g>
</svg>
</div>
      <div className=" text-lg   ml-6">Login</div>
      </div>
    </div>
  );
};

export default Header;
