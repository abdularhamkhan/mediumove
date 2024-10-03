import Home from "@/Pages/Dashboard/Home"
import Login from "@/Pages/auth/login/Login"
import Signup from "@/Pages/auth/signup/Signup"

const routes =[
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/signup',
        element:<Signup/>,
    },
    {
        path:'/login',
        element:<Login/>,
    },
]

export default routes