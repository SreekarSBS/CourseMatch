import useBoughtTogether from "../utils/useBoughtTogether";

const BoughtTogether = ({id}) => {
    const FBTogether = useBoughtTogether(id)
    
   
 return (
    <div className=" border border-gray-300  mt-16  w-[1000px]">
        <div className="text-4xl m-4 p-4  font-bold text-gray-500">Frequently Bought Together</div>
        <div className="m-4 p-4">
        {FBTogether?.map((item,index) => {
            return( <div key = {item.id} className=" ">
                <div className=" p-4 mx-4 my-6 text-2xl flex relative" >
                    <img src = {item.image_304x171} /> 
                    <div>
                        <div className="m-2  px-2 text-2xl font-bold">{item.title}</div>
                        <div className="m-2 px-2 font-light text-xl text-gray-500">{item.visible_instructors.map((sir) => sir.title).join(" | ")}</div>
                        <div className="m-2 px-2 text-xl font-stretch-semi-condensed  text-amber-600">{item.rating.toFixed(2)} 🌟</div>
                      
                    </div>
                    <div></div>
                </div>
                { index+1 != FBTogether.length && <div className="z-50 shadow-2xl mt-[-44px] ml-[145px] flex justify-center items-center   w-16 rounded-4xl h-16 absolute"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
  <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" />
</svg>
</div>}
                </div>
                    )
            })}
            </div>
    </div>
 )
}

export default BoughtTogether;