import React from 'react';

import {MAX_QUANTITY} from '../constants'

import BookStore from '../Flux/BookStore';
import * as BookActions from '../Flux/BookActions';

import Select from './Select';

class Details extends React.Component{
	render(){
		let style = {
			'details': {
				'padding': '10px',
				'textAlign': 'left'
			}
		}
		let book = this.props.book;
		return (
			<div className="col" style={style.details}>
				<h2>Details</h2>
				<br />
				<b>Original Title:</b> {book.OriginalTitle} <br />
				<b>Author:</b> {book.Author} <br />
				<b>Series:</b> {book.Series} <br />
				<b>Length:</b> {book.Length} pages<br />
				<b>Publisher:</b> {book.Publisher} <br />
				<b>ISBN:</b> {book.ISBN} <br />
				<b>ISBN13:</b> {book.ISBN13} <br />
				<b>Publish Date:</b> {book.PublishDate} <br />
				<b>Edition Language:</b> {book.EditionLanguage} <br />
				<b>Rate:</b> {book.Rate}
			</div>
	);
	}
}

class PriceDiv extends React.Component{
	_handleClick(){
		let selectedQuantity = 1; //DEBUG
		this.props.handleBuy(selectedQuantity);
	}
	render(){
		let style = {
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
			}
		};

		let quantityArray = new Array(MAX_QUANTITY);
		for (let i = 0; i < quantityArray.length; i++) {
			quantityArray[i] = i+1;
		}

		return(
			<div style={style.price}>
				<h3 style={style.subtitle}>Price</h3>
				<h2>$ {this.props.price}</h2>
				<br />
				<br />
				Quantity:
				<Select items={quantityArray}/>
				<br />
				<br />
				<button className="btn btn-success" onClick={this._handleClick.bind(this)}>
					Add to Cart
				</button>
			</div>
		);
	}
}

class BookView extends React.Component{
	constructor(){
		super();
		this.state = {
			book: {}
		}
	}

	componentDidMount() {
		this.setState({
			book: BookStore._getByISBN13(this.props.params.bookId)
		});
	}

	_handleBuy(quantity){
		// var selectedQuantity = document.getElementById("quantityDropdown");
		// var quantity = selectedQuantity.options[selectedQuantity.selectedIndex].value;
		//let quantity = 1;
	  console.debug(quantity);

		BookActions.buyBook({ISBN13: this.state.book.ISBN13, quantity: quantity});
	}


	render(){
		let book = this.state.book;
		let style = {
			'img': {
				'margin': '20px',
				'height': '300px',
				/*position: absolute; */
				'top': '0px',
				'left': '10px'
			},
			'subtitle': {
				'color': 'gray',
				'marginTop': '10px'
			},
			'padding': {
				'padding': '10px'
			},
			'alignLeft': {
				'textAlign': 'left'
			}
		};

		let quantityArray = new Array(MAX_QUANTITY);
		for (let i = 0; i < quantityArray.length; i++) {
			quantityArray[i] = i+1;
		}

		return (
			<div className="container">
				<div id="book_main" className="row">
					{/*<div className=".col-xs-12 .col-md-8">*/}
					<div className="col-xs-3">
						<img className="img-thumbnail img-responsive" style={style.img}
							 height="300"
							 src={book.Cover} alt={book.OriginalTitle + " Cover"}/>
					</div>
					<div className="col-xs-6" style={style.alignLeft}>
							<h1>{book.OriginalTitle}</h1>
							<h3 style={style.subtitle}>{book.Author}</h3>

							{/*<button className="btn btn-default">{book.Type}</button>*/}
							<hr />
							<div id="book_description" style={style.padding}>
								{book.Description}
							</div>
						</div>
					<div className=" col-xs-3">
						<PriceDiv price={book.Price} handleBuy={this._handleBuy.bind(this)}/>
					</div>
				</div>
				{/*<div id="recomendations" className="row">
				</div>*/}
				<hr />
				<div id="book_details" className="row" >
					<Details book={book}/>
				</div>
			</div>
		);
	}
}

export default BookView;
