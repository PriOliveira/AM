import {ADD_BOOK, REMOVE_BOOK} from '../constants';

const bookReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_BOOK:
      return state.filter((book) => {
        if(book.ISBN13 !== action.payload)
          return book;
      });
    default:
      return state;
  }
}
export default bookReducer;
