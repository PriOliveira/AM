import {EventEmitter} from 'events';
import Dispatcher from './Dispatcher';

class BookStore extends EventEmitter{
	constructor(){
		super();
		this.books = [{
			"OriginalTitle": "Harry Potter and the Sorcerer's Stone",
			"Author": "J.K. Rowling",
			"Series": "Harry Potter #1",
			"ISBN": "0439554934",
			"ISBN13": "9780439554930",
			"Publisher": "Arthur A. Levine Books",
			"PublishDate": "26/06/1997",
			"EditionLanguage": "English",
			"Description": "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
			"Rate": 5,
			"Type": "Kindle",
			"Price": 7.52,
			"Stock": 2,
			"Cover": "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
		}, {
			"OriginalTitle": "Harry Potter and the Deathly Hallows",
			"Author": "J.K. Rowling",
			"Series": "Harry Potter #7",
			"ISBN": "0545010225",
			"ISBN13": "9780545010221",
			"Publisher": "Arthur A. Levine Books",
			"PublishDate": "21/07/2007",
			"EditionLanguage": "English",
			"Description": "It's no longer safe for Harry at Hogwarts, so he and his best friends, Ron and Hermione, are on the run. Professor Dumbledore has given them clues about what they need to do to defeat the dark wizard, Lord Voldemort, once and for all, but it's up to them to figure out what these hints and suggestions really mean.",
			"Rate": 5,
			"Type": "Kindle",
			"Price": 7.52,
			"Stock": 5,
			"Cover": "http://harrypotterfanzone.com/wp-content/2009/06/dh-us-jacket-art.jpg",
		}
		];
	}

	_getAll(){
		return this.books;
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
		});
		this.emit("change");
	}

	_buyBook(info){
		this.books = this.books.filter(function(book){
		  if(book.ISBN13 === info.ISBN13){
		  	book.Stock -= info.quantity;	
		  }
		  return book;
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