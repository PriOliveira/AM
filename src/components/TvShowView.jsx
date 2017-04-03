import React from 'react';

import {MAX_QUANTITY} from '../constants'

import TvShowStore from '../Flux/TvShowStore';
import * as TvShowActions from '../Flux/TvShowActions';

import Select from './Select';

class Details extends React.Component{
	render(){
		let style = {
			'details': {
				'padding': '10px',
				'textAlign': 'left'
			}
		}
		let tvshow = this.props.tvshow;
		return (
			<div className="col" style={style.details}>
				<h2>Details</h2>
				<br />
				<b>Original Title:</b> {tvshow.OriginalTitle} <br />
        <b>Creator:</b> {tvshow.Creator} <br />
        <b>IMDB:</b> {tvshow.IMDB} <br />
        <b>Year:</b> {tvshow.Year} <br />
				<b>Seasons:</b> {tvshow.Seasons} <br />
				<b>Country:</b> {tvshow.Country} <br />
				<b>Rate:</b> {tvshow.Rate}
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
		    border: '2px solid rgba(0, 0, 0, 0.1)',
		    // 'boxShadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
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

class TvShowView extends React.Component{
	constructor(){
		super();
		this.state = {
			tvshow: {}
		}
	}

	componentDidMount() {
		this.setState({
			tvshow: TvShowStore._getById(this.props.params.tvshowId)
		});
	}

	_handleBuy(quantity){
		// var selectedQuantity = document.getElementById("quantityDropdown");
		// var quantity = selectedQuantity.options[selectedQuantity.selectedIndex].value;
		//let quantity = 1;
	  console.debug(quantity);

		TvShowActions.buyTvShow({IMDB: this.state.tvshow.IMDB, quantity: quantity});
	}


	render(){
		let tvshow = this.state.tvshow;
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
				<div id="tvshow_main" className="row">
					{/*<div className=".col-xs-12 .col-md-8">*/}
					<div className="col-xs-3">
						<img className="img-thumbnail img-responsive" style={style.img}
							 height="300"
							 src={tvshow.Cover} alt={tvshow.OriginalTitle + " Cover"}/>
					</div>
					<div className="col-xs-6" style={style.alignLeft}>
							<h1>{tvshow.OriginalTitle}</h1>
							<h3 style={style.subtitle}>{tvshow.Year}</h3>

							{/*<button className="btn btn-default">{book.Type}</button>*/}
							<hr />
							<div id="tvshow_description" style={style.padding}>
								{tvshow.Description}
							</div>
						</div>
					<div className=" col-xs-3">
						<PriceDiv price={tvshow.Price} handleBuy={this._handleBuy.bind(this)}/>
					</div>
				</div>
				{/*<div id="recomendations" className="row">
				</div>*/}
				<hr />
				<div id="tvshow_details" className="row" >
					<Details tvshow={tvshow}/>
				</div>
			</div>
		);
	}
}

export default TvShowView;
