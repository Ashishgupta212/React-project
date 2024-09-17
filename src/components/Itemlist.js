
const Itemlist = ({items}) =>{
     console.log("items:-",items)
     return(
          <div className="border-2 border-black w-[50%] ml-[500px]">
               {items?.map((item) =>
               <div key={item.card.info.id} className="border-2 shadow-md">
                    <div className="text-2xl font-bold m-4">{item.card.info.name}</div>
                    <div className="text-xl  font-semibold m-4 text-red-600">{"Price"}- 
                         ₹ {item.card.info.price ? 
                         item.card.info.price /100 :
                         item.card.info.defaultPrice /100}</div>
                    <p className="text-xl m-4 font-medium">
                         {item.card.info.description}
                    </p>



               </div>
                    )}
          
          </div>
     )
};


export default Itemlist;