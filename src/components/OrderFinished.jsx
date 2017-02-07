import React from 'react';

class OrderFinished extends React.Component{
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
          <h3 style={style.title}><strong>Thank You</strong>, your order has been done.</h3>
          Order Number: ________________
        </div>
      </div>
    );
  }
}

export default OrderFinished;
