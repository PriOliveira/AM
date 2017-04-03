import {EventEmitter} from 'events';
import Dispatcher from './Dispatcher';

class TvShowStore extends EventEmitter{
	constructor(){
		super();
		this.tvshows = [{
			"OriginalTitle": "Vikings",
      "IMDB": "tt2306299",
			"Creator": "Michael Hirst",
			"Year": 2013,
      "Seasons": 4,
			"Country": "USA",
			"Description": `The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.`,
			"Rate": 5,
			"Price": 3.99,
      "Actors": ["Katheryn Winnick", "Alexander Ludwig", "Travis Fimmel"],
			"Cover": "http://www.impawards.com/tv/posters/vikings.jpg",
    },
		];
	}

	_getAll(){
		return this.tvshows;
	}

	_getById(IMDB){
		let tvshow = this.tvshows.find((tvshow) => {
			return tvshow.IMDB === IMDB;
		});

		return (tvshow ? tvshow : "undefined");
	}

	_add(tvshow){
		this.tvshows.push(tvshow);
		this.emit("change");
	}

	_remove(IMDB){
		this.tvshows = this.tvshows.filter(function(tvshow){
		  if(tvshow.IMDB !== IMDB)
		    return tvshow;
			return false;
		});
		this.emit("change");
	}

	_buy(info){
		// this.books = this.books.filter(function(book){
		//   if(book.ISBN13 === info.ISBN13){
		//   	book.Stock -= info.quantity;
		// 		return book;
		// 	}
		// 	return false;
		// });
		this.emit("change");
	}

	_handleActions(action){
		switch(action.type){
			case('BUY_TVSHOW'):
				this._buy(action.data);
				break;
			case('ADD_TVSHOW'):
				this._add(action.data);
				break;
			case('REMOVE_TVSHOW'):
				this._remove(action.data);
				break;
			default:
				break;
		}
	}
}

const tvShowStore = new TvShowStore();
Dispatcher.register(tvShowStore._handleActions.bind(tvShowStore));
export default tvShowStore;
