import React from 'react';

import NavBar from '../NavBar';
import BooksGrid from '../BooksGrid';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<h3>Books</h3>
					<BooksGrid />
				</div>
			</div>
		);
	}
}

export default HomePage;
