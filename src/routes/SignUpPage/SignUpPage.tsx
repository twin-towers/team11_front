import React, { useState } from 'react';

import useHttp from '../../hooks/use-http';
import styles from './SignUpPage.module.css';

// interface RegistrationFormProps {
// 	onSubmit: (email: string, password: string, firstName: string, lastName: string, username: string) => void;
// }

export const SignUpPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUserName] = useState('');

	const { sendRequest: postUser } = useHttp();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};
	const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	};
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// onSubmit(email, password, firstName, lastName, username);
		postUser(
			{
				body: { email, firstName, lastName, password, username },
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				url: 'https://hackaton-canvas-default-rtdb.firebaseio.com/',
			},
			(data) => {
				console.log(data);
			},
		);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.control}>
				<label>Email:</label>
				<input onChange={handleEmailChange} required type="email" value={email} />
			</div>
			<div className={styles.control}>
				<label>First Name:</label>
				<input onChange={handleFirstNameChange} type="text" value={firstName} />
			</div>
			<div className={styles.control}>
				<label>Last Name:</label>
				<input onChange={handleLastNameChange} type="text" value={lastName} />
			</div>
			<div className={styles.control}>
				<label>Password:</label>
				<input onChange={handlePasswordChange} required type="password" value={password} />
			</div>
			<div className={styles.control}>
				<label>Username:</label>
				<input onChange={handleUserNameChange} type="text" value={username} />
			</div>
			<div className={styles.action}>
				<button type="submit">Sing up</button>
			</div>
		</form>
	);
};
