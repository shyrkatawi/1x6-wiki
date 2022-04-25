import BlueSkill from './skills/BlueSkill';
import PurpleSkill from './skills/PurpleSkill';
import OrangeSkill from './skills/OrangeSkill';

export default class TalentTree {
  readonly orangeSkill: OrangeSkill;

  readonly purpleSkills: [PurpleSkill, PurpleSkill, PurpleSkill];

  readonly blueSkills: [BlueSkill, BlueSkill, BlueSkill];

  constructor(
    orangeSkill: OrangeSkill,
    purpleSkills: [PurpleSkill, PurpleSkill, PurpleSkill],
    blueSkills: [BlueSkill, BlueSkill, BlueSkill],
  ) {
    this.orangeSkill = orangeSkill;
    this.purpleSkills = purpleSkills;
    this.blueSkills = blueSkills;
  }
}
