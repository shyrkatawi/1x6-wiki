import React from 'react';
import Skill from './Skill';
import { ISkill, ISkillTree } from '../../entities/interfaces';
import { SkillDescriptionPosition } from '../../entities/enums';

interface Props {
  skillTree: ISkillTree;
  skillDescriptionPosition: SkillDescriptionPosition;
}

const SkillTree: React.FC<Props> = ({ skillTree, skillDescriptionPosition }) => {
  return (
    <div className="skillTree">
      <div className="skill-block">
        <div className="">
          <Skill
            skill={skillTree.orangeSkill}
            skillDescriptionPosition={skillDescriptionPosition}
          />
        </div>
      </div>
      <div className="skill-block">
        <div className="purpleSkills">
          {skillTree.purpleSkills.map((purpleSkill: ISkill, index: number) => (
            <Skill
              key={index}
              skill={purpleSkill}
              skillDescriptionPosition={skillDescriptionPosition}
            />
          ))}
        </div>
      </div>
      <div className="skill-block">
        <div className="blueSkills">
          {skillTree.blueSkills.map((blueSkill: ISkill, index: number) => (
            <Skill
              key={index}
              skill={blueSkill}
              skillDescriptionPosition={skillDescriptionPosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkillTree);
