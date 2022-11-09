import Layout from "layouts/DashboardLayout.jsx";
import Landing from "../views/landing";
import Faqs from "../views/landing/faqs";
import About from "../views/landing/about";
import Terms from "../views/landing/terms";
import LockScreen from "../views/authentication/LockScreen";
import Login from "../views/authentication/Login";
import Register from "../views/authentication/Register";
import ForgotPassword from "../views/authentication/ForgotPassword";
import ResetPassword from "../views/authentication/ResetPassword";
import VerifyEmail from "../views/authentication/VerifyEmail";
import Error400 from "../views/error/Error400";
import Error500 from "../views/error/Error500";

const indexRoutes = [
    { path: "/lockscreen", component: LockScreen },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/error400", component: Error400 },
    { path: "/error500", component: Error500 },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/reset-password/:token", component: ResetPassword },
    { path: "/verify-email/:token", component: VerifyEmail },
    { path: "/faqs", component: Faqs },
    { path: "/about", component: About },
    { path: "/terms", component: Terms },
    { path: "/dashboard", component: Layout },
    { path: "/", component: Landing }
];

export default indexRoutes;