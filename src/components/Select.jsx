import React from 'react';

class SelectOption extends React.Component{
  render(){
    return (
      <option value={this.props.value}>{this.props.value}</option>
    );
  }
}

class Select extends React.Component{
  render(){
    return (
      <select style={this.props.style}>
        {
          this.props.items.map((item, index) =>
            <SelectOption key={index} value={item} />
          )
        }
      </select>
    );
  }
}

export default Select;
