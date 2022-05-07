import { TSkill } from './components/Skill/types';

export type TSkillTree = {
  orangeSkill: TSkill;
  purpleSkills: [TSkill, TSkill, TSkill];
  blueSkills: [TSkill, TSkill, TSkill];
};

export type TSkillTrees = {
  skillTree1: TSkillTree;
  skillTree2: TSkillTree;
  skillTree3: TSkillTree;
  skillTree4: TSkillTree;
};
