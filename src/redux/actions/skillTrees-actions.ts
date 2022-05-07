import { SkillTreesReducerValues } from '../constants';

const skillTreesActions = {
  setVideoUrl: (videoUrl: string) => ({ type: SkillTreesReducerValues.SET_VIDEO_URL, payload: videoUrl }),
};

export default skillTreesActions;
