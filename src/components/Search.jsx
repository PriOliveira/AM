import React from 'react';

import Select 	 	 from './Select';

class Search extends React.Component{
  render(){
    let searchOptions = [
      'All Departments',
      'Books & Ebooks',
      'Games',
      'Movies',
      'Music',
      'Tv Show'
    ];

    let style = {
      "dropdown": {
        "backgroundColor": "#fff",
        "padding": "0",
        "borderWidth": "0",
        "height": "100%",
        "borderRadius": "5px 0px 0px 5px",
        "cursor": "pointer"
      },
      "inputSearch": {
        "width": "350px"
      }
    };

    return (
      <form className="form-inline container">
        <div className="input-group">
          <div className="input-group-addon" style={style["dropdown"]}>
            <Select items={searchOptions} style={style["dropdown"]}/>
          </div>
          <input className="form-control mr-sm-2" style={style["inputSearch"]}
            type="text" placeholder="Search"/>
          <div className="input-group-btn">
            <button className="btn btn-search btn-default" type="submit">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </div>
        </div>
      </form>
      /*<form className="form-inline">
        <Select items={searchOptions}/>
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>*/
    );
  }
}

export default Search;
