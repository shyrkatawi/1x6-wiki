import { SkillType } from '../enums';

export default abstract class Skill {
  readonly description: string;

  readonly levelsPicture: string;

  readonly maxLevel: number;

  readonly name: string;

  readonly skillPicture: string;

  readonly type: SkillType;

  readonly videoDemonstration: string | null;

  protected constructor(
    description: string,
    levelsPicture: string,
    maxLevel: number,
    name: string,
    skillPicture: string,
    type: SkillType,
    videoDemonstration: string | null
  ) {
    this.description = description;
    this.levelsPicture = levelsPicture;
    this.maxLevel = maxLevel;
    this.name = name;
    this.skillPicture = skillPicture;
    this.type = type;
    this.videoDemonstration = videoDemonstration;
  }
}
