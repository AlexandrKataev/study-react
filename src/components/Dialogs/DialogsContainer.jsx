import Dialogs from "./Dialogs";
import {
  updateNewMessageText,
  sendMessageCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
