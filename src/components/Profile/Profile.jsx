import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const posts = [
    { id: 1, message: "Hello!", likes: 5 },
    { id: 2, message: "How are you?", likes: 13 },
    { id: 3, message: "bye bye!", likes: 28 },
    { id: 4, message: "Hello again!", likes: 50 },
  ];

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
