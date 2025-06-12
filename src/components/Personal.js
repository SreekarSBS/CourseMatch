import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";



const Personal = ({courseData, courseData2 , courseData3}) => {
  
    const [isAdded , setIsAdded] = useState(false);
    
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
   const handleCart = () => {
    const merged = {...courseData, ...courseData2};
   { ! cartItems.find((item) => item.id === merged.id) && (dispatch(addItem(merged)));}
  setIsAdded(true)
   
   if(isAdded) alert("Item already added to cart");
   
  
    
   }
   const discount =Math.round((((courseData?.price_detail?.amount - courseData3?.buy_button?.button?.payment_data?.purchasePrice?.amount)/courseData?.price_detail?.amount)*100))
 return <div className= "h-[720px] ">
    <span className="flex">
<p className="font-stretch-expanded font-serif font-bold text-3xl  m-4 p-2  mt-4">{courseData3?.buy_button?.button?.payment_data?.purchasePrice?.price_string}</p>
<p className=" text-gray-400 line-through font-stretch-expanded font-serif font-bold text-2xl  my-4 p-2  mt-4">{courseData?.price}  </p>
<p className="font-stretch-expanded  font-bold text-amber-600 text-xl  my-4 p-2  mt-4">({discount } % off)</p>
</span>
 <div className="flex mt-[-15px] ">
 <div onClick = {handleCart} className="cursor-pointer text-xl m-4 p-4  w-4/6 font-bold font-stretch-105% text-center rounded-2xl border border-amber-600 hover:bg-amber-400">
 <p className="">Add To Cart</p>
 </div>
 <div className="cursor-pointer  text-xl m-4 p-4 w-2/6 font-bold font-stretch-105% text-center rounded-2xl border border-amber-600 hover:bg-amber-400">
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
 

 <div className={`cursor-pointer  text-xl mx-4 my-2 p-4  font-bold font-stretch-105% text-center rounded-2xl border border-amber-600 hover:bg-amber-400` }>Buy Now</div>
 <p className="text-gray-400 text-lg text-center " >30 Day Money-Back Guarantee</p>
 <p className="text-gray-400 text-lg text-center " >Full Lifetime access</p>
 </div>
}

export default Personal;