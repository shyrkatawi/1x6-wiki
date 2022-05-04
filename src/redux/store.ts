import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './reducers/heroes-reducer';
import skillTreesReducer from './reducers/skillTrees-reducer';

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    skillTrees: skillTreesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch