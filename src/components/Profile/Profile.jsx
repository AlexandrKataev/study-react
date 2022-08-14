import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://s0.rbk.ru/v6_top_pics/media/img/6/72/755803890510726.jpg" />
      </div>
      <div className={s.avatar}>
        <img src="https://www.hairstylenext.com/wp-content/uploads/2014/09/Tom-Cruise-Hairstyle.jpg" />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
