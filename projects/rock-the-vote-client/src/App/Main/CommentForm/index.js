import React from "react";

function CommentForm(props) {
    return (
        <div>
            <label>Comment<input className="comment" type="text" /></label>
            <label>Submitted by: <input className="author" type="text" /></label>
            <button className="commentBtn" type="submit">Add My Comment</button>
        </div>
    )
}

export default CommentForm;
