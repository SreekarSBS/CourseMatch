import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => { 
    // I NEEDED THE VALUES OF ADDED CART ITEMS , AND THEREFORE , I SUBSCRIBED TO THE STORE USING SELECTOR
const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems);
const [total,setTotal ] = useState(0);

useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price_detail.amount, 0);
    setTotal(totalPrice);
  }, [cartItems]);
  
  // I NEEDED TO DISPATCH THE ACTION TO REMOVE THE ITEM FROM THE CART
  const dispatch = useDispatch();
  const handleClick = (id) =>{
    dispatch(removeItem(id))
  }

  const handleClear = () => {
    dispatch(clearCart())
  }

  
    return cartItems.length === 0 ? <div><h1 className="p-8 m-8 text-7xl font-bold text-gray-600">Shopping Cart</h1> <h1 className="text-2xl m-8 p-8">Your cart is empty</h1></div> : 
    <div>
        <h1 className="p-8 m-8 ml-80 text-7xl font-bold text-gray-600">Shopping Cart</h1>
        <div className="Course-container ">
        <div className="flex justify-evenly ">
            <div className="Cart-items ">
            {
                
            cartItems.map((course) => {
               
                return ( <div key = {course.id }>
                    <hr className="ml-8 border-gray-300 w-8/12"/>
                    <div  className="flex m-6 p-6 ml-48 2xl:w-8/12 xl:w-6/12 xl:m-0 xl:ml-16">
                         
                        <div><img src= {course.image_240x135} /> </div>
                        <div  >
                            <h1 className="ml-8  text- black text-2xl font-semibold">{course.title}</h1>
                            <h2 className="ml-8  text-lg">By { course?.visible_instructors?.map((teacher) => teacher.display_name).join(" | ")}</h2>
                            <div className="flex">
                            <div className="w-48  text-center pt-1 ml-8 rounded-2xl h-8 font-stretch-110% mt-2  text-black bg-amber-500">
                                {course?.context_info?.category?.title}
                                
                            </div>
                            <p className="pt-3 ml-4 font-bold text-shadow-black text-amber-500" >{course?.rating?.toFixed(2)}🌟 </p>
                            <p className="pt-3 pl-4 text-gray-500">({course?.num_reviews?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ) ratings</p>
                            
                           </div>
                           <div className="flex">
                           <p className="ml-8 p-4 text-gray-400">{course.content_info}</p>
                    
                           <p className="ml-4 p-4 text-gray-400">{course.num_published_lectures} Lectures</p>
                           </div>
                        </div>
                        <div>
                        <p className="font-stretch-expanded font-serif font-bold text-2xl   ml-96  flex ">{course.price}</p>
                        
                        <button onClick={() => handleClick(course.id)} className="cursor-pointer bg-red-500 rounded-lg h-10 w-26 ml-96 mt-28 text-white">X Remove</button>
                        </div>
                    </div>
                    
                   </div>
                )
            })
            }
           
            </div>
            <div className="  w-2/12  mt-[-60px]  2xl:ml-[-460px]  xl:ml-[-360px] Total-amount">
                <h1 className="text-xl text-gray-500 mx-4 mt-4 px-4">Total:</h1>
                <h1 className="text-3xl ml-6"> ₹{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                <button className="text-white bg-amber-500 rounded-2xl w-full m-4 p-4">Proceed to checkout →</button>
                <p className="ml-6 text-gray-400"> You wont be charged yet.</p>
                <hr className="my-4 border-gray-300 " />
                
                <button className="text-white bg-amber-500 rounded-2xl w-full m-4 p-4">Apply Coupon</button>

                <button onClick={() => handleClear()} className="cursor-pointer rounded-4xl bg-red-500 text-3xl h-20 w-36 ml-28 mt-28 text-shadow-red-600">🗑️Clear</button>
            </div>
        </div>
        </div>
    </div>
}
export default Cart;