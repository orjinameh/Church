import React from "react";
import icon from "./images/church-icon.png"

const Sidebar = () => {
    return (
            <div className="modal-content">
                <div className="header">
                    <img src={icon} alt="" />
                    <p>Username</p>
                </div>
                <div className="gray-back">
                    <p>Chats</p>
                </div>
                <div className="gray-back">
                    <p>Programs</p>
                </div>
            </div>
    );
}
 
export default Sidebar;