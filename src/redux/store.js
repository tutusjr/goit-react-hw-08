import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/slice"
import authReducer from "./auth/slice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const rootReducer = combineReducers({
    contacts : contactsReducer,
    auth : authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer : persistedReducer
})

export const persistor = persistStore(store)