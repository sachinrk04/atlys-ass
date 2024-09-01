import React from "react";
import IconCircle from "../IconCircle/IconCircle";
import "./Post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} alt={post.author.name} />
        <div className="post-header-name">
          <h4>{post.author.name}</h4>
          <p>{post.timestamp}</p>
        </div>
        <span className="more-options">...</span>
      </div>
      <div className="post-content">
        <IconCircle>👋</IconCircle>
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
        <div className="comments">
          <span className="comment-icon">💬</span>
          <span>{post.comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
