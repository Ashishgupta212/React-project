import useResturantmenu from "../utils/useResturantmenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantinfo = () => {
    const { resid } = useParams();
    const Resinfo = useResturantmenu(resid);

    // Safely destructuring the data for name and city
    const { name, city,costForTwo,avgRating} = Resinfo?.cards?.[2]?.card?.card?.info || {};

    // Extracting item categories (e.g. ItemCategory)
    const itemCategory = Resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(element => element?.card?.card?.["@type"]?.includes("ItemCategory")) || [];

    console.log("Item Category:", itemCategory);

    return (
        <div className="mt-8 ">
            <div className="text-center border-4 border-gray-400 shadow-2xl p-4 ml-[500px] w-[50%]">
            <h2 className="m-2 font-extrabold text-2xl">Name: {name}</h2>
            <h3 className="m-2 font-bold text-lg">City: {city}</h3>
            <h4 className="m-2 font-bold text-lg ">avgRating: {avgRating}</h4>
            <h5 className="m-2 font-bold text-lg" >costForTwo: {costForTwo/100}</h5>
            </div>
            {itemCategory.map((itemCategory) =>(<RestaurantCategory data ={itemCategory?.card?.card}/>))}
        </div>
    );
}

export default Restaurantinfo;
