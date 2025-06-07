
// We will be using a custom hook.

import { useParams } from "react-router-dom";
import useCourseInfo from "../utils/useCourseInfo";
import useCourseInfo2 from "../utils/useCourseInfo2";

const CourseInfo = () => {
    const {id} = useParams();
    
    const courseData = useCourseInfo(id);
    const courseData2 = useCourseInfo2(id);

    const instructors = courseData.visible_instructors?.map((item) => item.display_name );
   
    
   return <div className="border h-96 bg-black flex">
         <div className=" ml-[389px] mt-11 w-[640px] h-96 " >
           <h1 className=" m-6 p-6 text-cyan-200 font-extralight text-3xl font-serif">{courseData.title}</h1>
           <div className="flex">
          <div className="w-48 text-center pt-2 ml-16 rounded-2xl h-10 font-stretch-110%  text-black bg-amber-400">{courseData2?.context_info?.category?.title}</div>
          <div className="w-48 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10 text-white  border font-stretch-110%  border-amber-300">{courseData2?.context_info?.label?.title || courseData2?.visible_instructors?.[0]?.job_title}</div>
         </div>
           <h1 className=" m-4 p-4 ml-12 text-lg font-serif text-gray-300">Created By {instructors?.join(" | ")} </h1>
            
         </div>
         <div className=" mt-11 w-96 h-[720px] border border-amber-300 ">
            <img className="border " src={courseData.image_480x270} alt="Course Thumbnail" />
         </div>
   </div>
}

export default CourseInfo;