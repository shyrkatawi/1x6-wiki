import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PreviousOrNextHero from './components/PreviousOrNextHero';
import ToAllHeroesContainer from './components/ToAllHeroesContainer';
import { RootState } from '../../../../redux/store';
import {THero} from "../../../MainScreen/components/HeroesBlock/types";

const UnderBarSection: React.FC = () => {
  const currentHeroId: number = useSelector((state: RootState) => state.heroes.currentHero.id);
  const heroes: THero[] = useSelector((state: RootState) => state.heroes.heroes);

  const getPrevHero = (): THero => {
    let idForSearching: number;
    if (currentHeroId === 1) {
      idForSearching = heroes.length;
    } else {
      idForSearching = currentHeroId - 1;
    }
    for (const hero of heroes) {
      if (hero.id === idForSearching) {
        return { ...hero };
      }
    }
    return { ...heroes[0] };
  };

  const getNextHero = (): THero => {
    let idForSearching: number;
    if (currentHeroId === heroes.length) {
      idForSearching = 1;
    } else {
      idForSearching = currentHeroId + 1;
    }
    for (const hero of heroes) {
      if (hero.id === idForSearching) {
        return { ...hero };
      }
    }
    return { ...heroes[0] };
  };

  const previousHero: THero = getPrevHero();
  const nextHero: THero = getNextHero();

  return (
    <div className="underBarSection">
      <PreviousOrNextHero hero={previousHero} previous={true} />
      <Link to="/">
        <ToAllHeroesContainer />
      </Link>
      <PreviousOrNextHero hero={nextHero} previous={false} />
    </div>
  );
};

export default React.memo(UnderBarSection);
