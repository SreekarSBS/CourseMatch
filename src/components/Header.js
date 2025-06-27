import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Explore from "./Explore";




const Header = ({allCourses , setFilteredCourses }) => {
  const [isLoggedIn , setIsLoggedIn]  =useState(false);
  
 const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
   }
   
    const handleSearch = (e) => {
    setSearchText(e.target.value);
    const filteredList = allCourses.filter((course) =>  course.title.toLowerCase().includes(searchText.toLowerCase()) )
    setFilteredCourses(filteredList);
  }

  const cartItems = useSelector((store) => store.cart.items)
  
  
  return (
    <div className="border shadow-lg flex justify-between ">
        <div className="flex justify-between  ">
      <div className="m-4 p-4 flex items-center ">
        <Link to="/">
          <img className="h-12 w-auto mr-6" src={LOGO_URL} />
        </Link>
        <span  className="2xl:text-2xl font-extralight group m-2 pt-2 px-4 rounded-xl text-xl xl:ml-8 cursor-pointer  hover:bg-amber-200">
          Explore
        <Explore />
          
        </span>
      </div>

      <div className="font-extralight">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Find expert-led courses to boost your career"
          className="border border-black mt-10 p-2 2xl:pr-96 xl:pr-80 rounded-2xl"
        ></input>
      </div>
{/*       
      <button className="bg-amber-300 h-6 w-6 m-12 p-3 2xl:ml-[969px] absolute rounded-2xl xl:ml-[910px] cursor-pointer"></button> */}
      </div>
      <div className="flex items-center 2xl:mr-16 xl:mr-6 ">
      <div className="font-extralight text-lg 2xl:text-2xl  2xl:ml-6 xl:mr-8 "><Link to = "/Business">Coursematch Business</Link></div>
      <div className="font-extralight text-lg 2xl:text-2xl  2xl:ml-6 xl:mr-8 "><Link to = "/About">About Us</Link></div>
      <div className="font-extralight text-lg 2xl:text-2xl 2xl:ml-6  "><Link to = "/Cart"><svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0"
  y="0"
  viewBox="0 0 128 128"
  className="h-8 w-16"
>
  <g>
    <path
      fill="black"
      d="M27.4 13.7V7.6H0v6.1h21.3V99H97.5v-6H27.4V13.7zm6.1 54.9h82.3v-6.1H33.5v6.1zm0 15.2h73.1v-6.1H33.5v6.1zm3.1 18.3c-5 0-9.1 4.1-9.1 9.1 0 5.1 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zm45.7 0c-5 0-9.1 4.1-9.1 9.1 0 5.1 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zM33.5 53.3h88.4v-6.1H33.5v6.1zm0-21.3v6.1H128V32H33.5z"
    />
  </g>
</svg>
<div className="cart-items-count absolute mt-[-47px] ml-10 rounded-4xl w-6 h-6  bg-amber-500 text-white text-center  font-extralight text-xl">
  {cartItems.length}
  </div></Link>
</div>
        <div onClick={handleClick} className="2xl:text-2xl font-extralight text-lg ml-6 cursor-pointer"> { isLoggedIn ? "Logout" : "Login" }</div>
        
      
      </div>
    </div>
  );
};

export default Header;
