import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: "Kataev Alexander",
        profileStatus: "Добрейший вечерочек",
        location: { city: "Naberezhnie Chelny", country: "Russia" },
        photoUrl: "https://coolsen.ru/wp-content/uploads/2021/06/0-6.jpg",
      },
      {
        id: 2,
        followed: true,
        fullName: "Murtazin Bulat",
        profileStatus: "Мэ",
        location: { city: "Kazan", country: "Russia" },
        photoUrl: "https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg",
      },
      {
        id: 3,
        followed: false,
        fullName: "Kalugin Ruslan",
        profileStatus: "Я дельфин - хочу воды",
        location: { city: "Saint-Petesburg", country: "Russia" },
        photoUrl:
          "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg",
      },
      {
        id: 4,
        followed: false,
        fullName: "Ivanov Artem",
        profileStatus: "Не вижу вирусов никаких",
        location: { city: "Ostrovec", country: "Belarus" },
        photoUrl:
          "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg",
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  className={s.unfollow}
                  onClick={() => props.unfollow(u.id)}
                >
                  - Unfollow
                </button>
              ) : (
                <button className={s.follow} onClick={() => props.follow(u.id)}>
                  + Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.profileStatus}</div>
          </span>
          <span>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
