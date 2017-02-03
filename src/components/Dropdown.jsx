import React from 'react';

class Dropdown extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
	}

	_handleDropdown(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}


	render() {
		var items = this.props.items;
		return (
			<div onClick={this._handleDropdown.bind(this)} className="dropdown open">
				<button className="btn btn-primary dropdown-toggle" type="button">
					Departments 
					<span className="caret"></span>
				</button>
				{
					this.state.isOpen && 
					<ul className="dropdown-menu">
						{
							items.top.map( (item, index) => 
								<li key={index}><a href="#">{item}</a></li>
							)
						}
						<li role="separator" className="divider"></li>
						{
							items.bottom.map( (item, index) => 
								<li key={index}><a href="#">{item}</a></li>
							)
						}
					</ul>
				}
			</div>
			/*<div onClick={this._handleDropdown.bind(this)} className="dropdown open">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					Departments 
					<span className="caret"></span>
				</a>
				{
					this.state.isOpen && 
					<ul className="dropdown-menu">
						<li><a href="#">Books & Ebooks</a></li>
						<li><a href="#">Games</a></li>
						<li><a href="#">Movies</a></li>
						<li><a href="#">Music</a></li>
						<li><a href="#">Tv Shows</a></li>
						<li role="separator" className="divider"></li>
						<li><a href="#">Kindle</a></li>
					</ul>
				}
			</div>*/

			/*
			<div onClick={this._handleDropdown.bind(this)} className="dropdown open">
				<ul className="nav navbar-nav">
					<li >
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Departments 
							<span className="caret"></span>
						</a>
						{
							this.state.isOpen && 
							<ul className="dropdown-menu">
								<li><a href="#">Books & Ebooks</a></li>
								<li><a href="#">Games</a></li>
								<li><a href="#">Movies</a></li>
								<li><a href="#">Music</a></li>
								<li><a href="#">Tv Shows</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#">Kindle</a></li>
							</ul>
						}
					</li>
				</ul>
			</div>
			*/
		);
	}
}

export default Dropdown;