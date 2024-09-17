// import { data } from './utils/resData';
// import { menudata } from "./utils/menudata";
import RestaurantMenu from "./ResturantMenu";
import { useEffect, useState } from "react";
import RestaurantCard  from './ResturantCard';
import {Link} from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';

const Body = () => {
    const [instantMenu,setInstantMenu] = useState(null);
    const [listofResturant, setlistofResturant] = useState(null);
 

const fectchdata = async() => {
    try{
        const response =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const  resData  = await response.json();
        console.log(resData);
        setlistofResturant(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setInstantMenu(resData?.data?.cards?.[0]?.card?.card?.imageGridCards?.info);
        }
    catch(error){
        console.log(error.message)
    }
}
useEffect(()=>{
    fectchdata();
},[]);

const Onlinestatus = useOnlinestatus();

if (Onlinestatus === false) return <h1>your are offline pleases check your internet connection !!</h1> ;


    return (
        <div className="body">
            <div className="text-[30px] font-bold ml-6">
                <h1>What's on your Mind</h1>
            </div>
            <div className="flex">
                {instantMenu && instantMenu?.map(res => <RestaurantMenu key={res.id} menudata={res} />)}
            </div>

            <div className="m-10  ml-32 border-2 border-black w-40 rounded-md bg-gray-300 hover:bg-slate-500">
                <button
                    className="text-[24px]"
                    onClick={() => {
                        const Filteredlist = listofResturant.filter((res) =>
                            res.info.avgRating > 4.2
                        );
                        setlistofResturant(Filteredlist);
                    }}
                >
                    Top Restaurant
                </button>

            </div>

            <div className="ml-32 m-9">
                <h1 className='text-[36px] font-bold'>Restaurant List</h1>
            </div>

            <div className="flex flex-wrap  justify-evenly ml-32 mr-32">
                {listofResturant && listofResturant?.map((res) =>(
                    <Link key = {res.info.id}
                    to = {"restaurants/" + res.info.id}
                    >
                        <RestaurantCard   resData={res.info} />
                    </Link>
                   
              
                ))}
            </div>
        </div>
    );
};

export default Body;
