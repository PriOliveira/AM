import Dispatcher from './Dispatcher';

export function addTvShow(tvShow){
	Dispatcher.dispatch({
		type: 'ADD_TVSHOW',
		data: tvShow
	});
}

export function removeTvShow(imdb){
	Dispatcher.dispatch({
		type: 'REMOVE_TVSHOW',
		data: imdb
	});
}

export function buyTvShow(imdb){
	Dispatcher.dispatch({
		type: 'BUY_TVSHOW',
		data: imdb
	});
}
