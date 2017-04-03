import React from 'react';

import BookStore from '../Flux/BookStore';
import Grid from './Grid';

class BookGrid extends React.Component{
	render(){
		return (
			<Grid store={BookStore} type="books"/>
		);
	}
}

export default BookGrid;
