import CardOnHover from "./CardOnHover";



const CourseCard = (props) => {
  const { course, prices , index } = props;
  const keys = Object.keys(prices);

  return ( 
    <div className=" dm-sans group relative 2xl:w-[345px] 2xl:mx-10 2xl:my-2  box w-[305px] h-96 p-2.5  xl:m-10  cursor-pointer  shadow-2xl border-gray-300 rounded-lg hover:border-amber-600 " >
      <img 
        className="ml-0.5 rounded-lg  "
        src={course.image_480x270}
        alt="Course Thumbnail"
      />
  <CardOnHover course = {course} index = {index} />
      <h1 className="font-bold 2xl:text-lg text-md py-4">{course?.title}</h1>

      <h3 className="text-gray-500">{course?.visible_instructors[0]?.title}</h3>
      <h3 className= "font-bold text-amber-600 text-xl">
        {(course?.rating).toFixed(2)} ⭐️ 
       <span className="pl-4 font-semibold text-gray-400 text-lg">
        
        ({course?.num_reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
        </span> 
      </h3>
      

    
   
    

      {keys.map((idx) => {
        if (course.id == idx) {
          return (
            <div className="flex " key = {idx}>
            <h1  className="text-xl pr-4 text-amber-700">
              ₹{prices[idx].discount_price.amount}
            </h1>
            <h1  className="text-md line-through text-gray-500">
            ₹{prices[idx].list_price.amount}
          </h1>
          </div>
          );
        }
       
      })}
    </div>

    
    
    
  );
};


export default CourseCard;
