import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';

import type { LoginData } from './schema';

import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import { AppRoute } from '../../constants';
import { login } from '../../stores/user';
import { Field } from './../../components/Field/Field';
import styles from './LoginPage.module.css';
import { resolver } from './schema';

export const LoginPage: React.FC = () => {
	const {
		formState: { errors },
		getValues,
		handleSubmit,
		register,
	} = useForm<LoginData>({
		resolver,
	});

	return (
		<>
			<h1 className={styles.title}>Nice to see you again 🖐️</h1>
			<form
				className={clsx(styles.form, 'paper')}
				onSubmit={handleSubmit(() => {
					login(getValues());
				})}
			>
				<Field autoComplete="email" error={errors.email?.message} invalid={Boolean(errors.email)} label="Email" type="email" {...register('email')} />

				<Field
					autoComplete="new-password"
					error={errors.password?.message}
					invalid={Boolean(errors.password)}
					label="Password"
					type="password"
					{...register('password')}
				/>

				<Button className={styles.action} type="submit">
					Login
				</Button>

				<Link className={styles.back} href={AppRoute.SignUp}>
					I don't have an account
				</Link>
			</form>
		</>
	);
};
