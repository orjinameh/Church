import React, { useEffect, useState } from "react";
import "./index.css"

const Modal = ({content, handleClick}) => {
    const [width, setWidth] = useState("0vw")
    useEffect(()=>{
        const screenWidth = window.screen.width;
        console.log(screenWidth)
        if (screenWidth<1281){
            setWidth("50vw");
        }
        else{
            setWidth("25vw");
        };
    })
    return (
        <>
            <div onClick={handleClick} className="modal-background"></div>
            <div className="modal-container" style={{width:`${width}`}}>
                {content}
            </div>
        </>
    );
}
 
export default Modal;