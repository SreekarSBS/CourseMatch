import { useEffect, useState } from "react";

const useCourseInfo2 = (id) => {
    const [courseInfo, setCourseInfo] = useState([]);
    const [loading2 , setLoading2] = useState(true)
    useEffect(() => {
        setLoading2(true)
        fetchData();
    },[id])

    const fetchData = async() => {
       
        const data = await fetch("https://www.udemy.com/api-2.0/courses/"+id+"/?fields[course]=title,context_info,primary_category,primary_subcategory,avg_rating_recent,visible_instructors,locale,estimated_content_length,num_subscribers")
        const jsonData = await data.json();
       
        
        setCourseInfo(jsonData);
        setLoading2(false)
    }

    return {courseInfo,loading2};
}

export default useCourseInfo2;