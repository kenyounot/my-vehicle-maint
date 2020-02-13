import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = props => {
	return (
		<div className='form-component'>
			<h2>Welcome to the Vehicle Maintenance app</h2>
			<h4>Login Below</h4>
			<Form className='form' onSubmit={props.handleOnSubmit}>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='email'
						name='email'
						placeholder='Enter email...'
						value={props.userInfo.email}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='password'
						name='password'
						placeholder='Enter password...'
						value={props.userInfo.password}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Login
				</Button>
				Or
				<Button variant='primary' onClick={props.handleCreateClick}>
					Create Account
				</Button>
			</Form>
		</div>
	);
};

export default LoginForm;
