import React 			 from 'react';
//import { ButtonGroup, DropdownButton, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';


import Dropdown 	 	 from './Dropdown';

class NavBar extends React.Component{
	render() {
		var dropdownItems = {
			'title': 'Departments',
			'top': [
				'Books & Ebooks',
				'Games',
				'Movies',
				'Music',
				'Tv Show'
			],
			'bottom': ['Kindle']
		};

		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
					    	<a className="navbar-brand" href="/">Amazônia</a>
					    </div>
					    <div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li className="dropdown">
									<Dropdown items={dropdownItems}/>
								</li>
								<li>
									<a href="#">
										Kindle Store
										<span className="sr-only"></span>
									</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><a href="/login">Sign In</a></li>
								<li><a href="#">Cart</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
