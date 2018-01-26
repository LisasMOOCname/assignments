import React, {Component} from "react";
import "./index.css";

function Section(props) {
    return (
        <section>
            <h3>Make Your Product Instantly More Appealing</h3>
            <img src="http://cdn.pcwallart.com/images/cute-cats-tumblr-wallpaper-1.jpg" alt="cat in glasses" />
            <p className = "sectionP">Your product is really, really useful and important, but it's ... boring. 
                Seeing a cat near it instantly draws more attention to the product.</p>
            <h3>Let Our Cuuute Cats Do the Selling for You</h3>
            <img src="http://www.kittycapers.tv/wp-content/uploads/2015/04/035.jpg" alt="pug and kitten" />
            <p className = "sectionP">You'll see sales of your hemorrhoid cream or dustcloths go through the roof with our cats
                selling them! </p>
        </section>
    )
}

export default Section;