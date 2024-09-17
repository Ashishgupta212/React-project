const RestaurantMenu = ({menudata}) =>{
     const{
          imageId,
          text
     }=menudata;

     return(
     <div className="mt-10">
          
          <img  className="w-[500px] h-[400px]"
          src={
               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
               imageId}
          />
          {/* <h3 className="font-bold">{text}</h3> */}
     </div>
     
)

};

export default RestaurantMenu;