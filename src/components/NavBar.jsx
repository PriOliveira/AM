import React 			 from 'react';
import {IndexLink, Link} from 'react-router';
//import { ButtonGroup, DropdownButton, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

import Dropdown 	 	 from './Dropdown';
import Search 	 	 from './Search';

class NavBar extends React.Component{
	render() {
		var dropdownItems = {
			'title': 'Departments',
			'top': [
				{text: 'Books & Ebooks', link: '/books'},
				{text: 'Games', link: '/games'},
				{text: 'Movies', link: '/movies'},
				{text: 'Music', link: '/musics'},
				{text: 'Tv Show', link: '/tvshows'},
			],
			'bottom': [{text: 'Kindle', link: '/kindle'}],
		};

		var style = {
			"dropdown": {
				/*"marginTop": "8px",
				"marginBottom": "8px",*/
				"backgroundColor": "inherit",
				//"borderColor": "#222",
				"borderWidth": "0px",
				"color": "#9d9d9d",
				"height": "50px",
				boxShadow: 'none',
			}
		}

		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
					    <div id="nav_belt" className="row">
					        <div id="nav_logo" className="col-md-1 navbar-header nav-left">
    						    <IndexLink to="/" className="navbar-brand">
    						        AM
    						    </IndexLink>
					        </div>
					        <div id="nav_search" className="col-6 col-md-7 nav-fill">
					            <Search />
					        </div>
					        <div className="col-md-4 nav-right">

					        </div>
    						{/*<div className="navbar-header nav-left">
    						    <div id="nav_logo" >
    						        <IndexLink to="/" activeClassName="active" className="navbar-brand">AM</IndexLink>
    					    	</div>
    					    </div>
    					    <div id="nav_search" className="nav-fill">
    					        <Search />
    					    </div>
    					    <div className="nav-right">
    					    </div>*/}
					    </div>
					    <div id="nav_main">
							<ul className="nav navbar-nav">
								<li>
									<Dropdown items={dropdownItems} style={style["dropdown"]}/>
								</li>
								<li>
									<a href="#">
										Kindle Store
									</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="/login">Sign In</Link></li>
								<li><Link to="/checkout">Cart</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
