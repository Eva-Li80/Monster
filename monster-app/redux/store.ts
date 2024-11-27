import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from "./monsterSlice"
import PostReducer from "./postSlice"

export const store = configureStore({
  reducer: {
    monsters: monsterReducer,
    Posts: PostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
