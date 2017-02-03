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
		var hasBottom = items.bottom.length > 0;
		return (
			<div onClick={this._handleDropdown.bind(this)} className="dropdown open">
				<button className="btn btn-primary dropdown-toggle" type="button">
					{items.title}
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
							{
								hasBottom && <li role="separator" className="divider"></li>
							}
							{
								items.bottom.map( (item, index) =>
									<li key={index}><a href="#">{item}</a></li>
								)
							}
						</ul>
				}
			</div>
		);
	}
}

export default Dropdown;
