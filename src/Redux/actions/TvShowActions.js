import {ADD_TVSHOW, REMOVE_TVSHOW} from '../constants';

export const addTvShow = (tvShow) => {
  return {
    type: ADD_TVSHOW,
    payload: tvShow
  }
}

export const removeTvShow = (id) => {
  return {
    type: REMOVE_TVSHOW,
    payload: id
  }
}
