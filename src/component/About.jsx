// import React, { Component } from 'react'
// import User from './User'
// import UserClass from './UserClass'

// class About extends Component{
//   constructor(props){
//     super(props);
//     console.log("Parent constructor")

//   }
//   render(){
//     console.log("Parent render")
//     return(
//       <div>
//       <h1>About Us Page</h1>
//       <h2>This is Namaste react</h2>
//       <User name={"Md adil (Function )"} location={"Darbhanga"} />
//       <UserClass name={"Md adil (Class)"} />

//   </div>
//     )
//   }
// }

// FUNCTION BASED COMPONENT

const About = () => {
	return (
		<div className="w-10/12 h-[100rem] bg-white m-auto">
			<div className="flex justify-around">
				<div className=" mt-[13rem] w-[40rem]">
					<h1 className="text-[5rem] text-gray-600">Welcome To <br /> The World of <br /></h1>
          <h1 className="text-[3rem] bg-orange-400 p-3 text-center w-[28rem] mt-6 rounded-2xl text-white">Tasty & Fresh Food</h1>
					<h2 className="text-2xl mt-2 font-medium ">"Better You will feel if you eat a Food <span className="text-orange-500">Adda</span> healthy meal"</h2>
				</div>

				<div className="mt-[5rem]">
					<img
						src={
							"https://imgs.search.brave.com/FSAVDHzCn_VO2At6rCVJ3s7YdIl74cc21mxl1VO3RY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZWxpY2lvdXMt/Y3Jpc3B5LWNoaWNr/ZW4tYnVyZ2VyLWFp/Xzc0MjI1Mi01NzE2/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
						}
						alt=""
            className="h-[42rem] w-[48rem]"
					/>
				</div>

				{/* <User name={"Md adil (Function )"} location={"Darbhanga"} /> */}
				{/* <UserClass name={"Md adil (Class)"} /> */}
			</div>
		</div>
	);
};

export default About;
