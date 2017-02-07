import React from 'react';
import '../../ProgressBar.css';

let steps = ['Cart', 'Delivery', 'Payment', 'Complete'];

class ProgressBar extends React.Component{
  render() {
    return(
      <div className="container">
        <div className="row">
          <section>
            <div className="wizard">
              <div className="wizard-inner">
                <div className="connecting-line"></div>
                <ul className="nav nav-tabs" role="tablist">

                  <li role="presentation" className="active">
                    <a href="#step1" data-toggle="tab" aria-controls="step1"
                      role="tab" title={steps[0]}>
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-shopping-cart"></i>
                      </span>
                    </a>
                  </li>

                  <li role="presentation" className="disabled">
                    <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title={steps[1]}>
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-home"></i>
                      </span>
                    </a>
                  </li>
                  <li role="presentation" className="disabled">
                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title={steps[2]}>
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-credit-card"></i>
                      </span>
                    </a>
                  </li>


                  <li role="presentation" className="disabled">
                    <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title={steps[3]}>
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-ok"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <form role="form">
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="step1">
                    <h2><strong>{steps[0]}</strong></h2>
                    <ul className="list-inline pull-right">
                      <li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
                    </ul>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="step2">
                    <h2><strong>{steps[1]}</strong></h2>
                    <ul className="list-inline pull-right">
                      <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
                      <li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
                    </ul>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="step3">
                    <h2><strong>{steps[2]}</strong></h2>
                    <ul className="list-inline pull-right">
                      <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
                      <li><button type="button" className="btn btn-default next-step">Skip</button></li>
                      <li><button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button></li>
                    </ul>
                  </div>

                  <div className="tab-pane" role="tabpanel" id="complete">
                    <h2><strong>{steps[3]}</strong></h2>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

class CheckOut extends React.Component{
  /*
  Step 1: Cart
  Step 2: Delivery
  Step 3: Payment
  Step 4: Info confirmation
  Step 5: Finished order showing its id
  */
  render(){
    let style = {
      top: {
				margin: '2%',
				textAlign: 'left'
			}
    }
    return (
      <div>
        <ProgressBar />
        <hr />
        <div className="container" style={style.top}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CheckOut;
