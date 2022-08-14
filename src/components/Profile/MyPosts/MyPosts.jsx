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
      <Post message="Hello!" />
      <Post message="How are you?" />
      <Post message="bye bye!" />
    </div>
  );
};

export default MyPosts;
