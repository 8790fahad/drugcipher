import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Pharmacy from "../MarketPlace/Pharmacy";
import AppIndex from "./AppIndex";

function AppNavigation() {

    let element = useRoutes([
        {
            path: "/",
            element: <LandingPage />,
            children: [{ index: true }],
        },
        {
            element: <AppIndex />,
            children: [
                { index: true, element: < LandingPage /> },

                {
                    path: "/drug-cipher/market-place",
                    element: <Pharmacy />,
                }
            ],
        },
    ]);
    return element;
}
export default AppNavigation;
