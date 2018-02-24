import React from "react";
import "./Badge.css";

function Badge(props) {
    return (
        <div className="parent">
            <div className="top">Badge:</div>
            <div className="badge">
                <div className="badgeField">Name: {props.firstName} {props.lastName}</div>
                <div className="badgeField">Phone: {props.phone}</div>
                <div className="badgeField">Place of Birth: {props.placeOfBirth}</div>
                <div className="badgeField">Favorite Food: {props.favoriteFood}</div>
                <div className="badgeField">Email: {props.email}</div>
                <div className="badgeField"></div> {/* placeholder to align the email div to the left */}
                <div className="bigField">{props.aboutYou}</div>
            </div>
        </div>
    )
}

export default Badge;