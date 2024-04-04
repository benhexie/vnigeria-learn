import { ActionInterface } from "../../types";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
