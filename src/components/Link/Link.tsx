import type { AnchorHTMLAttributes } from 'react';

import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	href: string;
};

export function Link({ children, href, ...props }: LinkProps) {
	const isExternal = href.startsWith('http');
	const isAnchor = href.startsWith('#');

	if (isExternal) {
		return (
			<a href={href} rel="noopener noreferrer" target="_blank" {...props}>
				{children}
			</a>
		);
	}

	if (isAnchor) {
		return (
			<a href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<RouterLink to={href} {...props}>
			{children}
		</RouterLink>
	);
}
