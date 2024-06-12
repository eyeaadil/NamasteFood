import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ()=>{
  const[btnName,setBtnName]=useState("Login")

  // subscribing to the store using the selector
  const cartItems = useSelector( (store)=>store.cart.items) //this gives access to our store

  // this is a custom react hook to check the status of online
  const onlineStatus=useOnlineStatus();

    return(
      <div className='flex justify-between items-center shadow-md bg-green-100 h-[100px]'>
        <div className='w-[150px] h-[100px]'>
          <img className='h-[6.2rem] w-[8rem]' src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg" alt="logo" />
        </div>
  
        <div className='flex p-5 w-[55rem] h-1 justify-between items-center'>
          <div className="text-xl font-semibold">Online Status:{onlineStatus?"✅"  : "❌"}</div>
          <div className="text-xl font-semibold hover:bg-yellow-500 p-2 rounded-lg hover:text-white"> <Link className="hover:no-underline hover:text-white" to={"/"}>Home</Link></div>
          <div className="text-xl font-semibold hover:bg-yellow-500 p-2 rounded-lg hover:text-white"><Link className="hover:no-underline hover:text-white" to={"/contact"}>contact Us</Link></div>
          <div className="text-xl font-semibold hover:bg-yellow-500 p-2 rounded-lg hover:text-white"><Link className="hover:no-underline hover:text-white" to={"/about"}>About us</Link></div>
          
          <div className="text-xl font-bold"> <Link to={'/cart'}>Cart ({cartItems.length} items)</Link> </div>

  
          <button className="p-3 font-semibold bg-yellow-500 border-none rounded-lg" onClick={()=>{
            if(btnName==='Login'){
              setBtnName('LogOut');
            }else{
              setBtnName('Login');
            }
          }}>{btnName}</button>
  
        </div>
  
      </div>
    )
  }

  export default Header;