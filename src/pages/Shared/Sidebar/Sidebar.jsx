import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li><Link to="/dashboard/personal-info">Personal Information</Link></li>
                    <li><Link to="/dashboard/institutional-info">Institutional Information</Link></li>
                    <li><Link to="/dashboard/pra-info">License Information</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;