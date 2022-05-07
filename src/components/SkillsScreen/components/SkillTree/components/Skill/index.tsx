import React from 'react';
import { Markup } from 'interweave';
import { useDispatch } from 'react-redux';
import skillTreesActions from '../../../../../../redux/actions/skillTrees-actions';
import {SkillDescriptionPosition, SkillType, TSkill} from "./types";

interface Props {
  skill: TSkill;
  skillDescriptionPosition: SkillDescriptionPosition;
}

const Skill: React.FC<Props> = ({ skill, skillDescriptionPosition }) => {
  const dispatch = useDispatch();
  const dispatchSkillVideoUrl = () => {
    dispatch(skillTreesActions.setVideoUrl(skill.videoUrl));
  };

  const divClassName = `${skill.type}Skill skill`;
  const skillImgClassName = `${skill.type}-skill-img`;
  const skillImgPath = skill.skillImg;
  const skillLevelsPanelClassName = `skill-levels-panel ${skill.type}-skill-levels-panel-img`;

  let skillLevelsPanelPath;
  if (skill.type === SkillType.PURPLE) {
    if (skill.maxLevel === 2) {
      skillLevelsPanelPath = 'http://localhost:3000/assets/skills/purple-skill-levels-panel-1.png';
    } else {
      skillLevelsPanelPath = 'http://localhost:3000/assets/skills/purple-skill-levels-panel-2.png';
    }
  } else {
    skillLevelsPanelPath = `http://localhost:3000/assets/skills/${skill.type}-skill-levels-panel.png`;
  }

  let skillHint = null;
  if (skill.videoUrl !== '') {
    skillHint = (
      <img className="skill-hint" src="http://localhost:3000/assets/skills/skill-hint.png" />
    );
  }
  const skillDescriptionPositionClassName =
    skillDescriptionPosition === SkillDescriptionPosition.RIGHT
      ? 'skillDescriptionPosition-right'
      : 'skillDescriptionPosition-left';

  return (
    <div className={divClassName} onClick={dispatchSkillVideoUrl}>
      <img className={skillImgClassName} src={skillImgPath} />
      <img className={skillLevelsPanelClassName} src={skillLevelsPanelPath} />
      {skillHint}
      <Markup
        className={`skillDescription ${skillDescriptionPositionClassName}`}
        content={skill.description}
      />
    </div>
  );
};

export default Skill;
