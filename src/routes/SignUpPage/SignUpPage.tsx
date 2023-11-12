import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';

import type { SignUpData } from './schema';

import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import { AppRoute } from '../../constants';
import { signUp } from '../../stores/user';
import { Field } from './../../components/Field/Field';
import styles from './SignUpPage.module.css';
import { resolver } from './schema';

export const SignUpPage: React.FC = () => {
	const {
		formState: { errors },
		getValues,
		handleSubmit,
		register,
	} = useForm<SignUpData>({
		resolver,
	});

	return (
		<>
			<h1 className={styles.title}>Let's get acquainted 🖐️</h1>
			<form
				className={clsx(styles.form, 'paper')}
				onSubmit={handleSubmit(() => {
					signUp(getValues());
				})}
			>
				<Field
					autoComplete="given-name"
					error={errors.firstName?.message}
					invalid={Boolean(errors.firstName)}
					label="First Name"
					type="text"
					{...register('firstName')}
				/>

				<Field
					autoComplete="family-name"
					error={errors.lastName?.message}
					invalid={Boolean(errors.lastName)}
					label="Last Name"
					type="text"
					{...register('lastName')}
				/>

				<Field
					autoComplete="nickname"
					error={errors.username?.message}
					invalid={Boolean(errors.username)}
					label="Username"
					type="text"
					{...register('username')}
				/>

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
					Sing up
				</Button>

				<Link className={styles.back} href={AppRoute.Login}>
					I have account
				</Link>
			</form>
		</>
	);
};
