import React, { useState } from 'react';

import useHttp from '../../hooks/use-http';
import styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const { sendRequest: getUser } = useHttp();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleConfirmPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPass(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === confirmPass) {
			getUser(
				{
					url: 'https://hackaton-canvas-default-rtdb.firebaseio.com/',
				},
				(data) => {
					console.log(data);
				},
			);
		}
		// onSubmit(email, password, firstName, lastName, username);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.control}>
				<label>Email:</label>
				<input onChange={handleEmailChange} required type="email" value={email} />
			</div>
			<div className={styles.control}>
				<label>Password:</label>
				<input onChange={handlePasswordChange} required type="password" value={password} />
			</div>
			<div className={styles.control}>
				<label>Confirm password:</label>
				<input onChange={handleConfirmPassChange} required type="password" value={password} />
			</div>
			<div className={styles.action}>
				<button type="submit">Sing in</button>
			</div>
		</form>
	);
};
