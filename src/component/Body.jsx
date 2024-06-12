import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Restaurant_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
	// console.log(restaurantList)
	let [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [searchText, setSearchText] = useState("");

	const handleClick = () => {
		const filteredList = listOfRestaurant?.filter(
			(res) => res.info.avgRating > 4
		);
		setListOfRestaurant(filteredList);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(Restaurant_URL);

		const jsonData = await data.json();

		setListOfRestaurant(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);

		//  setListOfRestaurant(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false)
		return <h1>Looks like You are Offline,Please Check Your internet</h1>;

	if (listOfRestaurant.length === 0) {
		return <Shimmer />;
	}

	// console.log(listOfRestaurant)

	return (
		<div className="w-[105rem] ml-auto mr-auto">
			{/* <h1 className="text-orange-400">Hello world</h1> */}
			<div className="w-[100%]">
				{/* <div className="flex ml-7"> */}
					<div className="  h-[4rem] w-[50rem] bg-white mt-4 flex mx-auto">
						<input
							placeholder="Search"
							type="text"
							className="ml-2 p-3 border w-[27rem] rounded-l-lg "
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className="bg-yellow-500 w-[10rem] rounded-r-lg font-medium"
							onClick={() => {
								const filteredRestaurant = listOfRestaurant.filter((res) => {
									return res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase());
								});

								setListOfRestaurant(filteredRestaurant);
							}}
						>
							Search
						</button>


						
						<button
								className="bg-green-600 p-3 ml-3 rounded-lg"
								onClick={handleClick}
							>
								Top Rated Restaurant
						</button>
					
					</div>
				{/* </div> */}

				<div className="flex flex-wrap gap-2">
					{listOfRestaurant?.map((restaurant) => {
						return (
							<Link
								className=" card bg-white rounded-xl border-transparent m-3 w-[17%] h-[23rem] text-black mx-auto text-xl font-medium transition-transform duration-300 ease-out hover:scale-94 hover:text-black hover:no-underline hover:cursor-pointer"
								to={"/restaurants/" + restaurant.info.id}
							>
								<RestaurantCard key={restaurant.info.id} resData={restaurant} />
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Body;
