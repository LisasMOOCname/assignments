import React from "react";

function PostForm(props) {
    return (
        <div>
            <label>Post your issue:<input className="postIssue" type="text" /></label>
            <label>Submitted by: <input className="author" type="text" /></label>
            <button className="postBtn" type="submit">Post My Issue</button>
        </div>
    )
}

export default PostForm;