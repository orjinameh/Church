import React from "react";
import "./index.css";
import banner from "../images/banner.webp";

const Service = ({day, time, title, speakerPhoto, speakerName}) => {
    return (
        <>
            <h2 className="big-header">{title}</h2>
            <div className="sunday-banner">
                <img src={banner} alt="" />
            </div>
            <p className="exalt">
                You cannot touch the greatness of God without
                his glory manifesting.
            </p>
            <p className="exalt">This is your time, come and blessed</p>
            <div className="heading-container2">
                <h3 className="margin-right">TELEVISION  KD</h3>
                <h3 className="no-margin">{time}</h3>
                <h3 className="margin-right"> THIS {day}</h3>
            </div>
            <h2 className="border-bottom">Speaker</h2>
            <div className="speaker">
                <img src={speakerPhoto} alt="" />
                <h2>{speakerName}</h2>
            </div>
        </>
    );
}
 
export default Service;