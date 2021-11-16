import React from 'react'
import "./Hero.css"
import {HoliLogo} from "./images/download.png"

function Hero() {
    return (
        <div className="hero">
            <div className="holiday_logo">
                {HoliLogo}
            </div>
        </div>
    )
}

export default Hero
