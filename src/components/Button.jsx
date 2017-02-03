import React from 'react';

class Button extends React.Component{
	render(){
		var classButton = '';
		switch (this.props.classType) {
		    case ('primary'):
				classButton = 'btn-primary';
		 		break;
		    case ('default'):
		    	classButton = 'btn-default';
		 		break;
		 	default:
		 		break;

	 	}
	 	classButton = 'btn ' + classButton + ' btn-lg btn-block';

	    return (
			<button type={this.props.type}
				    className={classButton}
				    name={this.props.name}>
				    {this.props.text}
			</button>
		);
	}
}

export default Button;
