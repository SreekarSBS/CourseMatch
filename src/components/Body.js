import { useEffect, useState } from "react"
import CourseCard from "./CourseCard"
 import {COURSES_API} from "../utils/constants"
import {PRICES1} from "../utils/constants"
import {PRICES2} from "../utils/constants"
import {PRICES3} from "../utils/constants"
import Shimmer from "./Shimmer"
import EmblaCarousel from "./EmblaCarousel"
import { Link, useOutletContext } from "react-router-dom"
import Footer from "./Footer"





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

  
  const [filteredCourses ,setFilteredCourses,allCourses ,setAllCourses] = useOutletContext()
  const [coursePrices ,setCoursePrices] = useState();
  
  useEffect(() => {
    fetchData();
    fetchPrices();
  },[])

  

  const fetchData = async () => {
    const data = await fetch(COURSES_API);
    const jsonData = await data.json();
    setAllCourses(jsonData?.units?.[0]?.items)
    setFilteredCourses(jsonData?.units?.[0]?.items)
  }



  const fetchPrices = async () => {
    const data1 = await fetch(PRICES1);
    const data2 = await fetch(PRICES2);
    const data3 = await fetch(PRICES3);

    const jsonData1 = await data1.json();
    const jsonData2 = await data2.json();
    const jsonData3 = await data3.json();


    setCoursePrices({...jsonData1?.courses ,...jsonData2?.courses, ...jsonData3?.courses});
   
    
    
  }
 
  
  if(!filteredCourses || filteredCourses.length === 0 ) {
    return <Shimmer filteredCourses = {filteredCourses} />
  }

    return <div className="">
         <div className="p-24">
      
      { filteredCourses? <EmblaCarousel /> : <Shimmer /> }
    </div>

        <div className="cards-container flex justify-evenly py-38 flex-wrap  overflow-x-scroll">

      { filteredCourses.map((course,index) =>{
         
            return <Link key ={course.id} to = {"/courses/" + course.id }><CourseCard index = {index}  course = {course} prices = {{coursePrices}} /></Link> 
      } )}

        
<Footer  />
        </div>
    </div>
}

export default Body;

