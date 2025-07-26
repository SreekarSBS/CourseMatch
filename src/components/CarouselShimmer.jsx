import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const CarouselShimmer = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
<div className=" embla" ref={emblaRef}>
      <div className="embla__container  ">
        
        <div className="embla__slide h-96 ">

           <div className="flex justify-between ">
            <div className="2xl:ml-24  mt-[-25px]  ">
                
                <h1 className="text-gray-100 rounded-3xl bg-gray-100 mt-18 2xl:mt-10 2xl:pr-0 xl:pr-32 2xl:text-7xl xl:text-5xl font-serif">Learn Without</h1>
                <div className=" text-gray-100 w-12 rounded-3xl bg-gray-100 2xl:text-7xl 2xl:mr-0 xl:mr-14 xl:text-5xl pr-60 mt-3 font-serif">Limits</div>
                
                <div className="text-gray-100 wrap w-lg mt-2 rounded-2xl bg-gray-100">
                  <p className="2xl:ml-4"> Start, switch, or advance your career with more than </p>
                  <p className="2xl:ml-7 "> 10,000 courses,Professional Certificates, and degrees </p>
                  <p className="2xl:mr-10" >from world-class universities and companies.</p>
                </div>
                <div className="flex ml-12 mt-2.5  ">
                <button className="bg-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2 text-amber-600  text-bold  h-8">Enroll</button>
                <button className="ml-6 border border-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2 text-white  text-bold  h-10"> Business</button>
                
            </div>

            </div>
              <div className="mr-56 bg-gray-100 rounded-2xl w-[420px] h-96 " />
            
            </div>
            </div>
       </div>
    </div>
  );
};

export default CarouselShimmer;
