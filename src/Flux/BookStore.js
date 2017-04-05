import {EventEmitter} from 'events';
import Dispatcher from './Dispatcher';
import * as BookAPI from '../api/bookAPI';

class BookStore extends EventEmitter{
	constructor(){
		super();
		this.books = [];
		this._fetchBooks();

	}

	_fetchBooks(){
		BookAPI.getBooks().then(books => {
			this.books = books;
			console.log(this.books);
		});
	}

	_getAll(){
		BookAPI.getBooks().then(books => {
			return books;
		});
	}

	_getByISBN13(ISBN13){
		var book = this.books.find((book) => {
			return book.ISBN13 === ISBN13;
		});

		return (book ? book : "undefined");
	}

	_addBook(book){
		this.books.push(book);
		this.emit("change");
	}

	_removeBook(ISBN13){
		this.books = this.books.filter(function(book){
		  if(book.ISBN13 !== ISBN13)
		    return book;
			return false;
		});
		this.emit("change");
	}

	_buyBook(info){
		this.books = this.books.filter(function(book){
		  if(book.ISBN13 === info.ISBN13){
		  	book.Stock -= info.quantity;
				return book;
			}
			return false;
		});
		this.emit("change");
	}

	_handleActions(action){
		switch(action.type){
			case('BUY_BOOK'):
				this._buyBook(action.data);
				break;
			case('ADD_BOOK'):
				this._addBook(action.data);
				break;
			case('REMOVE_BOOK'):
				this._removeBook(action.data);
				break;
			default:
				break;
		}
	}
}

const bookStore = new BookStore();
Dispatcher.register(bookStore._handleActions.bind(bookStore));
export default bookStore;
