import { useEffect, useState } from "react"

const useReviews = (id) => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetchData();
    },[id])

    const fetchData = async() => {
        const data = await fetch("https://www.udemy.com/api-2.0/courses/"+id+"/reviews/?courseId="+id+"&page=1&is_text_review=1&ordering=course_review_score__rank,-created&fields[course_review]=@default,response,content_html,created_formatted_with_time_since&fields[user]=@min,image_50x50,initials,public_display_name,tracking_id&fields[course_review_response]=@min,user,content_html,created_formatted_with_time_since")
        const jsonData = await data.json();
        setReviews(jsonData.results)
    }
    return reviews;
}

export default useReviews