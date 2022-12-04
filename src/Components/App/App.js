import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import WebDesign from '../WebDesign/WebDesign';
import AppDesign from '../AppDesign/AppDesign';
import GraphicDesign from '../GraphicDesign/GraphicDesign';
import About from '../About/About';

function App() {
   const routes=createBrowserRouter([
      {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
     {index:true,element:<Home/>},
     {path:'web',element:<WebDesign/>},
     {path:'app',element:<AppDesign/>},
     {path:'graphic',element:<GraphicDesign/>},
     {path:'about',element:<About/>}
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
