import { AttackType, HeroAttribute, SkillType } from './enums';

export interface IHero {
  name: string;
  skillTrees: ISkillTrees;
  attribute: HeroAttribute;
  portraitImg: string;
  id: number;
  attackType: AttackType;
}

export interface ISkill {
  description: string;
  levelsImg: string;
  maxLevel: number;
  skillImg: string;
  videoUrl: string;
  type: SkillType;
}

export interface ISkillTree {
  orangeSkill: ISkill;
  purpleSkills: [ISkill, ISkill, ISkill];
  blueSkills: [ISkill, ISkill, ISkill];
}

export interface ISkillTrees {
  skillTree1: ISkillTree;
  skillTree2: ISkillTree;
  skillTree3: ISkillTree;
  skillTree4: ISkillTree;
}
