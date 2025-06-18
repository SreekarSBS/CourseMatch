import { useEffect, useState } from "react";
import dummy from "./mocks/dummyData.json"

const useCourseInfo4 = (id) => {
     const [already,setAlready] = useState([]);

     useEffect( () => {
       fetchData();
     },[])

     const fetchData = async() => {
        const data = await fetch("https://www.udemy.com/api-2.0/discovery-units/?context=landing-page&from=0&page_size=6&item_count=18&course_id=" +id + "&source_page=course_landing_page&locale=en_US&currency=inr&navigation_locale=en_US&skip_price=true");
        const jsonData = await data.json();
        
          setAlready(jsonData?.units?.[1]?.items || jsonData?.units?.[0]?.items ) 
    
      
        
     }

    return already
}

export default useCourseInfo4