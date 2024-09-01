import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// action type
import { REGISTER, LOGIN, CLOSE_MODAL, OPEN_MODAL } from "../../action/types";
// components
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import Login from "../../components/Login/Login";
import Posts from "../../components/Posts/Posts";
import Register from "../../components/Register/Register";
import { postsData } from "../../data/posts";
// styles
import "./Home.scss";

const Home = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(postsData);
  const [newPost, setNewPost] = useState("");
  const { isLogin, isModal, user } = state;

  // on change handle new post
  const handlePostChange = (event) => {
    const { value } = event.target;
    setNewPost(value);
  };

  // add new post if isUser not found then open login modal
  const addPost = () => {
    if (user.isUser) {
      if (newPost.trim() !== "") {
        const newPostData = {
          id: posts.length + 1,
          author: {
            name: "Jane Doe",
            avatar: "https://placehold.co/60x60",
          },
          timestamp: "Just now",
          content: newPost,
          comments: 0,
        };
        setPosts([newPostData, ...posts]);
        setNewPost("");
      }
    } else {
      dispatch({ type: OPEN_MODAL });
    }
  };

  return (
    <div className="home-conatiner">
      <Modal isOpen={isModal} onClose={() => dispatch({ type: CLOSE_MODAL })}>
        {isLogin ? (
          <Login onRegister={() => dispatch({ type: REGISTER })} />
        ) : (
          <Register onLogin={() => dispatch({ type: LOGIN })} />
        )}
      </Modal>
      <div className="home-content">
        <div className="home-header">
          <h2>Hello Jane</h2>
          <p>
            How are you doing today? Would you like to share something with the
            community 🙋‍♀️
          </p>
        </div>
        <CreatePost
          newPost={newPost}
          addPost={addPost}
          handlePostChange={handlePostChange}
        />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Home;
