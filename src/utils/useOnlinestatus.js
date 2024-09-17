import { useEffect,useState } from "react";


const useOnlinestatus = () =>{
      
     const [Onlinestatus, SetOnlinestatus] =  useState(true);

     useEffect(() =>{

          window.addEventListener("offline",() =>{
               SetOnlinestatus(false)});

          window.addEventListener("online",() =>{
               SetOnlinestatus(true)});
     },[]);

     return Onlinestatus;
};

export default useOnlinestatus;