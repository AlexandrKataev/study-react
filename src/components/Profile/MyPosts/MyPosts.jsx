import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} id={p.id} />
  ));

  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>New Post</button>
        </div>
      </div>
      <div class={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
