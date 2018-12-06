import React from 'react'

import LogoImg from "../img/logo.svg"
import "./logo.css"

class Logo extends React.Component{
    render(){
        return (
            <div className = "logo-img">
                <img src = {LogoImg}  alt="logo" /> 
            </div>
        )
    }
}

export default Logo