import { AnyAction } from 'redux';
import { HeroesReducerValues } from '../helper';
import { IHero } from '../../entities/interfaces';

interface HeroesState {
  heroes: IHero[];
  currentHeroId: number;
  currentHero: IHero | null;
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
