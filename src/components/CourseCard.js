


const CourseCard = (props) => {
  const { course, prices } = props;
  const keys = Object.keys(prices);

  return ( 
    <div className=" box w-[305px] h-96 p-2.5  xl:m-10 2xl:m-6 cursor-pointer border-2 border-gray-300 rounded-lg hover:border-amber-600 " >
      <img
        className="h-40 "
        src={course.image_240x135}
        alt="Course Thumbnail"
      />
 
      <h1 className="font-bold text-md py-4">{course?.title}</h1>

      <h3 className="text-gray-500">{course?.visible_instructors[0]?.title}</h3>
      <h3 className= "">
        {(course?.rating).toFixed(2)} ⭐️ 
       <span className="pl-4">
        
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
