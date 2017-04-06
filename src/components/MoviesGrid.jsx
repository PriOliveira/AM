import React from 'react';

import Grid from './Grid';

class MoviesGrid extends React.Component{
	static propTypes = {
    data: React.PropTypes.arrayOf(
			React.PropTypes.object
		).isRequired,
  }

	render(){
		return (
			<Grid
				data={this.props.data}
				id={'IMDB'}
				title={'Movies'}
				subtitle={'Year'}
			/>
		);
	}
}

export default MoviesGrid;
