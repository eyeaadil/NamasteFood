// import { Carousel } from "carousel-react-component";
import React from "react";
import Carousel from "react-material-ui-carousel";


const MenuOfRes = () => {
	return (
		<>
			<div className="menu-container">
				<div className="res-container">
					<div className="res-location">
						<p>Home</p>
                        <p>Bhopal</p>
						<p>Pizzahut</p>
					</div>

					<div className="res-name">
                    <h1>Pizza Hut</h1>

                    </div>

					<div className="rating-card">

                        <div className="rating">
                        <h2>4.1(1K+ ratings)</h2>
						<h2>Rs 350 for two </h2>
                        </div>
						

						<p>Pizzas</p>
						<h3>Outlet</h3>
						<h3>30 - 40 mins</h3>
					</div>
				</div>



                <div className="res-deal-container">
                    <h1>Deals For You</h1>
                    <Carousel/>

                </div>
			</div>
		</>
	);
};

export default MenuOfRes;
