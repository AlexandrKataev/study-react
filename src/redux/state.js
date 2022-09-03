import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._rerenderEntireTree(this._state);
  },
};

export default store;
