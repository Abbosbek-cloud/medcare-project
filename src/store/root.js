import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({});

export default persistReducer(
  {
    key: "root",
    storage,
    whitelist: [],
  },
  rootReducer
);
