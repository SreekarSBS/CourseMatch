
// We will be using a custom hook.

import { useParams } from "react-router-dom";
import useCourseInfo from "../utils/useCourseInfo";
import useCourseInfo2 from "../utils/useCourseInfo2";
import { useState } from "react";
import Personal from "./Personal";
import Teams from "./Teams";
import usecourseInfo3 from "../utils/useCourseInfo3";
import AccordionContent from "./AccordionContent";
import useCourseInfo4 from "../utils/useCourseInfo4";


const CourseInfo = () => {
    
  
    const [showAccordion , setShowAccordion] = useState(null);
    const [index , setIndex] = useState();
    const [isPersonal , setIsPersonal] = useState(true);
    const {id} = useParams();
    const [overflow , setOverflow] = useState(false)
    const courseData = useCourseInfo(id);
    const courseData2 = useCourseInfo2(id);
    const courseData3 = usecourseInfo3(id);
    const already = useCourseInfo4(id);
    const instructors = courseData.visible_instructors?.map((item) => item.display_name );

    

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
            <div className={` h-[823px] w-[940px] mt-8 ${overflow? "overflow-visible" : "overflow-hidden"}`}>
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
                   {overflow && <div className="mt-4  h-96 bg-red-500">
              {already.map((item) => <div key = {item.id}>{item.title}</div>)}
            </div>}
            </div>
            {!overflow && <div onClick={handleOverflow} className=" mt-4 w-[940px] text-center rounded-lg text-amber-600  border border-amber-600 p-4 my-1.5 text-xl font-semibold cursor-pointer hover:bg-amber-50">
            {  courseData3?.curriculum_context?.data?.sections.length > 12 && courseData3?.curriculum_context?.data?.sections.length - 12  } More Sections
            </div>
            }
             {!overflow && <div className="mt-18 h-[900px] w-[1640px]  overflow-y-scroll   ">
              <p className=" mb-6 text-4xl font-bold  text-gray-500">Students also Bought</p>
              {already?.map((item) => <div className=" flex items-center justify-around border-b-2 w-[1500px] border-gray-300  m-4 p-4 text-xl" key = {item.id}>
                
                <img className="w-50" src = {item.image_304x171}  />
               <div className="m-2 p-2  font-lg font-bold"> <p className="w-[400px]">{item.title}</p>
               
               
              <div className={`w-36 mt-2 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10 ${item?.bestseller_badge_content?.badge_text === "Bestseller" ? " bg-green-400" : "bg-amber-400"}  text-black  border font-stretch-110%  border-amber-300`}>{  item?.bestseller_badge_content?.badge_text || "Premium" }   </div>   
               
               </div>
               <div className="m-2 p-2 text-amber-600 font-semibold">{item.avg_rating.toFixed(1)} 🌟</div>
               <div className="m-2 p-2 font-extralight">{item?.num_subscribers?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
               <div className="cursor-pointer   h-14 pt-4  font-bold  text-center rounded-2xl border border-amber-600 hover:bg-amber-400">
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 128 128"
  width="50"
  height="24"
>
  <path
    d="M38.4 63.3s9.2-6.6 15.3-15.7c5.9-8.7 8.8-15.2 8.8-15.2s2.5-8.5.6-17.7c-1-5 4.3-8 10.7-5.9 5.1 1.6 7.5 13 7.9 15.9 1.9 14.2-4.5 28.9-4.5 28.9H115s13.4-.3 13 8.2c-.5 9.8-16.3 9.4-16.3 9.4s10.5 1.4 10.5 8.8c-.1 7.4-12.8 9.2-12.8 9.2s9.2 1.7 8.6 7.6c-.6 5.5-11.4 7.4-11.4 7.4s6.7 1.8 5.7 8.1c-.8 4.9-8.2 4.6-8.2 4.6l-65.5-.1V63.3zm-2.6-2.7v59.3H5.2L0 60.6h35.8zm-8.9 46.9c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 .1 5.4-2.4 5.4-5.4z"
    fill="#231f20"
  />
</svg>

 </div>
                </div>)
                }
            </div>}
         </div>


         <div className=" mt-11 w-96 h-[720px] border border-amber-500  ">
            <img className=" " src={courseData.image_480x270} alt="Course Thumbnail" />
            <h1 className="font-stretch-expanded font-serif font-bold text-3xl text-cyan-200 m-4 p-2 flex mt-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="48.001" height="48.002"><g fill="white"><path d="M47.928 41.15v-.02l-3.8-7.6V3.635A3.641 3.641 0 0 0 40.485 0H7.515a3.64 3.64 0 0 0-3.636 3.635v29.891l-3.8 7.6v.02a.713.713 0 0 0-.073.3v2.91A3.641 3.641 0 0 0 3.636 48h40.728A3.642 3.642 0 0 0 48 44.365v-2.91a.7.7 0 0 0-.072-.305zM5.335 3.637a2.186 2.186 0 0 1 2.182-2.182h32.97a2.185 2.185 0 0 1 2.182 2.182v29.334H5.335zm-.278 30.789h37.888l3.151 6.3H1.905zm41.49 9.939a2.185 2.185 0 0 1-2.182 2.182H3.637a2.185 2.185 0 0 1-2.182-2.182v-2.182h45.091v2.182z"/><path d="M20.607 45.092H27.4a.728.728 0 1 0 0-1.456h-6.793a.728.728 0 0 0 0 1.456zM21.281 7.42a.727.727 0 0 0-1.164.58v14.547a.727.727 0 0 0 .728.726.732.732 0 0 0 .437-.145l9.7-7.273a.726.726 0 0 0 0-1.162zm.291 13.672V9.455l7.758 5.818zM38.547 28.123h-5.293a.727.727 0 0 0 0 1.454h5.293a.727.727 0 1 0 0-1.454zM29.375 26.184a.726.726 0 0 0-.727.727v1.213H9.457a.727.727 0 1 0 0 1.454h19.191v1.213a.728.728 0 0 0 1.455 0v-3.879a.727.727 0 0 0-.728-.728z"/></g></svg>
              
              <p className="ml-4">{courseData.content_info}</p>
              </h1> 
            <div className="border  text-white flex">
              
              <div onClick={() => {setIsPersonal(true)}} className={`cursor-pointer w-1/2 h-20 ${ isPersonal ? "bg-amber-500 text-black" : " text-white" } text-center pt-5 text-shadow-black text-3xl font-stretch-125%`} >Personal </div>
              <div onClick={() => {setIsPersonal(false)}} className={`cursor-pointer w-1/2 h-20 ${!isPersonal ? "bg-amber-500 text-black" : "text-white"}  text-center pt-5 text-shadow-black text-3xl font-stretch-125%`}>Teams</div>
            </div>
           
            {isPersonal ? <Personal courseData = {courseData}  courseData2 = {courseData2} courseData3 = {courseData3} /> : <Teams/>}
            
         </div>
   </div>
}

export default CourseInfo;

