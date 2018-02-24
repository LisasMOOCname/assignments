import React from "react";
import CommentForm from "./CommentForm";
import PostForm from "./PostForm";

function Main(props) {
    return (
        <div>
            <div className="post">
                <h2 className="issueTitle">{title}</h2>
                <p className="issuePost">{post}</p>
                <button className="upvote">{thumbsUpImage}</button>
                <span className="totalUpvotes">{upvotes}</span>
                <button className="downvote">{thumbsDownImage}</button>
                <span className="totalDownvotes">{downvotes}</span>
                <span className="totalVotes">Total votes: {allVotes}</span>
                <p>{comment}</p>
                <span>{author} {date-timestamp}</span>
            </div>
            <CommentForm className="commentForm" />
            <PostForm className="PostForm" />
        </div>
    )
}

export default Main;