import React from 'react';

import Cart from '../Cart';
import Delivery from '../Delivery';
import Payment from '../Payment';
import OrderConfirmation from '../OrderConfirmation';
import OrderFinished from '../OrderFinished';


class CheckOut extends React.Component{
  /*
  Step 1: Cart
  Step 2: Delivery
  Step 3: Payment
  Step 4: Info confirmation
  Step 5: Finished order showing its id
  */
  render(){
    return (
      <div>
        {/* <NavBar />*/}
        <Delivery />
      </div>
    );
  }
}

export default CheckOut;
