import { useStore } from '@nanostores/react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { $isAuth } from '../../stores/auth';
import { logout } from '../../stores/user';
import styles from './Header.module.css';
import { Button } from '../Button/Button';

const Header = () => {
	const isLoggedIn = useStore($isAuth);
	return (
		<nav className={styles.header}>
			<Link className={styles.logo} to="/">
				<img alt="logo" src="../../../public/assets/logo.svg" />
			</Link>
			<div className={styles.links}>
				<Link className={styles.user} to="/projects">
					UserName
				</Link>
				{isLoggedIn ? (
					<Button className={styles.logout_in}  onClick={logout}>
						Logout
					</Button>
				) : (
					<Button className={styles.logout_in} href={AppRoute.Login} >
						Login
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Header;
