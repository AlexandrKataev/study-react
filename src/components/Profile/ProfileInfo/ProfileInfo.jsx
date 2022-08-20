import React from "react";

import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://s0.rbk.ru/v6_top_pics/media/img/6/72/755803890510726.jpg" />
      </div>
      <div className={s.discriptionBlock}>
        <div className={s.avatar}>
          <img src="https://www.hairstylenext.com/wp-content/uploads/2014/09/Tom-Cruise-Hairstyle.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
