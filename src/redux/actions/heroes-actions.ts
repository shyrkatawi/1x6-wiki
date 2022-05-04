import { HeroesReducerValues } from '../helper';
import { IHero } from '../../entities/interfaces';

const heroesActions = {
  setHeroes: (heroes: IHero[]) => ({ type: HeroesReducerValues.SET_HEROES, payload: heroes }),
  setCurrentHero: (hero: IHero) => ({ type: HeroesReducerValues.SET_CURRENT_HERO, payload: hero }),
};

export default heroesActions;
