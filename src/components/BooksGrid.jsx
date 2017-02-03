import React from 'react';

import BookStore from '../Flux/BookStore';

import NavBar 	 	 from './NavBar';

class BookGrid extends React.Component{
	constructor(){
		super();
		this.state = {
			books: BookStore._getAll()
		}
	}

	_getBooks(){
		this.setState({
	      data: BookStore._getAll()
	    });
	}

	componentWillMount() {
		BookStore.on("change", this._getBooks.bind(this));
	}

	componentWillUnmount() {
		BookStore.removeListener("change", this._getBooks.bind(this));
	}

	render(){
		let style = {
			'img': {
				'margin': '20px',
				'height': '200px',
				'top': '0px',
				'left': '10px'
			},
			'div': {
			    'display': 'inline-block',
			    'margin': '10px'
			    //'width': '50%'
			}
		}

		return (
			<div className="container">
			{
				this.state.books.map((book, index) => {
					return (
						/*<div key={book.ISBN13}>*/
						<div key={index} style={style.div}>
							<img style={style.img} height="200" className="img-thumbnail img-responsive"
								 src={book.Cover} alt={book.OriginalTitle + " Cover"}/>
							<h5>{book.OriginalTitle}</h5><br/>
							{book.Author}
						</div>
					);
				})
			}
			</div>
		);
	}
}

export default BookGrid;
