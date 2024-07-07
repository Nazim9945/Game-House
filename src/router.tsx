import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import GameDetails from "./Pages/GameDetails";
import Errorpage from "./Pages/Errorpage";

const router=createBrowserRouter([
{
    path:'/',
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
    {index:true,element:<HomePage/>},
    {path:'games/:id',element:<GameDetails/>}
    ]
}
])
export default router