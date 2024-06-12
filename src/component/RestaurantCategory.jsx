import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  

	console.log("RestaurantCard",data);
    const[showItems,setShowItems]=useState(false)
    const handleClick = ()=>{
        setShowItems(!showItems)
    }
	// console.log(data);
	return (
		<div>
			{/* Header */}
			<div className="w-[65rem]  mx-auto p-4 shadow-2xl my-4 bg-slate-100">
				<div className="flex justify-between " onClick={handleClick}>
					<span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
					<span>⬇️</span>
				</div>
            {
                showItems&&<ItemList items={data.itemCards}/>
            }

			</div>
		</div>
	);
};

export default RestaurantCategory;
