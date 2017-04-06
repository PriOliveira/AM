import React from 'react';

import Grid from './Grid';

class MusicsGrid extends React.Component{
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
				title={'Musics'}
				subtitle={'Artist'}
			/>
		);
	}
}

export default MusicsGrid;
