import React from 'react';
import { useDispatch } from 'react-redux';
import heroesActions from '../../../../../../redux/actions/heroes-actions';
import skillTreesActions from '../../../../../../redux/actions/skillTrees-actions';
import {THero} from "../../../../../MainScreen/components/HeroesBlock/types";
import {heroAttributesImg} from "../../../../../MainScreen/constants";

interface Props {
  hero: THero;
  previous: boolean;
}
const PreviousOrNextHero: React.FC<Props> = ({ hero, previous }) => {
  const dispatch = useDispatch();
  const dispatchCurrentHero = () => {
    dispatch(heroesActions.setCurrentHero(hero));
    dispatch(skillTreesActions.setVideoUrl(''));
  };

  return (
    <div
      className={`prev-next-hero-block ${previous ? 'previous-hero-block' : 'next-hero-block'}`}
      onClick={dispatchCurrentHero}
    >
      <img className="portraitImg" src={hero.portraitImg} alt="" />
      <div className="description">
        <div className="prev-next-text">{previous ? 'Previous ' : 'Next'} hero</div>
        <div className="heroName">{hero.name}</div>
        <div className="heroInfo">
          <img className="heroAttributesImg" src={heroAttributesImg[hero.attribute]} alt="" />
          <span className="attackType">{hero.attackType}</span>
        </div>
      </div>
    </div>
  );
};

export default PreviousOrNextHero;
