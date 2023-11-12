import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
	const isLoggedIn = true;

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
					<Link className={styles.logout_in} to="">
						Logout
					</Link>
				) : (
					<Link className={styles.logout_in} to="/login">
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Header;
