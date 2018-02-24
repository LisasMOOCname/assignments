import React from "react";
import "./Footer.css";

function Footer({brand, address, phone}) {
    return (
        <div className="footer">
            <h4>{brand}</h4>
            <h5>{address}</h5>
            <h5>{phone}</h5>
        </div>
    )
}

export default Footer;