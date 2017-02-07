import React from 'react';
import {Link} from 'react-router';

class OrderConfirmation extends React.Component{
  render(){
    let style = {
			title: {
				color: '#4ED08B',
				marginTop: '10px'
			}
		};

    return (
      <div>
        <div>
          <h3 style={style.title}><strong>Review Your Order</strong></h3>
          <h5>By clicking on the "Confirm and Pay" button, you agree to
              privacy notice and conditions of use</h5>
        </div>
        <Link to="/checkout/complete">
          <button type="submit" className="btn btn-success" style={{float: 'right'}}>
            Confirm and Pay &nbsp;
          </button>
        </Link>
      </div>
    );
  }
}

export default OrderConfirmation;
