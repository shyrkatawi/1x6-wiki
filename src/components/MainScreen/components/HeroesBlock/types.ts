import {TSkillTrees} from "../../../SkillsScreen/components/SkillTree/types";
import {HeroAttribute} from "../../constants";
import {AttackType} from "../../../SkillsScreen/components/SkillTree/components/Skill/types";

export type THero = {
  name: string;
  skillTrees: TSkillTrees;
  attribute: HeroAttribute;
  portraitImg: string;
  id: number;
  attackType: AttackType;
};
