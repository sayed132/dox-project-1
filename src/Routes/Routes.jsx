import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../Components/Login/Login";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PersonalInfo from "../pages/Dashboard/PersonalInfo/PersonalInfo";
import InstitutionalInfo from "../pages/Dashboard/InstitutionalInfo/InstitutionalInfo";
import Practice from "../pages/Dashboard/practice";


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
        path: "/dashboard/pra-info",
        element: <Practice></Practice>,
      },
    ],
  }
]);