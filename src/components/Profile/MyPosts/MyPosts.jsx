import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    { id: 1, message: "Hello!", likes: 5 },
    { id: 2, message: "How are you?", likes: 13 },
    { id: 3, message: "bye bye!", likes: 28 },
    { id: 4, message: "Hello again!", likes: 50 },
  ];

  const postsElements = posts.map((p) => (
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
