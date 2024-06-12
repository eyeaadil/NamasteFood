import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


// configureStore come from redux toolkit
const appStore = configureStore({
  
    // this is one reducer for whole app and it contains multiple reducers
    reducer: {
        cart:cartReducer,
    },
});

console.log("Second this will run")
export default appStore

// Now provide this store to our application
// so that it can be used by any component