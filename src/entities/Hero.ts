import TalentTree from './TalentTree';
import { HeroAttribute } from './enums';

class Hero {
  readonly name: string;

  readonly talentTrees: [TalentTree, TalentTree, TalentTree, TalentTree];

  readonly attribute: HeroAttribute;

  readonly portraitPicture: string;

  constructor(
    name: string,
    talentTrees: [TalentTree, TalentTree, TalentTree, TalentTree],
    attribute: HeroAttribute,
    portraitPicture: string,
  ) {
    this.name = name;
    this.talentTrees = talentTrees;
    this.attribute = attribute;
    this.portraitPicture = portraitPicture;
  }
}
