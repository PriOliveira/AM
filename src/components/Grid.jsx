import React from 'react';

import GridElement from './GridElement';

class Grid extends React.Component{
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
  }

  constructor(){
		super();
    this.state = {
      data: [],
    };
		this._setConstants();
	}

  _setConstants(){
    this._info = {
      books: {
        id: 'ISBN13',
        title: 'Books',
        subtitle: 'Author',
      },
      games: {
        id: 'ASIN',
        title: 'Games',
        subtitle: 'Year',
      },
      movies: {
        id: 'IMDB',
        title: 'Movies',
        subtitle: 'Author',
      },
      musics: {
        id: 'ASIN',
        title: 'Musics',
        subtitle: 'Artist',
      },
      tvshows: {
        id: 'IMDB',
        title: 'Author',
        subtitle: 'Year',
      },
    }
}

	_getData(){
		this.setState({
      data: this.props.store._getAll()
    });
	}

	componentDidMount() {
    this._getData();
		this.props.store.on("change", this._getData.bind(this));
	}

	componentWillUnmount() {
		this.props.store.removeListener("change", this._getData.bind(this));
	}

  render(){
    let type = this.props.type;
    let title = this._info[type].title;
    let idType = this._info[type].id;
    let subtitle = this._info[type].subtitle;

    return(
      <div className='container'>
				<h3>{title}</h3>
				<hr/>
				{
					this.state.data.map((element, index) => {
            let id = element[idType];

						return (
							<GridElement
								key={index}
								route={`${this.props.type}/${id}`}
								image={element.Cover}
								title={element.OriginalTitle}
								subtitle={element[subtitle].toString()}
							/>
						);
					})
				}
			</div>
    );
  }
}

export default Grid;
