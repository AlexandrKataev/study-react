import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
