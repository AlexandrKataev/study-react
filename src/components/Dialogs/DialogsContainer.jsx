import Dialogs from "./Dialogs";
import {
  updateNewMessageText,
  sendMessageCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   const state = props.store.getState().dialogsPage;

//   const onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   const onNewMessageTextChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   };

//   return (
//     <Dialogs
//       updateNewMessageText={onNewMessageTextChange}
//       sendMessage={onSendMessageClick}
//       dialogsPage={state}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
