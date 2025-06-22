
// We will be using a custom hook.

import { useParams } from "react-router-dom";
import useCourseInfo from "../utils/useCourseInfo";
import useCourseInfo2 from "../utils/useCourseInfo2";
import {  useEffect, useState } from "react";
import Personal from "./Personal";
import Teams from "./Teams";
import useCourseInfo3 from "../utils/useCourseInfo3";
import AccordionContent from "./AccordionContent";
import AlreadyBought from "./AlreadyBought";
import BoughtTogether from "./BoughtTogether";

import CourseInfoShimmer from "./CourseInfoShimmer";
import Reviews from "./Reviews";
import Scrollable from "./Scrollable";



const CourseInfo = () => {
    
  
    const [showAccordion , setShowAccordion] = useState(null);
    
    const [isPersonal , setIsPersonal] = useState(true);
    const {id} = useParams();
    const {courseInfo: courseData , loading} = useCourseInfo(id)
    const {courseInfo: courseData2 , loading2} = useCourseInfo2(id)
    const {courseData:courseData3 , loading3} = useCourseInfo3(id)
    const [overflow , setOverflow] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setShowAccordion(null)
      const handleScroll = () => {
        setIsVisible(window.scrollY > 400);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },[id])

    const val = loading || loading2 || loading3;
    if(!courseData || !courseData2 || !courseData3 ||val ) {
     
      return <CourseInfoShimmer />
    }
    const instructors = courseData?.visible_instructors?.map((item) => item.display_name );
   
    
  
  
    
 

    const handleOverflow = () => {
     setOverflow(true)
    }
    const handleClick = (idx) => {
     setShowAccordion((prev) => prev == idx ? null : idx) 
    }
     const  secondsToHms = (d) => {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      
  
      var hDisplay = h > 0 ? h + (h == 1 ? " hr  " : " hrs, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " mt  " : null) : "";
     
      return hDisplay + mDisplay  
  }
  
   return <div className="border h-[450px] bg-black flex justify-evenly  ml-[-45px] ">
         <div className=" 2xl:ml-[100px] xl:ml-[200px]   w-[840px] h-96  " >
           <h1 className=" m-6 p-6 text-cyan-200 font-extralight text-5xl font-serif">{courseData.title}</h1>
            <h1 className="   ml-12 font-serif text-gray-300 text-xl">{courseData.headline}</h1>
           <div className="flex">
          <div className="w-48  text-center pt-2 ml-16 rounded-2xl h-10 font-stretch-110% mt-6  text-black bg-amber-400">{courseData2?.context_info?.category?.title}</div>
          <div className="w-48 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10 mt-6 text-white  border font-stretch-110%  border-amber-300">{courseData2?.context_info?.label?.title || courseData2?.visible_instructors?.[0]?.job_title}

          </div>

         </div>
           <h1 className=" m-1.5 p-4 ml-12 text-xl font-serif text-gray-300">Created By {instructors?.join(" | ")} </h1>
            <div className="flex justify-around w-[700px] h-28 ml-14  bg-white border rounded-2xl" >
               <div className="font-bold text-center  text-3xl">
                <p className="pt-6">{courseData.num_published_lectures}</p>
                <p className=" text-xl text-amber-600">Lectures</p>
                </div>
               
               <div className="text-3xl text-center ">
                <p className="pt-6 font-bold " >{courseData?.rating?.toFixed(2)}🌟</p>
                
                <p className=" underline text-xl text-gray-600">{courseData?.num_reviews?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ratings</p>
               </div>

               <div className="font-bold text-center  text-3xl">
                <p className="pt-6">{courseData?.num_subscribers?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p className=" text-xl text-amber-600">Learners</p>
                </div>
               
            </div>
            <div  className="flex justify-between">
            <h1 className="text-4xl font-bold mt-20 text-gray-500"> Course Content</h1>
            {overflow && <div onClick={() => setOverflow(false)} className="text-xl hover:text-black cursor-pointer font-extralight mr-[-80px] mt-22 text-gray-500">Show less</div>}
            </div>
            <div className={`${courseData3?.curriculum_context?.data?.sections.length < 12 && !overflow? "h-auto" : "h-[823px]"}  ${overflow? "h-auto" : "h-[823px]"}   w-[940px] mt-8 ${overflow? "overflow-visible" : "overflow-hidden"}`}>
                 {courseData3?.curriculum_context?.data?.sections.map((item) => {
                  return <div key = {item.index}>  <div  className="flex justify-between rounded-lg  border border-b-gray-600 p-4 my-1.5 text-lg font-semibold bg-gray-100" > 
                  <div className="flex">
                   <div onClick={() => handleClick(item.index)} className="cursor-pointer px-4">⌄</div>
                  {item.title}
                  </div>
                  <div className="flex">
                  <p className="font-light text-lg text-gray-600 px-2 ">{item.lecture_count} Lectures</p>
                  -  
                  <p className="font-light text-lg text-gray-600 px-2">{secondsToHms(item.content_length)  } Minutes</p>
                  </div>
                      </div> 
                    {  showAccordion == item.index && <AccordionContent content = {item.items} />}
                      </div>
                     
                  }) }
                   
            </div>
             {!overflow && courseData3?.curriculum_context?.data?.sections.length > 12 && <div onClick={handleOverflow} className=" mt-4 w-[940px] text-center rounded-lg text-amber-600  border border-amber-600 p-4 my-1.5 text-xl font-semibold cursor-pointer hover:bg-amber-50">
            {  courseData3?.curriculum_context?.data?.sections.length > 12 && courseData3?.curriculum_context?.data?.sections.length - 12  } More Sections
            </div>
            }
            <AlreadyBought id ={id} />
           
             <BoughtTogether id  ={id} />
             <Reviews id = {id} />
         </div>


         <div className=" mt-11 w-96 h-[720px] border border-amber-500 sticky ">
            <img className=" " src={courseData.image_480x270} alt="Course Thumbnail" />
            <h1 className="font-stretch-expanded font-serif font-bold text-3xl text-cyan-200 m-4 p-2 flex mt-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="48.001" height="48.002"><g fill="white"><path d="M47.928 41.15v-.02l-3.8-7.6V3.635A3.641 3.641 0 0 0 40.485 0H7.515a3.64 3.64 0 0 0-3.636 3.635v29.891l-3.8 7.6v.02a.713.713 0 0 0-.073.3v2.91A3.641 3.641 0 0 0 3.636 48h40.728A3.642 3.642 0 0 0 48 44.365v-2.91a.7.7 0 0 0-.072-.305zM5.335 3.637a2.186 2.186 0 0 1 2.182-2.182h32.97a2.185 2.185 0 0 1 2.182 2.182v29.334H5.335zm-.278 30.789h37.888l3.151 6.3H1.905zm41.49 9.939a2.185 2.185 0 0 1-2.182 2.182H3.637a2.185 2.185 0 0 1-2.182-2.182v-2.182h45.091v2.182z"/><path d="M20.607 45.092H27.4a.728.728 0 1 0 0-1.456h-6.793a.728.728 0 0 0 0 1.456zM21.281 7.42a.727.727 0 0 0-1.164.58v14.547a.727.727 0 0 0 .728.726.732.732 0 0 0 .437-.145l9.7-7.273a.726.726 0 0 0 0-1.162zm.291 13.672V9.455l7.758 5.818zM38.547 28.123h-5.293a.727.727 0 0 0 0 1.454h5.293a.727.727 0 1 0 0-1.454zM29.375 26.184a.726.726 0 0 0-.727.727v1.213H9.457a.727.727 0 1 0 0 1.454h19.191v1.213a.728.728 0 0 0 1.455 0v-3.879a.727.727 0 0 0-.728-.728z"/></g></svg>
              
              <p className="ml-4">{courseData.content_info}</p>
              </h1> 
            <div className="border  text-white flex">
              
              <div onClick={() => {setIsPersonal(true)}} className={`cursor-pointer w-1/2 h-20 ${ isPersonal ? "bg-amber-500 text-black" : " text-white" } text-center pt-5 text-shadow-black text-3xl font-stretch-125%`} >Personal </div>
              <div onClick={() => {setIsPersonal(false)}} className={`cursor-pointer w-1/2 h-20 ${!isPersonal ? "bg-amber-500 text-black" : "text-white"}  text-center pt-5 text-shadow-black text-3xl font-stretch-125%`}>Teams</div>
            </div>
           
          {isPersonal ? <Personal courseData = {courseData} courseData2 = {courseData2} courseData3 = {courseData3}  /> : <Teams/>}

         </div>
        <Scrollable courseData3 = {courseData3} courseData2 = {courseData2} courseData = {courseData} isVisible={isVisible} />
   </div>
}

export default CourseInfo;

