// import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();

	/* use custom hook istead of fetching data directly in the component ,
    the code of fetching data is wriiten in custom hook useRestaurant */
	const resInfo = useRestaurant(resId);

	if (!resInfo || !resInfo.cards) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
		resInfo?.cards[2]?.card?.card?.info;
	// console.log(resInfo?.cards[2]?.card?.card?.info);

	// const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c?.card?.["card"]?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	// console.log("Adil",categories)

	console.log("RestaurantMenu",categories);

	return (
		<div className="text-center">
			<div className="bg-black p-6">
				<div className=" w-[64rem]  flex m-auto">
					<div className="">
						<img
							src={
								"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
								cloudinaryImageId
							}
							alt=""
							className="w-[12rem] h-[12rem] rounded-lg"
						/>
					</div>

					<div className="ml-6 ">
						<h1 className="font-bold my-6 text-2xl text-white text-start">{name}</h1>
						<p className="font-bold text-lg text-gray-400 text-start ">
							{cuisines.join(", ")}
						</p>

						<div className="mt-8 flex p-3 gap-8 items-center">
							<h3 className="text-white text-xl font-bold bg-green-500 p-1 rounded-lg">⭐{avgRating} </h3>
							<h1 className="font-semibold text-xl text-white">|</h1>
							<h3 className="text-white font-semibold text-xl">{costForTwoMessage}</h3>
						</div>
					</div>
				</div>
			</div>

			{/* Accordians */}
			{categories.map((category) => {
				return (
					<RestaurantCategory
						key={category.card.card.title}
						data={category.card.card}
					/>
				);
				
			})}
		</div>
	);
};

export default RestaurantMenu;
