import React from 'react';

class InputText extends React.Component{
	render(){
		return (
			<input type="text" 
				   className="form-control" 
				   name="Username" 
				   placeholder="Username" />
		);
	}
}

export default InputText;
