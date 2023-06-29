import React, { useLayoutEffect, useState } from "react";
import "./index.css";
import Service from "./service";
import speakerPhoto from "./images/rev.webp";

const Home = () => {
    const [content, setContent] = useState();
    const dateObj = new Date(Date.now());
    const date = dateObj.getDay();
    useLayoutEffect(()=>{
        if (date===4|| date===5){
            setContent(<Service day={"FRIDAY"} time={"5:00 PM"} title={"HOUR OF PRAYER"} speakerPhoto={speakerPhoto} speakerName="Rev S.O Daramola"/>);
        };
        if (date===6){
            setContent(<Service day={"SUNDAY"} time={"8:30 AM"} title={"SUNDAY SERVICE"} speakerPhoto={speakerPhoto} speakerName="Rev S.O Daramola"/>);
        };
        if (date===1){
            setContent(<Service day={"TUESDAY"} time={"11:00 AM"} title={"HOUR OF FIRE AND MIRACLES"} speakerPhoto={speakerPhoto} speakerName="Rev S.O Daramola"/>);
        };
        if (date===3){
            setContent(<Service day={"WEDNESDAY"} time={"5:00 PM"} title={"BIBLE STUDIES"} speakerPhoto={speakerPhoto} speakerName="Rev S.O Daramola"/>);
        };
    },[])
    return (
        <>
            {content}
        </>
    );
}
 
export default Home;