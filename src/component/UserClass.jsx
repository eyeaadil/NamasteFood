import { Component } from "react";
class UserClass extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0 ,          //indicating that initially state varibale is initialised with 0 
            count2:0,         //indicating that initially state varibale is initialised with 0 
        }


        /**
         * 
         * this.state={
            count2:0 ,                  
          } 


          This is a wrong way of creating again extra state variable 
          extra state variable will  create in same state 
        
        */   

    }



    // component have render function which return some jsx
    /* class based component is is basically a class which extends React.component
    and that have render method which return some piece of jsx code*/


    /*How to pass props in classbased component 
    
    In classbased component props is passed using constructor
    Construtor receive the props
    
    in constructor we pass props as an argument of constructor 
    
    
    
    "this" keyword is used to acces the props anywhere in the class

    */


    /**CREATING A STATE VARIABLE 
     * In Functional componrnt using useState variable we  create state varibale 
     * This state variable is created inside the constructor
     * 
     * this.state={
     * 
     * 
     * } 
     * 
     * state is basically big whole object which contain all the state variable
     * 
     */




    /**  
     * CREATING MULTIPLE STATE VARIABLE
     * ek se jyaada state varibale create karne hai to issi state me karenge ,
     * functional component me alag alag useState hook use karte hai
    */




    /**HOW WE CAN UPDATE THIS STATE VARIABLE 
     * with the help of set state we can update our state variable
     * never ever update the state variable directly 
     * 
     * 
     * 
    */


    /**WHAT IS THE LIFE CYCLE OF REACT CLASS BASED COMPONENT    
     * How THIS COMPONENT IS PUT UP / LOADED /MOUNTED ON THE WEB PAGE
     * 
     * The first thing when a class is called a constructor is load,
     * whenever a instance of class is created ,first constructor will called then the render will call
     * CONSTRUCTOR --> RENDER
     * 
     * Parent Constructor ---> Parent Render ----->  Child Constructor ----> Child Render , In this way react life cycle work
     *   
     */


     async componentDidMount(){

        // API CALL
        // const data = await fetch()

    }

    /**COMPONENT DID MOUNT 
     * 
     * Generally it used to call the API
     * 
     * This method is called once the component will mounted onto thw DOM then this function will be called
     * 
     *  Parent Constructor ---> Parent Render ----->  Child Constructor ----> Child Render --> ComponentDidMount
     * 
     * If the Parent also have ComponentDidMount function then how the code will run
     *  Parent Constructor ---> Parent Render ----->  Child Constructor ----> Child Render -->  Child ComponentDidMount --> Parent ComponentDidMount
     * 
     * If MULTIPLE CHILD IS PRESENT 
     * 
     * Parent Constructor
     * Parent Render
     * 
     * First Child Constructor
     * First Child Render
     * First Child ComponentDidMount
     * 
     * Second Child Constructor
     * Second Child Render 
     * Second Child ComponentDidMount
     * 
     * Parent ComponentDidMount
     * 
     * 
     * But this is a wrong 
     * 
     * CORRECT WAY IS
     * 
     * Parent Constructor
     * Parent Render
     * 
     * First Child Constructor
     * First Child Render
     * 
     * Second Child Constructor
     * Second Child Render 
     * 
     * DOM IS UPDATED
     * 
     * First Child ComponentDidMount
     * Second Child ComponentDidMount
     * 
     * Parent ComponentDidMount
     * 
     * 
     * This is because first Render phase is completed and in render phase constructor call and render method 
     * of parent and child will combine together,that's why first constructor and render of all the child will called 
     * then the Commit phase will run in which, ComponentDidMount of Parent and Child will be called
     * 
     * Patch all the constructor and render of parent child anf form a render phase
     * Commit phase will takes time because in commit phase DOM is updated and DOM updation will take lots of time
     * so that all the ComponentDidMount patch together 
    */
    

    /* 
    API CALL

    For calling an API we will make the ComponentDidMount function as async function
    and directly fetch the data from API
    
    */
    


    
    render(){


        /* we can also destructure the props here also
        const{name,location}=this.props     
        */

        // const{name,location}=this.props;
        return(
        <div className='user-card'>
            <h1>Count:{this.state.count}</h1>
            {/* <h1>Count2:{this.state.count2}</h1> */}
            <button onClick={()=>{

                // NEVER DIRECTLY UPDATE STATE VARIABLE
                // this.state.count=this.state.count + 1;     But this is wrong to update the satte variable 

                this.setState({
                    count:this.state.count+1,

                    // If more than 1 state variable ,thenit will update only those state variable which are present in setState function

                })

                // setState we will pass  object which will contain updated value of state variable


            }}>Count Increase</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{this.props.location}</h3>
            <h4>COntact:@eyeaadil</h4>
        </div>
        )
    }

}

export default UserClass;