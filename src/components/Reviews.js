import { useParams } from "react-router-dom";
import useReviews from "../utils/useReviews";
import useCourseInfo from "../utils/useCourseInfo";


const Reviews = ({id}) => {
    
    const reviews = useReviews(id)
    const {courseInfo: courseData , loading} = useCourseInfo(id)
  
    console.log(reviews);
    return (
        <div className="mt-14 p-4 w-[1000px] h-auto border ">
            <div>
            <div className="ratings head border-2 flex">
            <p className="p-6 m-4 text-3xl font-bold " >{courseData?.rating?.toFixed(2)}🌟 course rating</p>
            <p className=" p-6 m-4 text-3xl underline  text-gray-600">{courseData?.num_reviews > 1000 ? (courseData?.num_reviews/1000).toFixed(0) + "K" : courseData?.num_reviews?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ratings</p>
            </div>
            <div className="flex border-2"></div>
                <div className="flex flex-wrap  ">
                {reviews.map((item) => {
                    return (
                        <div className=" h-64 w-[430px] m-6 p-6  overflow-hidden border-t-2 mt-12" key={item.id}>
                            <div className="flex justify-evenly">
                            <div className="w-16 h-12 text-2xl pt-2 rounded-b-full xl bg-red-400 font-black text-center ">{item?.user?.initials}</div>
                             <div className=" text-2xl m-2 w-42 text-center font-bold">{item?.user?.name}</div>
                             <div className="text-xl font-semibold font-serif  pt-1 ">{item.rating}🌟</div>
                            </div>
                            <div className="  p-2 text-lg text-zinc-400    ">{item?.created_formatted_with_time_since}</div>
                            <p className="text-xl h-32 text-ellipsis w-[355px] font-extralight">{item.content}</p>
                            
                        </div>
                    )
                })}
            
            </div>
            </div>
        </div>
    )
}

export default Reviews;