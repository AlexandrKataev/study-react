import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} id={p.id} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    debugger;
    const text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>New Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
