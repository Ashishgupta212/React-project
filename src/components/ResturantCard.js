const RestaurantCard = ({ resData }) => {
     const {
         cloudinaryImageId,
         name,
         cuisines,
         costForTwo,
         avgRating,
     } = resData;
 
     return (
         <div className="w-[400px] h-[500px] border-2 border-black m-5 rounded-lg ">
             <img 
                 className="w-[400px] h-72 bg-cover rounded-lg" 
                 alt="res-logo" 
                 src = {
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                    cloudinaryImageId
                 }
             />
             <h3 className="text-[24px] m-2 font-extrabold ">{name}</h3>
             <h4  className="text-[18px] m-2 font-bold">{cuisines.join(" , ")}</h4>
             <h4 className="text-[18px] m-2 font-bold">Rating: {avgRating}</h4>
             <h4 className="text-[18px] m-2 font-bold">Cost for Two: {costForTwo}</h4>
         </div>
     );
 };

export default RestaurantCard;