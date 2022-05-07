import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import HeroesBlock from './components/HeroesBlock';
import {THero} from "./components/HeroesBlock/types";
import {HeroAttribute} from "./constants";

interface HeroesByAttribute {
  strength: THero[];
  agility: THero[];
  intelligence: THero[];
}

const MainScreen = () => {
  const heroes: THero[] = useSelector((state: RootState) => state.heroes.heroes);
  const heroesByAttribute = useMemo(() => {
    const heroesByAttributeMemo: HeroesByAttribute = {
      strength: [],
      agility: [],
      intelligence: [],
    };
    heroes.forEach((hero: THero) => {
      heroesByAttributeMemo[hero.attribute].push(hero);
    });
    return heroesByAttributeMemo;
  }, [heroes]);

  return (
    <div className="screen-wrapper">
      <div className="heroes">
        <HeroesBlock
          heroAttribute={HeroAttribute.STRENGTH}
          heroes={heroesByAttribute.strength} />
        <HeroesBlock
          heroAttribute={HeroAttribute.AGILITY}
          heroes={heroesByAttribute.agility} />
        <HeroesBlock
          heroAttribute={HeroAttribute.INTELLIGENCE}
          heroes={heroesByAttribute.intelligence}
        />
      </div>
    </div>
  );
};

export default MainScreen;

//
// <div className="heroes-block">
//   <div className="hero-attribute">
//     <img
//       className="hero-attribute__img"
//       src="http://localhost:3000/assets/attributes/hero-attribute-strength.png"
//     />
//     <span className="hero-attribute__text">strength</span>
//   </div>
//   <div className="hero-portraits">
//     <div className="hero-portrait">
//       <Link to="/skills">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/alchemist.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">alchemist</div>
//       </Link>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/axe.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">axe</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/bristleback.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">bristleback</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/huskar.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">huskar</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/legion_commander.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">legion commander</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/pudge.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">pudge</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/str/wraith_king.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">wraith king</div>
//       </a>
//     </div>
//   </div>
// </div>
// <div className="heroes-block">
//   <div className="hero-attribute">
//     <img
//       className="hero-attribute__img"
//       src="http://localhost:3000/assets/attributes/hero-attribute-agility.png"
//     />
//     <span className="hero-attribute__text">agility</span>
//   </div>
//   <div className="hero-portraits">
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/antimage.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">antimage</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/ember_spirit.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">ember spirit</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/hoodwink.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">hoodwink</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/juggernaut.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">juggernaut</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/nevermore.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">nevermore</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/phantom_assassin.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">phantom assassin</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/terrorblade.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">terrorblade</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/agi/troll_warlord.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">troll warlord</div>
//       </a>
//     </div>
//   </div>
// </div>
// <div className="heroes-block">
//   <div className="hero-attribute">
//     <img
//       className="hero-attribute__img"
//       src="http://localhost:3000/assets/attributes/hero-attribute-intelligence.png"
//     />
//     <span className="hero-attribute__text">intelligence</span>
//   </div>
//   <div className="hero-portraits">
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/int/lina.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">lina</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/int/ogre_magi.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">ogre magi</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/int/puck.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">puck</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/int/queen_of_pain.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">queen of pain</div>
//       </a>
//     </div>
//     <div className="hero-portrait">
//       <a href="">
//         <img
//           src="http://localhost:3000/assets/heroes/portraits/int/void_spirit.png"
//           className="hero-portrait__img"
//         />
//         <div className="hero-portrait__text">void_spirit</div>
//       </a>
//     </div>
//   </div>
// </div>
