import { LOGO_URL } from "../utils/constants";

const Teams = () => {
    return <div >
    <div className="flex ml-5">
       <img className="w-58 my-4 mx-2 py-4 " src ={LOGO_URL} />
       <p className="text-xl my-4 pb-4 font-bold py-7 ">Business</p>
       </div>
       <h1 className="px-2 mx-2 text-xl">Subscribe to this course and 30,000+ top-rated CourseMatch's courses for your organization</h1>
       <button className=" m-4 p-4 text-white text-xl rounded-2xl bg-amber-600">Try CourseMatch Business</button>
    </div>
}

export default Teams;