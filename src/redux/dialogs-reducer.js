const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const date = new Date();
      //   console.log(`${date.getHours()} : ${date.getMinutes()}`);
      const newMessage = {
        id: "you",
        time: `${date.getHours()}:${date.getMinutes()}`,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
