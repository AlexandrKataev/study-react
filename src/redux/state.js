const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const store = {
  _state: {
    _rerenderEntireTree() {
      console.log("state changed");
    },

    profilePage: {
      posts: [
        { id: 1, message: "Hello!", likes: 5 },
        { id: 2, message: "How are you?", likes: 13 },
        { id: 3, message: "bye bye!", likes: 28 },
        { id: 4, message: "Hello again!", likes: 50 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Dima",
          avatar: "https://coolsen.ru/wp-content/uploads/2021/06/0-6.jpg",
        },
        {
          id: 2,
          name: "Andrew",
          avatar: "https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          avatar:
            "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg",
        },
        {
          id: 4,
          name: "Sanek",
          avatar:
            "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg",
        },
        {
          id: 5,
          name: "Valera",
          avatar:
            "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg",
        },
      ],

      messagesData: [
        {
          id: "s.he",
          time: "12:54",
          message: "У оператора связи есть такая функция",
        },
        { id: "s.you", time: "8:01", message: "Я через вифи сижу)" },
        {
          id: "he",
          time: "00:25",
          message: "А на роутер поставить запрет по http",
        },
        {
          id: "you",
          time: "01:54",
          message:
            "Да бля, мы же уже обсуждали это)) на моем роутере нельзя) пишет обращайтесь к провайдеру))",
        },
        {
          id: "you",
          time: "23:54",
          message: "Тем более что мне только на мобилке надо ограничить",
        },
        { id: "he", time: "12:00", message: "Купи роутер, 1000 рублей" },
        { id: "you", time: "12:01", message: ")" },
        {
          id: "you",
          time: "12:01",
          message:
            "Инстаграм заблокирован в России, а мы нет! Друзья, в самом разгаре бронирование мест на майские СПЛАВЫ - мы подготовили для вас самые яркие программы, на сайте FestTur.ru уже появляются туры на лето 2022. Этим летом мы едем на Кавказ, Дагестан, Камчатку, Карелию, Горный Алтай 💙Яркие походы, восхождения, активные сплавы.",
        },
      ],
      newMessageText: "",
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    // {type: 'ADD-POST' }
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      const date = new Date();
      //   console.log(`${date.getHours()} : ${date.getMinutes()}`);
      const newMessage = {
        id: "you",
        time: `${date.getHours()}:${date.getMinutes()}`,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
