import React from "react";
import "./CreatePost.scss";
import IconCircle from "../IconCircle/IconCircle";
import Button from "../Button/Button";

const CreatePost = ({ addPost, newPost, handlePostChange }) => {
  return (
    <div className="create-post">
      <h3>Create post</h3>
      <div className="create-post-text">
        <IconCircle>💬</IconCircle>
        <textarea
          name="newPost"
          placeholder="How are you feeling today?"
          value={newPost}
          onChange={(e) => handlePostChange(e)}
        />
      </div>
      <div className="post-buttom">
        <Button onClick={addPost}>Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
