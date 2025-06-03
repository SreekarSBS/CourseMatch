import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter } from "react-router";
import Body from "./components/Body";


const AppLayout  = () => {
    return <div>
        <BrowserRouter>
        <Header/>
        <Body/>
        </BrowserRouter>
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

