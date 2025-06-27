import { Link } from "react-router-dom";
import ModernIcon from "./GithubButton";

const Footer = () => {
    return (
      <div className="flex items-center justify-around mt-18 overflow-clip shadow-2xl w-full h-64  bg-black">
        <div className="flex items-center">
          <div className=" text-white font-extralight text-3xl hover:underline-offset-2 "><a className="group text-amber-400 transition-all duration-300 ease-in-out" href="#">
  <span className="bg-left-bottom bg-gradient-to-r from-amber-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
    Contact Me
  </span>
</a></div>
        </div>
        
         
          <div className="text-3xl justify-center items-center font-extralight text-white">
            <div>
          <img className="mt-[-44px]"
            src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/iifsrzlyvrfy6m3yvl9t"
            alt="Logo"
          /></div>
            <div className="mt-[-94px] ml-[-14px] text-cyan-300">
            <div className="  text-cyan-300 font-extralight text-3xl opacity-55 hover:opacity-70 hover:underline-offset-2 "><a target="_blank" className="group  text-cyan-300 transition-all duration-300 ease-in-out" href="https://github.com/SreekarSBS">
              <span className="bg-left-bottom bg-gradient-to-r from-amber-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
    SreekarSBS Production
  </span></a></div>
  </div>
          </div>
        
          <div className="p-4 min-h-screen flex items-center justify-center">
       <Link target="_blank" to = "https://github.com/SreekarSBS/CourseMatch"><div className=""><ModernIcon  /> </div></Link>
</div>
      </div>
    );
  };
  
export default Footer;


