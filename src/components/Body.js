import { useEffect, useState } from "react"
import CourseCard from "./CourseCard"
 import {COURSES_API} from "../utils/constants"
import {PRICES1} from "../utils/constants"
import {PRICES2} from "../utils/constants"
import {PRICES3} from "../utils/constants"
import Shimmer from "./Shimmer"
import EmblaCarousel from "./EmblaCarousel"
/**
 * 
 * Body
 *  - search bar
 *  - cards container
 *    -cards
 * 
 * 
 */




const Body = () => {

  const [allCourses ,setAllCourses] = useState([]);

  const [coursePrices ,setCoursePrices] = useState();

  useEffect(() => {
    fetchData();
    fetchPrices();
  },[])

  

  const fetchData = async () => {
    const data = await fetch(COURSES_API);
    const jsonData = await data.json();
    setAllCourses(jsonData?.units?.[0]?.items)
   
  }



  const fetchPrices = async () => {
    const data1 = await fetch(PRICES1);
    const data2 = await fetch(PRICES2);
    const data3 = await fetch(PRICES3);

    const jsonData1 = await data1.json();
    const jsonData2 = await data2.json();
    const jsonData3 = await data3.json();


    setCoursePrices({...jsonData1?.courses ,...jsonData2?.courses, ...jsonData3?.courses});
    
   
    if(!allCourses || allCourses.length === 0 ) {
      return <Shimmer courses = {allCourses}/>
    }
    
  }


    return <div className="">
         <div className="p-24">
      
      <EmblaCarousel />
    </div>

        <div className="cards-container flex flex-wrap">

      { allCourses.map((course) =>{
         
            return <CourseCard key ={course.id}  course = {course} prices = {{coursePrices}} />
      } )}

        

        </div>
    </div>
}

export default Body;