import React from 'react'
import "./Footer.css"
import footer from "../images/footer.PNG"

function Footer() {
    return (
        <div className="footer">
            <img src={footer} alt="footer info" className="footer__image"/>
        </div>
    )
}
export default Footer;
