


const CardOnHover = ({course}) => {
    const date = new Date(course.last_update_date)
    const options = { month: 'long', year: 'numeric' };
    
    return (
        <div className="hidden border bg-gray-50 absolute group-hover:block 2xl:mt-[-250px]   w-[455px]  h-[650px] 2xl:ml-[300px] overflow-x-hidden xl:m-10 2xl:m-6 cursor-pointer shadow-2xl rounded-lg hover:border-amber-600 ">
            <div className="mx-4 my-2 p-4 text-2xl font-bold">{course.title}</div>
            <span className="flex justify-center ">
            <div className="w-36  text-center pt-2  rounded-2xl h-10 font-stretch-110%   text-black bg-amber-400">{course?.badges?.[0]?.badge_text || "Premium"} </div>
            <div className="w-36 max-h-14 overflow-hidden pt-2 text-center ml-4 rounded-2xl h-10  text-black  border font-stretch-110%  border-amber-300">{course?.badges?.[0]?.context_info?.label?.display_name || course?.badges?.[0]?.context_info?.label?.title }    </div>   
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
         
         {course.objectives_summary.map((objective) => <div className="flex"> <p className="m-4 pl-8 ">🌟</p><div className="m-4 text-md">{objective}</div></div>)}
        
        </div>
    )
}
export default CardOnHover;