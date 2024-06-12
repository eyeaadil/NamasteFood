import React from "react";
// import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	console.log("cartItems", cartItems);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearItems());
	};

	return (
		<div className="text-center m-4 p-6">
			<h1 className="text-2xl font-bold">Cart</h1>
			<div className="w-[70rem] m-auto">
				<button
					className="bg-black p-2 m-3 rounded-lg text-white"
					onClick={handleClearCart}
				>
					Clear Cart
				</button>
				{cartItems.map((item) => (
						<div
							key={item.card.info.id}
							className="  bg-gray-200 m-4 border-b-4 h-[9rem] text-left flex justify-between items-center rounded-xl"
						>
							<div className=" mx-20 w-[40rem] p-7">
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

							<div className="w-44 h-[144px] ml-6 mr rounded-[15px] bg-slate-500 border border-black">

								<img
									src={
										"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
										item.card.info.imageId
									}
									alt=""
									className=" w-[176px] h-[144px] rounded-r-[15px] absolute"
								/>
							</div>
						</div>
					
				))}
			</div>
		</div>
	);
};

export default Cart;
