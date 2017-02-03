import React from 'react';

import SelectOption from './SelectOption';


class Select extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <select>
        {
          Array.apply(null, Array(this.props.size)).map((item, index) =>
            <SelectOption key={index+1} value={index+1} />
          )
        }
      </select>
    );
  }
}

export default Select;
