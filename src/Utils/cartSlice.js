import { createSlice, current } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },

    // here we create multiple reducer that's why here it is reducer
    reducers:{
        addItems:(state,action)=>{

            // vanilla(older) Redux = DON'T Mutate state

            // erlier in this way state is updated
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState
          
            console.log("first this will run",state)
            console.log("Before",current(state))

            // Redux Toolkit give us to mutate the state
            // according to action we have to mutate the state
              /* Earlier returning is mandatory but in redux toolkit its is not 
            mandatory */

            // behind the scene redux uses same thing as earlier but this time a new library (Immer JS) handle all these things

            state.items.push(action.payload);

            console.log("After",current(state));
        },
        removeItems:(state)=>{
            state.items.pop();
        }, 
        clearItems:(state)=>{
            state.items.length=0;
        }
    }
})
export const{addItems,removeItems,clearItems}=cartSlice.actions;

// here the reducer are the combination of all the reducers,this indicate only one reducer of whole app
export default cartSlice.reducer;


// now add this slice to the store 
// for this goes to appStore 