import React from "react";
import Common from "./Common";
import Web from '../src/images/About.png'
const About =(props) =>{
    return(
        <>
         <Common 
            name = "Welcome to About Page "
            imgsrc = {Web}
            visit = '/Contact'
            btn = "Contact_Us"
            />
        </>
    )
}
export default About;