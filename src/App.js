import React, {  useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";
import Business from "./components/Business";
import Explore from "./components/Explore";
import { RouterProvider } from "react-router-dom";
import CourseInfo from "./components/CourseInfo";
import appStore from "./utils/appStore";
import { Provider, useSelector } from "react-redux";






// Outlet is used to render the ((child components)) in the parent component.
 const AppLayout  = () => {
    
    const [filteredCourses ,setFilteredCourses] = useState([]);
    const [allCourses ,setAllCourses] = useState([]);
 
    const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    return (
   
    <div>
      
        <Header allCourses = {allCourses} setFilteredCourses = {setFilteredCourses}/>
        <Outlet context = {[filteredCourses,setFilteredCourses,allCourses ,setAllCourses]} />
      
    </div>

    )
}















// Routing is done usign AppRouter
// Array of objects is used to define the routes

const appRouter = createBrowserRouter([
    {
    path : "/",
    element : <AppLayout/>,
    children : [
        {
            path : "/",
            element : <Body  />
        },
        {
            path : "/Explore",
            element : <Explore/>
        },
        {
            path : "/Business",
            element : <Business/>
        },
        {
            path : "/About",
            element : <About/>
        },
        {
            path : "/Cart",
            element : <Cart/>
        },
        {
            path : "/courses/:id",
            element : <CourseInfo/>
        }
    ]

},])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
  

