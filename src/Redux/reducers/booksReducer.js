const books = (state=[], action) => {
  switch (action.type) {
  case 'ADD_BOOK':
    return [
      ...state,
      action.payload,
    ];
  case 'REMOVE_BOOK':
    return state.filter((item) => {
      if(item.ISBN13 !== action.payload)
        return item;
    });
  default:
    return state;

}
}

export default toDos;
