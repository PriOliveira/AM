import {ADD_TVSHOW, REMOVE_TVSHOW} from '../constants';

const tvShowReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TVSHOW:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_TVSHOW:
      return state.filter((tvShow) => {
        if(tvShow.IMDB !== action.payload)
          return tvShow;
      });
    default:
      return state;
  }
}
export default tvShowReducer;
