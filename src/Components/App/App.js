import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import WebDesign from '../WebDesign/WebDesign';
import AppDesign from '../AppDesign/AppDesign';
import GraphicDesign from '../GraphicDesign/GraphicDesign';
import About from '../About/About';
import Locations from "../Locations/Locations";
import Contact from '../Contact/Contact';

function App() {
   const routes=createBrowserRouter([
      {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
     {index:true,element:<Home/>},
     {path:'web',element:<WebDesign/>},
     {path:'app',element:<AppDesign/>},
     {path:'graphic',element:<GraphicDesign/>},
     {path:'about',element:<About/>},
     {path:'locations',element:<Locations/>},
     {path:'contact',element:<Contact/>}
    ]}
   ]
   )
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
