import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(followAC(userId));
    },
    setUsers: (userId) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);