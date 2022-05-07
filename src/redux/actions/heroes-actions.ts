import { HeroesReducerValues } from '../constants';
import {THero} from "../../components/MainScreen/components/HeroesBlock/types";

const heroesActions = {
  setHeroes: (heroes: THero[]) => ({ type: HeroesReducerValues.SET_HEROES, payload: heroes }),
  setCurrentHero: (hero: THero) => ({ type: HeroesReducerValues.SET_CURRENT_HERO, payload: hero }),
};

export default heroesActions;
