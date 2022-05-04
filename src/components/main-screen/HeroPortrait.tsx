import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IHero } from '../../entities/interfaces';
import heroesActions from '../../redux/actions/heroes-actions';

interface Props {
  hero: IHero;
}
const HeroPortrait: React.FC<Props> = ({ hero }) => {
  const dispatch = useDispatch();
  const dispatchCurrentHero = () => {
    dispatch(heroesActions.setCurrentHero(hero));
  };

  return (
    <div className="hero-portrait" onClick={dispatchCurrentHero}>
      <Link to="/skills">
        <img src={hero.portraitImg} className="hero-portrait__img" />
        <div className="hero-portrait__text">{hero.name}</div>
      </Link>
    </div>
  );
};

export default HeroPortrait;
