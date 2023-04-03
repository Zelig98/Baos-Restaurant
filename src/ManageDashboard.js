import React from "react";
import Sidebar from "./Sidebar";
import ManageHome from "./ManageHome";
import ManageStaff from "./ManageStaff";

function Dashboard() {
    return(
        <div className="d-flex">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col-10">
                <ManageHome />
            </div>
        </div>
    )
}

export default Dashboard;