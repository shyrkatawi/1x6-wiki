import React from 'react';
import Skill from '../entities/skills/Skill';

interface Props {
  skill: Skill;
}

const SkillComponent: React.FC<Props> = ({ skill }) => <div>{skill.name}</div>;

export default SkillComponent;
