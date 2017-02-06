import React from 'react';

import NavBar from '../NavBar';

class NavPage extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}

export default NavPage;
