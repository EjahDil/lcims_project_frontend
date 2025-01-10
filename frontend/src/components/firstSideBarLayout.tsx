import React from "react"
import Sidebar from "./firstsidebar"
import { Outlet } from "react-router-dom"



const SidebarLayout: React.FC = () => {
    return (
        <React.Fragment>

            <div className="flex overflow-x-hidden">
                <Sidebar />

                <div className="flex-1 ml-40 sm-1000:ml-64 p-4">
                    <Outlet/>

                </div>
            </div>
        </React.Fragment>
    );
};

export default SidebarLayout;