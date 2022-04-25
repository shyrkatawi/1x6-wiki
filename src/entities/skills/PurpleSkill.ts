import Skill from './Skill';
import { SkillType } from '../enums';

export default class PurpleSkill extends Skill {
  constructor(
    description: string,
    levelsPicture: string,
    maxLevel: number,
    name: string,
    skillPicture: string,
    videoDemonstration: string | null,
  ) {
    super(
      description,
      levelsPicture,
      maxLevel,
      name,
      skillPicture,
      SkillType.BLUE,
      videoDemonstration,
    );
  }
}
