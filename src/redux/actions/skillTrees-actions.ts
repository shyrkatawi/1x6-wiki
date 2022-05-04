import { SkillTreesReducerValues } from '../helper';

const skillTreesActions = {
  setVideoUrl: (videoUrl: string) => ({ type: SkillTreesReducerValues.SET_VIDEO_URL, payload: videoUrl }),
};

export default skillTreesActions;
