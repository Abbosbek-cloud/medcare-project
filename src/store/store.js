import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root";
import thunk from "redux-thunk";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: middlewares,
});

export const persistor = persistStore(store);

export default { store, persistor };
