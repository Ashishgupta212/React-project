import ReactDOM from "react-dom/client";
import Swiggy from "./src/components/Swiggy";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Help from "./src/components/Help";
import Offer from "./src/components/Offer";
import Cart from "./src/components/Cart";
import Sign from "./src/components/Sign";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Restaurantinfo from "./src/components/Restaurantinfo";


const App = () => {
     return (
        <RouterProvider router={appRouter}>
            <Swiggy/>
        </RouterProvider>
     );
 };

 const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <Swiggy/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path:'/help',
                element: <Help/>
            },
            {
                path : "/Offer",
                element: < Offer />
        
            },
            {
                path : "/Cart",
                element: < Cart />
            },
            {
                path: "/Sign",
                element:< Sign/>
            },
            {
                path: "/restaurants/:resid",
                element: <Restaurantinfo/>
            }
        ],
        errorElement:<Error/>
    },
    
 ]);
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App/>);