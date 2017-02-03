import React from 'react';

class InputPassword extends React.Component{
	render(){
		return (
			<input type="password" 
				   className="form-control"
				   name="Password" 
				   placeholder="Password"/>
		);
	}
}

export default InputPassword;
