import React from 'react';
import {Link} from 'react-router';

// class FormInput  extends React.Component{
//   render(){
//     return(
//       <div>
//         <span>Full Name</span>
//         <input type="text" className="form-control"
//                name="FullName" placeholder="Full Name" />
//       </div>
//     );
//   }
// }

class Delivery extends React.Component{
  // static propTypes = {
  //
  // }

  render(){
    let style = {
			title: {
				color: '#4ED08B',
				marginTop: '10px'
			},
      margin: {
        margin: '5px'
      }
		};

    let deliveryItems = ['Full Name', 'Address', 'Complement', 'City', 'State',
      'ZIP', 'Country', 'Phone Number'];

    let countries = ['Brazil', 'England', 'France', 'Germany'];

    return (
      <div>
        <div >
          <h3 style={style.title}><strong>Enter a new address</strong></h3>
          <h4>When finished, click the "Continue" button.</h4>
        </div>

        <form>
          <div style={style.margin}>{deliveryItems[0]}</div>
          <input type="text" className="form-control"
    				 name={deliveryItems[0]} placeholder={deliveryItems[0]} required/>

          <div style={style.margin}>{deliveryItems[1]}</div>
          <input type="text" className="form-control"
   				   name={deliveryItems[1]} placeholder={deliveryItems[1]} required/>

          <div style={style.margin}>{deliveryItems[2]}</div>
          <input type="text" className="form-control"
             name={deliveryItems[2]} placeholder={deliveryItems[2]}/>

          <div style={style.margin}>{deliveryItems[3]}</div>
          <input type="text" className="form-control"
             name={deliveryItems[1]} placeholder={deliveryItems[3]} required/>

          <div style={style.margin}>{deliveryItems[4]}</div>
          <input type="text" className="form-control"
   				   name={deliveryItems[4]} placeholder={deliveryItems[4]} required/>

          <div style={style.margin}>{deliveryItems[5]}</div>
          <input type="text" className="form-control"
  				   name={deliveryItems[5]} placeholder={deliveryItems[5]} required/>

          <div style={style.margin}>{deliveryItems[6]}</div>
          <input type="text" className="form-control"
             name={deliveryItems[6]} placeholder={deliveryItems[6]} required/>

          <div style={style.margin}>{deliveryItems[7]}</div>
          <input type="text" className="form-control"
             name={deliveryItems[7]} placeholder={deliveryItems[7]} required/>

          <br/>
          <Link to="/checkout/payment">
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

export default Delivery;
