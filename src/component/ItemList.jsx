import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
	// console.log("ItemList", items);
	const dispatch = useDispatch();
	const handleAddItem = (item) => {
		// dispatch an action
		dispatch(addItems(item)); // what ever is passing here go to to actions in rducer function
		// when ever dispatch this action it creates an object and create a payload inside this object
		/*{
            payload: that pizza added to this payload
        } */
		// this object is passes to as second argument in reducer function
	};
	return (
		<div>
			{items?.map((item) => (
				<div
					key={item.card.info.id}
					className="p-4  bg-gray-500 m-4 border-b-4 h-[15rem] text-left flex justify-end items-center"
				>
					<div className=" h-[150px] w-[60rem]">
						<div className="p-2 flex flex-col">
							<span className="font-bold">{item.card.info.name}</span>
							<span>
								₹
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</span>
						</div>
						<p className="text-[15px]">{item.card.info.description}</p>
					</div>

					<div className="bg-gray-200 w-[200px] h-[150px] ml-6 mr rounded-[15px]">
						{/* <div className='absolute mx-10'>
                        <button className='bg-blue-600 p-2 rounded'>ADD+</button>
                        </div> */}

						<img
							src={
								"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
								item.card.info.imageId
							}
							alt=""
							className="w-[200px] h-[150px] rounded-[15px] absolute"
						/>

						<div className="relative mx-[3.7rem] my-[7.8rem]">
							<button
								className="bg-white text-green-500 shadow-lg p-1 rounded w-20 font-medium"
								onClick={() => handleAddItem(item)}
							>
								ADD+
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
