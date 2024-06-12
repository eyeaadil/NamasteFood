import { useEffect, useState } from "react";

const useRestaurant = (resId)=>{

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        // if(!resInfo.size){
         const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2748475&lng=78.0880129&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
         const jsonData= await data.json()
 
         setResInfo(jsonData.data)
      
        // }
     }


     return resInfo

}

export default useRestaurant;