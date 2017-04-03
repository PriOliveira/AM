import React from 'react';
import {Link} from 'react-router';


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
				<button className="btn btn-primary dropdown-toggle" type="button"
								style={this.props.style}>
					{items.title}
					<span className="caret" style={{margin: '4px'}}></span>
				</button>
				{
					this.state.isOpen &&
						<ul className="dropdown-menu">
							{
								items.top.map( (item, index) =>
									<li key={index}><Link to={item.link}>{item.text}</Link></li>
								)
							}
							{
								hasBottom && <li role="separator" className="divider"></li>
							}
							{
								items.bottom.map((item, index) =>
									<li key={index}><Link to={item.link}>{item.text}</Link></li>
								)
							}
						</ul>
				}
			</div>
		);
	}
}

export default Dropdown;
