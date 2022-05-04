import React from 'react';
import { IHero } from '../../entities/interfaces';
import { HeroAttribute } from '../../entities/enums';
import HeroPortrait from './HeroPortrait';
import { heroAttributesImg } from '../../entities/constants';

interface Props {
  heroAttribute: HeroAttribute;
  heroes: IHero[];
}

const HeroesBlock: React.FC<Props> = ({ heroAttribute, heroes }) => {
  return (
    <div className="heroes-block">
      <div className="hero-attribute">
        <img className="hero-attribute__img" src={heroAttributesImg[heroAttribute]} />
        <span className="hero-attribute__text">{heroAttribute}</span>
      </div>
      <div className="hero-portraits">
        {heroes.map((hero: IHero) => (
          <HeroPortrait key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroesBlock;
