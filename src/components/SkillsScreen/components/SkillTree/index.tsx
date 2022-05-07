import React from 'react';
import Skill from './components/Skill';
import {SkillDescriptionPosition, TSkill} from "./components/Skill/types";
import {TSkillTree} from "./types";

interface Props {
  skillTree: TSkillTree;
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
          {skillTree.purpleSkills.map((purpleSkill: TSkill, index: number) => (
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
          {skillTree.blueSkills.map((blueSkill: TSkill, index: number) => (
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
