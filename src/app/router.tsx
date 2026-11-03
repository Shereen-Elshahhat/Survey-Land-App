import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/LoginPage";
import Register from "../features/auth/pages/RegisterPage";
import ChangePassword from "../features/auth/pages/ChangePassPage";
import AuthLayout from './../shared/layouts/AuthLayout';
import ForgetPassword from "../features/auth/pages/ForgetPassPage";

export const routes = createBrowserRouter([
    {
        path:"",
        element: <AuthLayout/>,
        children: [
            {index: true, element: <Login/>},
            {path:"login", element: <Login/>},
            {path:"register", element: <Register/>},
            {path:"changepass", element: <ChangePassword/>},
            {path:"forgetpass", element: <ForgetPassword/>}
        ]
    }
])