import { useEffect, useState } from "react";

const useBoughtTogether = (id) => {
    const [FBTogether,setFBTogether] = useState()

    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() => {
        const data = await fetch("https://www.udemy.com/api-2.0/discovery-units/?context=clp-bundle&from=0&page_size=3&item_count=12&course_id="+id+"&source_page=course_landing_page&locale=en_US&currency=inr&navigation_locale=en_US&funnel_context=landing-page")
        const jsonData = await data.json();
        setFBTogether(jsonData?.units?.[0]?.items)
    }
return FBTogether
}

export default useBoughtTogether;