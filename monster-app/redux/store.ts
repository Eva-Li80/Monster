import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from "./monsterSlice"

export const store = configureStore({
  reducer: {
    monsters: monsterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
