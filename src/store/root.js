import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import doctorSlice from "./doctor.slice";

const rootReducer = combineReducers({
  doctorSlice: doctorSlice,
});

export default persistReducer(
  {
    key: "root",
    storage,
    whitelist: [],
  },
  rootReducer
);
