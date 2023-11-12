import { useStore } from '@nanostores/react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { $isAuth } from '../../stores/auth';
import { logout } from '../../stores/user';
import { Button } from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
	const isLoggedIn = useStore($isAuth);
	return (
		<nav className={styles.header}>
			<Link className={styles.logo} to="/">
				<img alt="logo" src="/assets/logo.svg" />
			</Link>
			<div className={styles.links}>
				{isLoggedIn ? (
					<>
						<Button className={styles.user} href="/projects" variant='text'>
							UserName
						</Button>

						<Button className={styles.logout_in} onClick={logout}  variant='text'>
							Logout
						</Button>
					</>
				) : (
					<>
						<Button className={styles.logout_in} href={AppRoute.SignUp} variant='text'>
							Sing Up
						</Button>

						<Button className={styles.logout_in}  href={AppRoute.Login} variant='text'>
							Login
						</Button>
					</>
				)}
			</div>
		</nav>
	);
};

export default Header;
