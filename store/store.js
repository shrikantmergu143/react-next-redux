import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { allReducers } from "./allReducers";

const rootReducer = combineReducers({
  allReducers: allReducers
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side

    const persistConfig = {
      key: "nextjs",
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV === "production",
    });

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
