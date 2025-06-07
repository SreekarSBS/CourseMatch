import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container  ">
        
        <div className="embla__slide h-96 ">

           <div className="flex justify-between ">
            <div className="ml-50 mt-[-25px]">
                
                <h1 className="mt-18 2xl:text-7xl font-serif">Learn Without</h1>
                <h1 className="2xl:text-7xl pr-60 mt-3 font-serif">Limits</h1>
                
                <div className="text-gray-400 wrap w-lg mt-2">
                  <p className="ml-4"> Start, switch, or advance your career with more than </p>
                  <p className="ml-7"> 10,000 courses,Professional Certificates, and degrees </p>
                  <p className="mr-10" >from world-class universities and companies.</p>
                </div>
                <div className="flex ml-12 mt-2.5 ">
                <button className="bg-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2 text-white  text-bold  h-8">Enroll</button>
                <button className="ml-6 border border-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2  text-bold  h-10"> Business</button>
            </div>
            </div>
              <img className="mr-38 " src = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6gKoZ1AVu36CMpmu3N3BZw/51e59b6ed5e46b50bfb98c738b3b2329/data-analyst-hero_2x.png?auto=format%2Ccompress&dpr=1&w=720"/>
           
           
              
             
            </div>
            </div>
       
        <div className="embla__slide h-96 ">
        <div className="flex justify-between ">
        <img className="mr-38 " src = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/5rYF1dB5rQdD8Ude60Vcgk/a64d122febc9a54ee56402dd3d012042/Data_Scientist-hero_2x.png?auto=format%2Ccompress&dpr=1&w=720"/>
            
              
              <div className="mr-96 mt-[-25px]">
                
                <h1 className="mt-18 2xl:text-7xl font-serif">Learn Without</h1>
                <h1 className="2xl:text-7xl pr-60 mt-3 font-serif">Limits</h1>
                
                <div className="text-gray-400 wrap w-lg mt-2">
                  <p className="ml-4"> Start, switch, or advance your career with more than </p>
                  <p className="ml-7"> 10,000 courses,Professional Certificates, and degrees </p>
                  <p className="mr-10" >from world-class universities and companies.</p>
                </div>
                <div className="flex ml-12 mt-2.5 ">
                <button className="bg-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2 text-white  text-bold  h-8">Enroll</button>
                <button className="ml-6 border border-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2  text-bold  h-10"> Business</button>
            </div>
            </div>
            </div>
        </div>
        <div className="embla__slide h-96 ">
        <div className="flex justify-between ">
            <div className="ml-50 mt-[-25px]">
                
                <h1 className="mt-18 2xl:text-7xl font-serif">Learn Without</h1>
                <h1 className="2xl:text-7xl pr-60 mt-3 font-serif">Limits</h1>
                
                <div className="text-gray-400 wrap w-lg mt-2">
                  <p className="ml-4"> Start, switch, or advance your career with more than </p>
                  <p className="ml-7"> 10,000 courses,Professional Certificates, and degrees </p>
                  <p className="mr-10" >from world-class universities and companies.</p>
                </div>
                <div className="flex ml-12 mt-2.5 ">
                <button className="bg-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2 text-white  text-bold  h-8">Enroll</button>
                <button className="ml-6 border border-amber-600 w-32 py-2 rounded-4xl pb-8 mt-2  text-bold  h-10"> Business</button>
            </div>
            </div>
            
              <img className="mr-38 " src = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/69cNAmQMmrlgOZiqDhQ2cP/b53c174c81e14d7a4c1a5d307db9a128/Machine_Learning_Engineer-hero_2x.png?auto=format%2Ccompress&dpr=1&w=720"/>
           
           
              
             
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
