import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const[resInfo,setResInfo]=useState([]);

    useEffect(()=>{
        fetchMenu();
    },[])

    const {resId} = useParams();

    const fetchMenu = async()=>{
       if(!resInfo.size){
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2748475&lng=78.0880129&restaurantId=84714&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
        const jsonData= await data.json()

        
        const items = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        console.log(items)
        setResInfo(items || [])
        console.log(resInfo)
       }
    }
    console.log(resInfo)
  return (
    <div className='menu'>
        <h1>Name of the restaurant</h1>
        <h2>Menu</h2>
        <ul>
            {/* <li>Biryaani</li>
            <li>Burgers</li>
            <li>Diet Coke</li> */}
            {
                resInfo.map((item)=>{
                    return(<div>
                       <div>{ item.card.info.name}</div>
                       <div>{item.card.info.description}</div>
                       <br></br>
                    </div>)
                })
            }
        </ul>
    </div>
  )
}

export default RestaurantMenu

