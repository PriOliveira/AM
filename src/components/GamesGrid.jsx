import React from 'react';

import Grid from './Grid';

class GamesGrid extends React.Component{
	static propTypes = {
    data: React.PropTypes.arrayOf(
			React.PropTypes.object
		).isRequired,
  }

	render(){
		return (
			<Grid
				data={this.props.data}
				id={'ASIN'}
				title={'Games'}
				subtitle={'Year'}
			/>
		);
	}
}

export default GamesGrid;
