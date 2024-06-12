// import { FaStar } from "react-icons/fa";
const RestaurantCard = (props) => {

  const {resData}= props;
  const {
      name,
      cloudinaryImageId,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData.info;
  
  return (
    <>
      <img className='w-[100%] h-[50%] rounded-t-lg' alt=''src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3 className="text-[15px] mt-2 font-bold">{name}</h3>
      <div className='mt-2 flex justify-between'>
       {
        avgRating<3.7? <div className=" rounded-sm p-[2px] bg-red-500">
        <h5 className="  flex text-[18px]">⭐{avgRating} </h5>
        </div>: <div className=" rounded-sm p-1 bg-green-500">
        <h5 className="  flex text-[18px]">⭐{avgRating} </h5>
        </div>
       }
      
      <h5 className="text-[18px]">{sla.slaString}</h5>
      <h5 className="text-[18px]">{costForTwo}</h5>
      </div>
      <p className="text-base font-normal mt-1 text-gray-500">{cuisines.join(" ,")}</p>

    
    </>
  );
};




export default RestaurantCard;