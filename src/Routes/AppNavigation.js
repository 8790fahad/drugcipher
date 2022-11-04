/* eslint-disable no-unused-vars */
import { useRoutes } from "react-router-dom";
import KYC from "../Manufacturer/KYC/KYC";
import LandingPage from "../LandingPage/LandingPage";
import Overview from "../Manufacturer/Overview";
import Cart from "../MarketPlace/Cart";
import Pharmacy from "../MarketPlace/Pharmacy";
// eslint-disable-next-line no-unused-vars
import Showroom from "../Showroom/Showroom";
import AppIndex from "./AppIndex";
import Settings from "../Manufacturer/Settings";
import ViewRegisteredDrugs from "../Manufacturer/ViewRegisteredDrugs";
import RegisterNewDrug from "../Manufacturer/RegisterNewDrug";
import Notifications from "../Manufacturer/Notifications";
import Account from "../Manufacturer/Account";
import QRCodePage from "../Manufacturer/QRCodePage";
import Profile from "../component/Profile";
import Gethelp from "../Manufacturer/Gethelp";
import KYCApproval from "../Manufacturer/KYC/KYCApproval";

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
        { index: true, element: <LandingPage /> },

        {
          path: "/overview",
          element: <Overview />,
        },

        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/registered-drugs",
          element: <ViewRegisteredDrugs />,
        },
        {
          path: "/register-new-drug",
          element: <RegisterNewDrug />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/QRCode",
          element: <QRCodePage />,
        },
        {
          path: "/GetHelp",
          element: <Gethelp />,
        },
      ],
    },
    {
      path: "/KYC",
      element: <KYC />,
    },
    {
      path: "/KYCApproval",
      element: <KYCApproval />,
    },
  ]);
  return element;
}
export default AppNavigation;
