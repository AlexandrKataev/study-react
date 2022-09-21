import axios from "axios";
import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        props.setUsers(response.data.items);
      });
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
