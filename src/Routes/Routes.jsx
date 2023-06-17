import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../Components/Login/Login";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PersonalInfo from "../pages/Dashboard/PersonalInfo/PersonalInfo";
import InstitutionalInfo from "../pages/Dashboard/InstitutionalInfo/InstitutionalInfo";
import LicenseInfo from "../pages/Dashboard/LicenseInfo/LicenseInfo";
import GetPersonalInfo from "../pages/Dashboard/GetPersonalInfo/GetPersonalInfo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,

  },

  // dashboard routes
  {
    path: "/dashboard",
    element: <DashboardLayouts></DashboardLayouts>,
    children: [
      {
        path: "/dashboard/personal-info",
        element: <PersonalInfo></PersonalInfo>,
      },
      {
        path: "/dashboard/institutional-info",
        element: <InstitutionalInfo></InstitutionalInfo>,
      },
      {
        path: "/dashboard/license-info",
        element: <LicenseInfo></LicenseInfo>
      },
      {
        path: "/dashboard/get-personal-info",
        element: <GetPersonalInfo></GetPersonalInfo>
      },
    ],
  }
]);