import { createBrowserRouter } from "react-router-dom";
import Home from "@/Pages/home";
import Error from "@/Pages/error";
import Login from "@/Pages/login";
import Post from "@/Pages/post";
import Profile from "@/Pages/profile";
import Signup from "@/Pages/signup";
import MyPhotos from '@/Pages/myPhotos';
import ProtectedRoutes from "@/components/ProtectedRoutes";

const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/post",
                element: <Post />,
                errorElement: <Error />,
            },
            {
                path: "/profile",
                element: <Profile />,
                errorElement: <Error />,
            },
            {
                path: "/my-photos",
                element: <MyPhotos />,
                errorElement: <Error />
            }
        ],
        errorElement: <Error />, 
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "signup",
        element: <Signup />,
        errorElement: <Error />
    }
]);

export default router;