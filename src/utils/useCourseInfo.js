import { useEffect, useState } from "react";


const useCourseInfo = (id) => {
    const [courseInfo , setCourseInfo] = useState([]);
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.udemy.com/api-2.0/courses/"+id+"/?context=landing-page&fields%5Bcourse%5D=%40default%2Cdiscount%2Cnum_published_lectures%2Ccontent_info%2Cnum_subscribers%2Cheadline%2Cinstructional_level_simple%2Cavg_rating%2Cnum_reviews%2Cbuyable_object_type%2Ccontent_info%2Cis_wishlisted%2Crating%2Cimage_100x100%2Cis_recently_published%2Ccaption_locales%2Ccaption_languages%2Clocale%2Cis_in_user_subscription%2Cis_in_premium&filter_hq_courses=true&ordering=lang%2C-course_performance__revenue_30days&organizationCoursesOnly=false&page=2&page_size=4&subcontext=morefrominstructor")
        const jsonData = await data.json()
        setCourseInfo(jsonData)
        console.log("Course Info:", jsonData);
        
    }
    return courseInfo;
  
}

export default useCourseInfo;