import { useRoutes } from "react-router-dom";
import KYC from "../Manufacturer/KYC";
import LandingPage from "../LandingPage/LandingPage";
import Overview from "../Manufacturer/Overview";
import Cart from "../MarketPlace/Cart";
import Pharmacy from "../MarketPlace/Pharmacy";
import Showroom from "../Showroom/Showroom";
import AppIndex from "./AppIndex";
import Settings from "../Manufacturer/Settings";
import ViewRegisteredDrugs from "../Manufacturer/ViewRegisteredDrugs";
import RegisterNewDrug from "../Manufacturer/RegisterNewDrug";
import Notifications from "../Manufacturer/Notifications";
import Account from "../Manufacturer/Accunt";
import QRCodePage from "../Manufacturer/QRCodePage";

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
                    path: "/overview",
                    element: <Overview />,
                },

                {
                    path: '/settings',
                    element: <Settings />
                },
                {
                    path: '/registered-drugs',
                    element: <ViewRegisteredDrugs />
                },
                {
                    path: '/register-new-drug',
                    element: <RegisterNewDrug />
                },
                {
                    path: '/notifications',
                    element: <Notifications />
                },
                {
                    path: '/account',
                    element: <Account />
                },
                {
                    path: '/QRCode',
                    element: <QRCodePage />
                },
                // {
                //     path: "/market-place",
                //     element: <Pharmacy />,
                // },
                // {
                //     path: "/market-place/cart",
                //     element: <Cart />,
                // },
                // {
                //     path: "/showroom",
                //     element: <Showroom />,
                // }
            ],
        },
        {
            path: '/KYC',
            element: <KYC />
        },
    ]);
    return element;
}
export default AppNavigation;
