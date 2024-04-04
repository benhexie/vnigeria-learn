import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers";

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
  }),
});

export default store;
