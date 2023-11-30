import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IRouteState } from "../App.d";
import { AppRoutes } from "../routes/routes";
import { useAuth } from "../providers/AuthProvider";
const test = true
export const AuthenticatedRoutes = () => {
    const auth = useAuth();
    console.log("auth", auth?.token)
    const location = useLocation();

    if (!test) return <Navigate to={AppRoutes.SignIn} state={{ prev: location }} replace />;

    return <Outlet />;
};

export const UnAuthenticatedRoutes = () => {
    const auth = useAuth();
    const location = useLocation();
    console.log("auth", auth?.token)

    const from = (location.state as IRouteState)?.prev?.pathname || null;

    if (test) return <Navigate to={from || AppRoutes.Dashboard} replace />;

    return <Outlet />;
};