import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const Swiggy = () => {
     return    <div>
                    <Header />
                    <Outlet/>
               </div>
}

export default Swiggy;