import Dispatcher from './Dispatcher';

export function addBook(book){
	Dispatcher.dispatch({
		type: 'ADD_BOOK',
		data: book
	});
}

export function removeBook(isbn13){
	Dispatcher.dispatch({
		type: 'REMOVE_BOOK',
		data: isbn13
	});
}

export function buyBook(isbn13){
	Dispatcher.dispatch({
		type: 'BUY_BOOK',
		data: isbn13
	});
}