import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import SkillTreeComponent from './SkillTree';
import { RootState } from '../../redux/store';
import { SkillDescriptionPosition } from '../../entities/enums';
import { ISkillTrees } from '../../entities/interfaces';
import UnderBarSection from './under-bar-section/UnderBarSection';

const SkillsScreen: React.FC = () => {
  const skillTrees: ISkillTrees = useSelector((state: RootState) => state.heroes.currentHero.skillTrees);
  const videoUrlFromStore: string = useSelector((state: RootState) => state.skillTrees.videoUrl);

  const [videoUrl, setVideoUrl] = useState(videoUrlFromStore);
  useEffect(() => {
    setVideoUrl(videoUrlFromStore);
  }, [videoUrlFromStore]);

  if (!skillTrees) {
    return <div className="screen-wrapper" />;
  }

  return (
    <div className="screen-wrapper">
      <div className="skillTrees">
        <SkillTreeComponent
          skillTree={skillTrees.skillTree1}
          skillDescriptionPosition={SkillDescriptionPosition.RIGHT}
        />
        <SkillTreeComponent
          skillTree={skillTrees.skillTree2}
          skillDescriptionPosition={SkillDescriptionPosition.RIGHT}
        />
        <SkillTreeComponent
          skillTree={skillTrees.skillTree3}
          skillDescriptionPosition={SkillDescriptionPosition.LEFT}
        />
        <SkillTreeComponent
          skillTree={skillTrees.skillTree4}
          skillDescriptionPosition={SkillDescriptionPosition.LEFT}
        />
      </div>
      <div className="videoDemonstration">
        <ReactPlayer url={videoUrl} playing={true} loop={true} controls={true} muted={true} />
      </div>
      <UnderBarSection />
    </div>
  );
};

export default SkillsScreen;
