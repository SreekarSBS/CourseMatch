const Footer = () => {
    return (
      <div className="flex justify-around mt-8 shadow-2xl w-full h-64  bg-black">
        <div className="flex items-center">
          <div className=" text-white font-semibold text-3xl">Contact Me</div>
        </div>
        <div className="">
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/iifsrzlyvrfy6m3yvl9t"
            alt="Logo"
          />
          <div className="text-3xl font-extralight text-white">
            A Sreekar SBS Production
          </div>
        </div>
        <div className="flex items-center  text-white font-semibold text-3xl">
          Links Here
        </div>
      </div>
    );
  };
  
export default Footer;


