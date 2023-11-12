import React, { useState } from 'react';

import { login } from '../../stores/user';
import styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		login({ email, password });
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

			<div className={styles.action}>
				<button type="submit">Sing in</button>
			</div>
		</form>
	);
};
