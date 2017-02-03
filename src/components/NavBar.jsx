import React 			 from 'react';
//import { ButtonGroup, DropdownButton, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';


import Dropdown 	 	 from './Dropdown';

class NavBar extends React.Component{
	render() {
		var dropdownItems = {
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
			{/*<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
		        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
		        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
		        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
		        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
		          <MenuItem eventKey="4.1">Action</MenuItem>
		          <MenuItem eventKey="4.2">Another action</MenuItem>
		          <MenuItem eventKey="4.3">Something else here</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey="4.4">Separated link</MenuItem>
		        </NavDropdown>
		    </Nav>*/}
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
								<li className="active">
									<a href="#">
										Kindle Store 
										<span className="sr-only"></span>
									</a>
								</li>
							</ul>
							{/*<form className="navbar-form navbar-left">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Search"/>
								</div>
								<button type="submit" className="btn btn-default">Submit</button>
							</form>*/}
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Sign In</a></li>
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