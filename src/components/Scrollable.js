import React, { useState } from 'react'
import Personal from './Personal'
import Teams from './Teams'

const Scrollable = ({courseData3,courseData,courseData2,isVisible}) => {
    const[isPersonal,setIsPersonal] = useState(true)
  return (
    <div
      className={`mt-11 w-96 h-[720px] ml-[1299px] text-black border border-amber-500 fixed transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    > <img className=" " src={courseData.image_480x270} alt="Course Thumbnail" />
            <h1 className="font-stretch-expanded font-serif font-bold text-3xl text-cyan-200 m-4 p-2 flex mt-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="48.001" height="48.002"><g fill="white"><path d="M47.928 41.15v-.02l-3.8-7.6V3.635A3.641 3.641 0 0 0 40.485 0H7.515a3.64 3.64 0 0 0-3.636 3.635v29.891l-3.8 7.6v.02a.713.713 0 0 0-.073.3v2.91A3.641 3.641 0 0 0 3.636 48h40.728A3.642 3.642 0 0 0 48 44.365v-2.91a.7.7 0 0 0-.072-.305zM5.335 3.637a2.186 2.186 0 0 1 2.182-2.182h32.97a2.185 2.185 0 0 1 2.182 2.182v29.334H5.335zm-.278 30.789h37.888l3.151 6.3H1.905zm41.49 9.939a2.185 2.185 0 0 1-2.182 2.182H3.637a2.185 2.185 0 0 1-2.182-2.182v-2.182h45.091v2.182z"/><path d="M20.607 45.092H27.4a.728.728 0 1 0 0-1.456h-6.793a.728.728 0 0 0 0 1.456zM21.281 7.42a.727.727 0 0 0-1.164.58v14.547a.727.727 0 0 0 .728.726.732.732 0 0 0 .437-.145l9.7-7.273a.726.726 0 0 0 0-1.162zm.291 13.672V9.455l7.758 5.818zM38.547 28.123h-5.293a.727.727 0 0 0 0 1.454h5.293a.727.727 0 1 0 0-1.454zM29.375 26.184a.726.726 0 0 0-.727.727v1.213H9.457a.727.727 0 1 0 0 1.454h19.191v1.213a.728.728 0 0 0 1.455 0v-3.879a.727.727 0 0 0-.728-.728z"/></g></svg>
              
              <p className="ml-4">{courseData.content_info}</p>
              </h1> 
            <div className="border  text-white flex">
              
              <div onClick={() => {setIsPersonal(true)}} className={`cursor-pointer w-1/2 h-20  ${ isPersonal ? "bg-amber-500 text-black" : "bg-black text-white" } text-center pt-5 text-shadow-black text-3xl font-stretch-125%`} >Personal </div>
              <div onClick={() => {setIsPersonal(false)}} className={`cursor-pointer w-1/2 h-20   ${!isPersonal ? "bg-amber-500 text-black" : "bg-black text-white"}  text-center pt-5 text-shadow-black text-3xl font-stretch-125%`}>Teams</div>
            </div>
           
          {isPersonal ? <Personal courseData = {courseData} courseData2 = {courseData2} courseData3 = {courseData3}  /> : <Teams/>}
           
            
         </div>
  )
}

export default Scrollable
