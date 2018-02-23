import { START_PLAYING, STOP_PLAYING, UiActions } from '../actions/ui.actions';

export interface UiState {
  isPlaying: boolean;
}

export const initialState: UiState = {
  isPlaying: false
};

/**
 * Reducer to handle the UI states in the application
 * @param {UiState} state
 * @param {UiActions} action
 * @returns {any}
 */
export function reducer(state = initialState, action: UiActions): UiState {
  switch (action.type) {
    case START_PLAYING:
      return {
        isPlaying: true
      };
    case STOP_PLAYING:
      return {
        isPlaying: false
      };
    default:
      return state;
  }
}


// Selectors
const getIsPlaying = (state: UiState) => state.isPlaying;