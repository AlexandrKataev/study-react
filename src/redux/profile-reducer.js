const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hello!", likes: 5 },
    { id: 2, message: "How are you?", likes: 13 },
    { id: 3, message: "bye bye!", likes: 28 },
    { id: 4, message: "Hello again!", likes: 50 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likes: 0,
          },
        ],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
