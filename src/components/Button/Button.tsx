import type { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import type { LinkProps } from '../Link/Link';

import { Link } from '../Link/Link';
import style from './style.module.css';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = (DefaultButtonProps | LinkProps) & {
	variant?: 'primary' | 'text';
};

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
	className = clsx(style[variant], className);

	if ('href' in props) {
		return (
			<Link className={className} {...props}>
				{children}
			</Link>
		);
	}

	const { type = 'button', ...rest } = props as DefaultButtonProps;

	return (
		<button className={className} type={type} {...rest}>
			{children}
		</button>
	);
};
