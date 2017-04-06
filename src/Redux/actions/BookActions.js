import {ADD_BOOK, REMOVE_BOOK} from '../constants';
import bookAPI from '../../api/bookAPI';


export const setBooks = (books) => {
  return {
    type: 'SET_BOOKS',
    payload: books
  }
}

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: id
  }
}

export const fetchBooks = () => {
  return () => {
    bookAPI.getBooks().then((books) => {
      setBooks({
        type: 'SET_BOOKS',
        payload: books
      });
    });
  }
}
