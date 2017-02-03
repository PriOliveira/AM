import React from 'react';

class SelectOption extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <option value={this.props.value}>{this.props.value}</option>
    );
  }
}

export default SelectOption;
