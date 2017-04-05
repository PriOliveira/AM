import axios from 'axios';

const BOOK_PATH = 'http://localhost:3001/books';

export function getBooks(){
  return axios.get(BOOK_PATH)
    .then(response => response.data);
}

export function removeBook(id){
  return axios.delete(BOOK_PATH + '\\' + id);
}

export function addBook(book){
  return axios.post(BOOK_PATH, book)
    .then(response => console.log('Saved.'));
}
