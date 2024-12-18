import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/slice"
import authReducer from "./auth/slice"

const authPersistConfig = {
  key:"auth",
  storage,
  whitelist: ["token"]
}

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
    contacts : contactsReducer,
    auth : persistReducer(authPersistConfig, authReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export const persistor = persistStore(store)