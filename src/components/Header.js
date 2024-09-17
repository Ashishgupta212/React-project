import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";


const Header = () => {

   const[btnNameReact,SetbtnNameReact] =  useState("Sign In");

     return (
         <div className="flex justify-between bg-gray-300 items-center h-[130px]">
             <div className="header-logo">
                <img className="w-30 h-28" src="https://i.pinimg.com/736x/39/a9/62/39a962d2dd225d24c62cb97112ff8523.jpg" alt="logo"/>
             </div>
             <div className="flex">
                <input type= "text" className="w-80 rounded-tl-md rounded-bl-md h-10 border-2 border-black" />
                <button className="w-40 font-bold h-10 border-2 border-black rounded-tr-md rounded-br-md hover:bg-slate-500" >Search</button>
             </div>
             <div className="flex space-x-7 mr-20 font-extrabold "> 
                <Link className="text-2xl hover:bg-red-500 " to="/Offer">Offer</Link>  
                <Link className="text-2xl hover:bg-red-500" to="/help">Help</Link>
                <Link className="text-2xl hover:bg-red-500" to="/Sign" onClick={()=>
                  {
                     btnNameReact=="Sign In" ?
                     SetbtnNameReact("Sign Out"):
                     SetbtnNameReact("Sign In")
                  }
                }>{btnNameReact}</Link>
                <Link className="text-2xl hover:bg-red-500" to="/Cart">Cart</Link> 
             </div>
        </div>
     );
 };

export default Header;