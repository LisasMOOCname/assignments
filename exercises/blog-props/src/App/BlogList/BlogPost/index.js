import React, {Component} from "react";
import "./index.css";

class BlogPost extends Component {
    render() {
        return (
            <div> 
                <article className = "post">
                    <h2>{this.props.postHeader}</h2>
                    <p>{this.props.post}</p>
                    <h4 className = "credits">Posted by <span className="bold">Start Bootstrap</span> on {this.props.date}</h4>
                </article>
                <button><a href="{link}">Older Posts -></a></button>
            </div>
        )
    }
}

export default BlogPost;