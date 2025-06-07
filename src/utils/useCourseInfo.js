import { useEffect, useState } from "react";


const useCourseInfo = (id) => {
    const [courseInfo , setCourseInfo] = useState([]);
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.udemy.com/api-2.0/courses/" + id)
        const jsonData = await data.json()
        setCourseInfo(jsonData)
    }
    return courseInfo;
  
}

export default useCourseInfo;