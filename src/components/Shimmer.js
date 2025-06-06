const Shimmer = ({courses}) => {
    return <div>
        <div className="search"></div>

        <div className="cards-container flex flex-wrap">

      { courses.map((course) =>{
         
            return <div key = {course.id} className="box bg-black w-[265px] p-2.5  xl:m-10 2xl:m-6 cursor-pointer border-2 border-gray-300 rounded-lg hover:border-amber-600 " ></div>
      } )}

        

        </div>
    </div>
}

export default Shimmer; 