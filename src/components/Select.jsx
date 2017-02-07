import React from 'react';

class SelectOption extends React.Component{
  render(){
    return (
      <option value={this.props.value}>{this.props.value}</option>
    );
  }
}

class Select extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     activeOption: null
  //   }
  //   console.debug(this.state.activeOption);
  // }

  // componentDidMount() {
  //   this.setState({
  //      activeOption: this.props.items[0]
  //   });
  //
  //   console.debug(this.state.activeOption);
  // }
  //
  // getIndexText(){
  //   var selectedQuantity = document.getElementById("dropdown");
	// 	var quantity = selectedQuantity.options[selectedQuantity.selectedIndex].value;
  //   console.log(quantity);
  // }
  //
  // _handleOnChange(event){
  //   let id = event.target.selectedIndex;
  //   this.setState({
  //     activeOption: event.target[id].text
  //   });
  //
  // }
  render(){
    //console.debug(this.state.activeOption);
    return (
      //onChange={this._handleOnChange.bind(this)}
      //<select style={this.props.style} id="dropdown" onChange={this._handleOnChange.bind(this)}>
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
