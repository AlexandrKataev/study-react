import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"></img>
        {props.message}
      </div>
      <span>like</span>
    </div>
  );
};

export default Post;
