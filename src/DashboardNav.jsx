import { Outlet } from "react-router-dom"
import "./DashboardNav.css"

function DashboardNav(){
    return <div>
        <div className="nav-dashboard">
            <h1>nav</h1>
        </div>
        <div className="content-dashboard">
            <div className="sidebare-dashboard"></div>
            <div>
                <Outlet />
            </div>
        </div>
    </div>
}

export default DashboardNav