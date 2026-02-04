import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import counterReducer from "@/ExampleComponents/ReduxExample/counterSlice";

/// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  
});

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // Optional: whitelist specific reducers to persist
  whitelist: ["user", "cart","counter"], // only user and cart will be persisted
  // Optional: blacklist specific reducers
  // blacklist: ["counter"], // counter won't be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;