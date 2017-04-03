import React 		 from 'react';
import InputPassword from './InputPassword';
import InputText 	 from './InputText';
import Button 	 	 from './Button';

import logo from '../../img/logo.png';

class LogIn extends React.Component{
	render(){
		const style = {
			'signInForm': {
				maxWidth: '420px',
				padding: '20px 40px 30px',
				margin: '0 auto',
				//backgroundColor: '#eee',
				border: '2px solid rgba(0,0,0,0.05)',
				borderRadius: '7px'
			},
			'login': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}/*,
			'divHR': {
				width: '100%',
				height: '20px',
				borderBottom: '1px solid black',
				textAlign: 'center'
			},
			'spanHR': {
				fontSize: '40px',
				//backgroundColor: '#F3F5F6',
				padding: '0 10px'
			}*/
		}
		return (
			<div style={style.login}>
				<div className="container App">
					{
						// <img src={logo} className="App-logo" alt="logo" />
					}

					<form action="" name="signInForm" style={style['signInForm']}>
						<h3>Sign In</h3>
							<hr/>
							<InputText />

							<br />

							<InputPassword />

							<br />

							<Button type="Submit" name="Sign In"
									text="Sign In" classType="primary"/>

							{/*<div style={style['divHR']}>
								<span style={style['spanHR']}>
								Section Title
								</span>
							</div>

							<br /><br /><br />*/}
							<hr />

							<Button type="Submit" name="Sign In"
									text="Create you account" classType="default"/>
					</form>
				</div>
			</div>
		);
	}
}

export default LogIn;
