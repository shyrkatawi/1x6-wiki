import { AnyAction } from 'redux';
import { SkillTreesReducerValues } from '../helper';

interface SkillTreesState {
  videoUrl: string;
}

const initialState = {
  videoUrl: '',
} as SkillTreesState;

// eslint-disable-next-line default-param-last
export default function skillTreesReducer(state = initialState, action: AnyAction) {
  if (action.type === SkillTreesReducerValues.SET_VIDEO_URL) {
    return { ...state, videoUrl: action.payload };
  }
  return state;
}
