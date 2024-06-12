import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import RestaurantMenu from './component/RestaurantMenu'
// import MenuOfRes from './component/menu/MenuOfRes';
import Footer from './component/Footer';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Cart from './component/Cart';







function App() {
  return (

    // here appStore is provided to our application
    <Provider store={appStore}>
      <div className="App">
     {/* header */}
     <Header/>
     <Outlet/>
     <Footer/>
      </div>
    </Provider>
    
  );
}

 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },

]);

export default App;
