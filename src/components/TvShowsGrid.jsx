import React from 'react';

import TvShowStore from '../Flux/TvShowStore';
import Grid from './Grid';

class TvShowsGrid extends React.Component{
	render(){
		return (
			<Grid store={TvShowStore} type="tvshows"/>
		);
	}
}

export default TvShowsGrid;
