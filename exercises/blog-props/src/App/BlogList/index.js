import React, {Component} from "react";
import BlogPost from "./BlogPost";

class BlogList extends Component {
    render() {
        let posts = [
            {
            postHeader: "Man must explore, and this is exploration at its greatest",
            post: "Problems look mighty small from 150 miles up",
            date: "September 24, 2018"
            },
            {
            postHeader: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            post: "",
            date: "September 18, 2018"
            },
            {
            postHeader: "Science has not yet mastered prophecy",
            post: "We predict too much for the next year and yet far too little for the next ten.",
            date: "August 24, 2018"
            },
            {
            postHeader: "Failure is not an option",
            post: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            date: "July 8, 2018"
            }
        ];
        return (
            <div>
                <BlogPost />
            </div>
        )
    }
}

export default BlogList;