import React from 'react';

import BookStore from '../Flux/BookStore';
import * as BookActions from '../Flux/BookActions';

import BooksGrid from './BooksGrid';


class RegisterBook extends React.Component{
	constructor(){
		super();
		this.state = {
			book: BookStore._getByISBN13("9780545010221")
		}
	}

	_handleSave(){
		BookActions.addBook(this.state.book);
	}

	render(){
		let book = this.state.book;
		let style = {
			'img': {
				'margin': '20px',
				'height': '300px',
				'top': '0px',
				'left': '10px'
			},
			'subtitle': {
				'color': 'gray',
				'marginTop': '10px'
			},
			'price': {
				'textAlign': 'center',
				'margin': '20px',
				'borderRadius': '25px',
			    /*border: 2px solid #808080;*/
			    'boxShadow': '0 0 0 4px rgba(0,0,0,.1)',
			    'padding': '20px',
			    'width': '200px',
			    'height': '300px'
			},
			'padding': {
				'padding': '10px'
			}
		};


		return (
			<div className="container">
				<div className="row">
					<button className="btn btn-danger" >Cancel</button>

					<button className="btn btn-success" onClick={this._handleSave.bind(this)}>Save</button>
					<BooksGrid />
				</div>
				<div id="book_main" className="row">
					{/*<div className=".col-xs-12 .col-md-8">*/}
					<div className="col-xs-3">
						<img className="img-thumbnail img-responsive" style={style.img}
							 height="300"
							 src={book.Cover} alt={book.OriginalTitle + " Cover"}/>
					</div>
					<div className="col-xs-6">
							<h1>{book.OriginalTitle}</h1>
							<h3 style={style.subtitle}>{book.Author}</h3>

							{/*<button className="btn btn-default">{book.Type}</button>*/}
							<hr />
							<div id="book_description" style={style.padding}>
								{book.Description}
							</div>
						</div>
					<div className=" col-xs-3" style={style.price}>
						<h3 style={style.subtitle}>Price</h3>
						<h2>$ {book.Price}</h2>
						<br />
			        	<br />
			        	Quantidade:
						<input type="number" min="0" max="100" defaultValue="1"/>
						<br />
						<br />

					</div>
				</div>
				<div id="recomendations" className="row">
				</div>
				<hr />
				<div id="book_details" className="row">
					<div className="col" style={style.padding}>
						<h2>Details</h2>
						<br />
						<b>Original Title:</b> {book.OriginalTitle} <br />
						<b>Author:</b> {book.Author} <br />
						<b>Publisher:</b> {book.Publisher} <br />
						<b>ISBN:</b> {book.ISBN} <br />
						<b>ISBN13:</b> {book.ISBN13} <br />
						<b>Publish Date:</b> {book.PublishDate} <br />
						<b>EditionLanguage:</b> {book.EditionLanguage} <br />
						<b>Series:</b> {book.Series} <br />
						<b>Rate:</b> {book.Rate}
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterBook;
