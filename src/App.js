import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";
import Business from "./components/Business";
import Explore from "./components/Explore";
import { RouterProvider } from "react-router-dom";

// Outlet is used to render the ((child components)) in the parent component.
export const AppLayout  = () => {
    return <div>
      
        <Header/>
        <Outlet/>
      
    </div>
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
            element : <Body/>
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
        }
    ]

},])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);

