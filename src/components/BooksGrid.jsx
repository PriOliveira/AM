import React from 'react';
import {Link} from 'react-router';

import BookStore from '../Flux/BookStore';

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
			    'margin': '10px',
					'width': '200px'
			    //'width': '50%'
			},
			'alignLeft': {
				'textAlign': 'left'
			},
			'wordWrap': {
				'wordWrap': 'break-word'
			},
			'title': {
				'color': 'black'
			},
			'subtitle': {
				'color': 'gray'
			}
		}

		return (
			<div className='container'>
				<h3>Books</h3>
				<hr/>
				{
					this.state.books.map((book, index) => {
						return (
							/*<div key={book.ISBN13}>*/
							<div key={index} style={Object.assign({}, style.div, style.alignLeft)}>
								<Link to={`/books/${book.ISBN13}`}>
									<img style={style.img} height="200"
									 className="img-thumbnail img-responsive"
									 src={book.Cover} alt={book.OriginalTitle + " Cover"}/>
								 	<div style={style.wordWrap}>
										<h4 style={style.title}>{book.OriginalTitle}</h4>
										<h5 style={style.subtitle}>{book.Author}</h5>
									</div>
								</Link>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default BookGrid;
