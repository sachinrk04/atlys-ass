import * as actionType from "../action/types";

export const initialeState = {
  isModal: false,
  isLogin: true,
  user: {
    isUser: false,
    userId: "",
    emailID: "",
  },
};

export const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case actionType.OPEN_MODAL:
      return { ...state, isModal: true };
    case actionType.CLOSE_MODAL:
      return { ...state, isModal: false };
    case actionType.LOGIN:
      return { ...state, isLogin: true };
    case actionType.REGISTER:
      return { ...state, isLogin: false };
    case actionType.IS_AUTH_LOGIN:
      return {
        ...state,
        user: {
          isUser: true,
          userId: action.payload.userId,
          emailID: action.payload.email,
        },
      };
    default:
      return state;
  }
};
