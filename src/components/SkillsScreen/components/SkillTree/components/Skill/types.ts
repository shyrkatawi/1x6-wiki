export enum SkillType {
  ORANGE = 'orange',
  PURPLE = 'purple',
  BLUE = 'blue',
}

export type TSkill = {
  description: string;
  levelsImg: string;
  maxLevel: number;
  skillImg: string;
  videoUrl: string;
  type: SkillType;
};

export enum SkillDescriptionPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum AttackType {
  MELEE = 'melee',
  RANGE = 'range',
}