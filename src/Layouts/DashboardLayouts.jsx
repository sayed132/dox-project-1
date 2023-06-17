import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const DashboardLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:grid grid-cols-3">
                <Sidebar></Sidebar>
                <div className="col-span-2"><Outlet></Outlet></div>

            </div>
        </div>
    );
};

export default DashboardLayouts;