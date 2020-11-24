import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";

import TwitterIcon from '@material-ui/icons/Twitter';

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon />
            {/* sidebarOption */}
            <SidebarOption text="Home" />
            <SidebarOption text="Explore" />
            <SidebarOption text="Notifications" />
        </div>
    );
};

export default Sidebar;