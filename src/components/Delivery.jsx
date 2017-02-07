import React from 'react';

class Delivery extends React.Component{
  render(){
    let style = {
			'title': {
				'color': '#4ED08B',
				'marginTop': '10px'
			},
			'top': {
				'margin': '2%',
				'textAlign': 'left'
			}
		};

    return (
      <div>
        <div style={style.top}>
          <h3 style={style.title}><strong>Enter a new address</strong></h3>
          <h4>When finished, click the "Continue" button.</h4>
        </div>
        <div className="container">

          <form>
            Full Name
            <input type="text"
      				   className="form-control"
      				   name="FullName"
      				   placeholder="Full Name" />
          </form>
        </div>
      </div>
    );
  }
}

export default Delivery;
