import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>New post</div>
      </div>
      <Post message="Hello!" likes="5" />
      <Post message="How are you?" likes="13" />
      <Post message="bye bye!" likes="28" />
    </div>
  );
};

export default MyPosts;
