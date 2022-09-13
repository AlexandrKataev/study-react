import React from "react";

const Users = (props) => {
	console.log(props)
  return (
    <div>
      {
      {
		props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img></img>
            </div>
            <div>
              <button>Follow</button>
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
      ))
		}
    </div>
  );
};

export default Users;
