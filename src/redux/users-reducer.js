const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Kataev Alexander",
      profileStatus: "Добрейший вечерочек",
      location: { city: "Naberezhnie Chelny", country: "Russia" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Murtazin Bulat",
      profileStatus: "Мэ",
      location: { city: "Kazan", country: "Russia" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Kalugin Ruslan",
      profileStatus: "Я дельфин - хочу воды",
      location: { city: "Saint-Petesburg", country: "Russia" },
    },
    {
      id: 4,
      followed: false,
      fullName: "Ivanov Artem",
      profileStatus: "Не вижу вирусов никаких",
      location: { city: "Ostrovec", country: "Belarus" },
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
