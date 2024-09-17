import Itemlist from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {

  return (
    <div className="m-7">
      <div className="border-2 border-black w-[50%] ml-[500px] cursor-pointer" >
        <span className="text-[24px] font-bold">{data.title}</span>
        <span className="ml-2">⬇️</span> {/* Adjusted the margin */}
      </div>

      <div><Itemlist items={data?.itemCards} /></div>
    </div>
  );
};

export default RestaurantCategory;
