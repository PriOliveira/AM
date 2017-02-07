import React from 'react';
import {Link} from 'react-router';

class Payment extends React.Component{
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
          <h3 style={style.title}><strong>Select a payment method</strong></h3>
          <h4>When finished, click the "Continue" button.</h4>
        </div>
        <form>
          <div>
            <input type="radio" name="payment" value="credit" required/> Credit Card
            <br/>
            <input type="radio" name="payment" value="debit" required/> Debit Card
            <br/>
            <input type="radio" name="payment" value="netBanking" required/> Net Banking
            <br/>
          </div>
          <Link to="/checkout/confirm">
            <button type="submit" className="btn btn-success" style={{float: 'right'}}>
              Continue &nbsp;
              <span className="glyphicon glyphicon-chevron-right"></span>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Payment;
