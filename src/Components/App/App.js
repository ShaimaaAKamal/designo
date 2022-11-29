import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home'

function App() {
   const routes=createBrowserRouter([
      {path:'',element:<Layout/>,children:[
     {path:'/',element:<Home/>}
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
