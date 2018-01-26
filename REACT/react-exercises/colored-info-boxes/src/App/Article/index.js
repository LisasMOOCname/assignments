import React, {Component} from "react";
import "./index.css";

function Article(props) {
    return (
        <div className={props.className}>
            {props.title}
            {props.subtitle}
            {props.text}
            </div>
    )
}

export default Article;