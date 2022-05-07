import React from 'react';
import HeroPortrait from './components/HeroPortrait';
import {THero} from "./types";
import {HeroAttribute, heroAttributesImg} from "../../constants";

interface Props {
  heroAttribute: HeroAttribute;
  heroes: THero[];
}

const HeroesBlock: React.FC<Props> = ({ heroAttribute, heroes }) => {
  return (
    <div className="heroes-block">
      <div className="hero-attribute">
        <img className="hero-attribute__img" src={heroAttributesImg[heroAttribute]} />
        <span className="hero-attribute__text">{heroAttribute}</span>
      </div>
      <div className="hero-portraits">
        {heroes.map((hero: THero) => (
          <HeroPortrait key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroesBlock;
