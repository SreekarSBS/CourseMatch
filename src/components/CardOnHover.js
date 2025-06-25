


const CardOnHover = ({course,index}) => {
    const date = new Date(course.last_update_date)
    const options = { month: 'long', year: 'numeric' };
  
    return (
        <div className={`z-10 hidden absolute  border border-amber-400 bg-gray-50 absolute group-hover:block ${((index) % 5 ) === 3 || ((index) % 5 ) === 4 ? "2xl:ml-[-300px]" : "2xl:ml-[300px]"}  2xl:mt-[-350px]   w-[455px]  h-auto   overflow-x-hidden xl:m-10 2xl:m-6 cursor-pointer shadow-2xl rounded-lg hover:border-amber-600 box-border `}>
            <div className="mx-4 my-2 p-4 text-2xl font-bold">{course.title}</div>
            <span className="flex justify-center ">
            <div className="w-36  text-center pt-2  rounded-2xl h-10 font-stretch-110%   text-black bg-amber-400">{course?.badges?.[0]?.badge_text || "Premium"} </div>
            <div className="w-36 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10  text-black  border font-stretch-110%  border-amber-300">{course?.badges?.[0]?.context_info?.label?.display_name || course?.instructional_level_simple|| course?.badges?.[0]?.context_info?.category?.title || "Bestseller" }    </div>   
         </span>
         
         <div className="mx-4 p-4  text-lg font-extralight font-stretch-110% text-green-700">Updated {date.toLocaleDateString('en-us',options)}</div>
         <span className="flex justify-evenly">
            
         <div className="mx-1  text-lg font-extralight font-stretch-110% text-gray-400"> {course.content_info_short}</div>
         .
         <div className="mx-1  text-lg font-extralight font-stretch-110% text-gray-400"> {course.instructional_level}</div>
         .
         {course.has_closed_caption &&<div className="mx-1  text-lg font-extralight font-stretch-110% text-gray-400">Subtitles  </div>}
         </span>

         <div className="my-2 mx-4 p-2 text-xl font-light ">{course.headline}</div>
         
         {course.objectives_summary.map((objective,index) => <div key={index} className="flex"> <p className="m-4 pl-8 ">🌟</p><div className="m-4 text-md">{objective}</div></div>)}
         <div className="flex mt-[-15px] ">
 <div  className="cursor-pointer text-xl m-4 p-4  w-4/6 font-bold font-stretch-105% text-center rounded-2xl border border-amber-600 hover:bg-amber-400 ">
 <p className="">Add To Cart</p>
 </div>
 <div className="cursor-pointer  text-xl m-4 p-4 w-2/6 font-bold font-stretch-105% text-center rounded-xl border border-amber-600 hover:bg-amber-400">
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 128 128"
  width="78"
  height="34"
>
  <path
    d="M38.4 63.3s9.2-6.6 15.3-15.7c5.9-8.7 8.8-15.2 8.8-15.2s2.5-8.5.6-17.7c-1-5 4.3-8 10.7-5.9 5.1 1.6 7.5 13 7.9 15.9 1.9 14.2-4.5 28.9-4.5 28.9H115s13.4-.3 13 8.2c-.5 9.8-16.3 9.4-16.3 9.4s10.5 1.4 10.5 8.8c-.1 7.4-12.8 9.2-12.8 9.2s9.2 1.7 8.6 7.6c-.6 5.5-11.4 7.4-11.4 7.4s6.7 1.8 5.7 8.1c-.8 4.9-8.2 4.6-8.2 4.6l-65.5-.1V63.3zm-2.6-2.7v59.3H5.2L0 60.6h35.8zm-8.9 46.9c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 .1 5.4-2.4 5.4-5.4z"
    fill="#231f20"
  />
</svg>

 </div>
 </div>
        </div>
    )
}
export default CardOnHover;