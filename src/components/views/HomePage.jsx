import React from 'react';

import BooksGrid from '../BooksGrid';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<BooksGrid />
				</div>
			</div>
		);
	}
}

export default HomePage;
