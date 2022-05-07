import { AnyAction } from 'redux';
import { HeroesReducerValues } from '../constants';
import {THero} from "../../components/MainScreen/components/HeroesBlock/types";

type HeroesState = {
  heroes: THero[];
  currentHeroId: number;
  currentHero: THero | null;
}

const initialState = {
  heroes: [],
  currentHeroId: 0,
  currentHero: null,
} as HeroesState;

// eslint-disable-next-line default-param-last
export default function heroesReducer(state = initialState, action: AnyAction) {
  if (action.type === HeroesReducerValues.SET_HEROES) {
    return { ...state, heroes: action.payload };
  }
  if (action.type === HeroesReducerValues.SET_CURRENT_HERO) {
    return { ...state, currentHero: {...action.payload} };
  }
  return state;
}
