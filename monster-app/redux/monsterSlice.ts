import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Monster } from '../types/types';
import monsterData from "../data/monster.json"

interface MonsterState {
  monsters: Monster[];
}

const initialState: MonsterState = {
  monsters: monsterData.monsters
};

const monsterSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
    addMonster: (state, action: PayloadAction<Monster>) => {
      state.monsters.push(action.payload);
    },
    removeMonster: (state, action: PayloadAction<string>) => {
      state.monsters = state.monsters.filter(monster => monster.id !== action.payload);
    },
    updateMonster: (state, action: PayloadAction<Monster>) => {
      const { id, name, color, eyes , image} = action.payload;
      const monster = state.monsters.find(monster => monster.id === id);
      if (monster) {
        monster.name = name;
        monster.color = color;
        monster.eyes = eyes;
        monster.image = image;
      }
    },
  },
});

export const { addMonster, removeMonster, updateMonster } = monsterSlice.actions;

export default monsterSlice.reducer;
