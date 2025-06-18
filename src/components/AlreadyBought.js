import { useState } from "react";
import useCourseInfo4 from "../utils/useCourseInfo4";
import { Link } from "react-router-dom";

const AlreadyBought = ({id}) => {
    const [overflow , setOverflow] = useState(false);
    const already = useCourseInfo4(id);
    const handleOverflow = () => {
        setOverflow(!overflow)
    }
  return <> <div className={`mt-18 ${overflow ?  "h-auto" : "h-[960px]"}  w-[1100px]  ${overflow ?  "overflow-visible" : "overflow-hidden"}   `}>
  <p className=" mb-6 text-4xl font-bold  text-gray-500">Students also Bought</p>
  {already?.map((item) => <Link to = {"/courses/"+item.id} key = {item.id}><div className=" flex items-center justify-around border-b-2 w-[1000px] border-gray-300  m-4 p-4 text-xl" >
    
    <img className="w-50" src = {item.image_304x171}  />
   <div className="m-2 p-2  font-lg font-bold"> <p className="w-[400px]">{item.title}</p>
   
   
  <div className={`w-36 mt-2 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10 ${item?.bestseller_badge_content?.badge_text === "Bestseller" ? " bg-green-400" : "bg-amber-400"}  text-black  border font-stretch-110%  border-amber-300`}>{  item?.bestseller_badge_content?.badge_text || "Premium" }   </div>   
   
   </div>
   <div className="m-2 p-2 text-amber-600 font-semibold">{item.avg_rating.toFixed(1)} 🌟</div>
   <div className="m-2 p-2 font-extralight">{item?.num_subscribers?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
   <div className="cursor-pointer   h-14 pt-4  font-bold  text-center rounded-2xl border border-amber-600 hover:bg-amber-400">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 128 128"
width="50"
height="24"
>
<path
d="M38.4 63.3s9.2-6.6 15.3-15.7c5.9-8.7 8.8-15.2 8.8-15.2s2.5-8.5.6-17.7c-1-5 4.3-8 10.7-5.9 5.1 1.6 7.5 13 7.9 15.9 1.9 14.2-4.5 28.9-4.5 28.9H115s13.4-.3 13 8.2c-.5 9.8-16.3 9.4-16.3 9.4s10.5 1.4 10.5 8.8c-.1 7.4-12.8 9.2-12.8 9.2s9.2 1.7 8.6 7.6c-.6 5.5-11.4 7.4-11.4 7.4s6.7 1.8 5.7 8.1c-.8 4.9-8.2 4.6-8.2 4.6l-65.5-.1V63.3zm-2.6-2.7v59.3H5.2L0 60.6h35.8zm-8.9 46.9c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 .1 5.4-2.4 5.4-5.4z"
fill="#231f20"
/>
</svg>

</div>
    </div></Link>)
    }
 
</div>
 <div onClick={handleOverflow}  className="   w-[1000px] text-center rounded-lg text-amber-600  border border-amber-600 p-4  text-xl font-semibold cursor-pointer hover:bg-amber-50">{ overflow ? "Show less" :"Show more"}</div>
</>
}
export default AlreadyBought