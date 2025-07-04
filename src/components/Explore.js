import { useEffect, useState } from "react";
import { NAVIGATE } from "../utils/constants";
import SubExplore from "./SubExplore";


const Explore = () => {
    const [ navigationList, setNavigationList] = useState();
    const [hoveredCategory,sethoveredCategory] = useState();
    useEffect(() => {
        fetchData();
    },[])

    const fetchData= async() => {
        const data = await fetch(NAVIGATE);
        const jsonData = await data.json();
        setNavigationList(jsonData["ud-main"]?.items)
        console.log(navigationList);
    }

    return <div className="hidden group-hover:block z-50 bg-gray-100 border rounded-lg  ml-[-23px]  w-96  absolute pt-4 ">
      {navigationList?.map((category) => {
        return <div className="group relative flex justify-between mx-2 p-2 hover:bg-gray-200 z-50" key = {category.id}

                    onMouseEnter={() => sethoveredCategory(category)}
                    onMouseLeave={() => sethoveredCategory(null)}
                >
            
               
                {category.sd_tag.title}
               
                
            <div className="">»
                
            </div>
            {hoveredCategory?.id === category.id && (
            <SubExplore category={hoveredCategory} />
          )}
            </div>
      })}
      
    </div>
}

export default Explore;