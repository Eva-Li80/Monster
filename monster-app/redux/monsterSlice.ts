import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Monster } from "../types/types";
import monsterData from "../data/monster.json";

interface MonsterState {
  monsters: Monster[];
  activeMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: monsterData.monsters,
  activeMonster: null,
};

const monsterSlice = createSlice({
  name: "monsters",
  initialState,
  reducers: {
    setActiveMonster: (state, action: PayloadAction<Monster | null>) => {
      state.activeMonster = action.payload;
    },
    addMonster: (state, action: PayloadAction<Monster>) => {
      state.monsters.push(action.payload);
    },
    removeMonster: (state, action: PayloadAction<string>) => {
      state.monsters = state.monsters.filter(
        (monster) => monster.id !== action.payload
      );
    },
    updateMonster: (state, action: PayloadAction<Monster>) => {
      const { id, name, color, eyes, image } = action.payload;
      const monster = state.monsters.find((monster) => monster.id === id);
      if (monster) {
        monster.name = name;
        monster.color = color;
        monster.eyes = eyes;
        monster.image = image;
      }
    },
  },
});

export const {setActiveMonster, addMonster, removeMonster, updateMonster } =
  monsterSlice.actions;

export default monsterSlice.reducer;
