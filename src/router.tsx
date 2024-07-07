import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import GameDetails from "./Pages/GameDetails";

const router=createBrowserRouter([
{
    path:'/',
    element:<Layout/>,
    children:[
    {index:true,element:<HomePage/>},
    {path:'games/:id',element:<GameDetails/>}
    ]
}
])
export default router