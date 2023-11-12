import { getToken } from './token';

type Method = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

type FetchProps<Body> = Omit<RequestInit, 'body' | 'headers' | 'method' | 'url'> & {
	body?: Body
	headers?: Record<string, string>;
	method?: Method;
	url: `/${string}`;
};

export async function api<Response, Body = object>({ body, headers: extraHeaders, method = 'GET', url, ...props }: FetchProps<Body>) {
	const token = getToken();

	const headers = new Headers({
		Authorization: `Bearer ${token}`,
		'Cache-Control': 'no-cache',
		'Content-Type': 'application/json',
		...extraHeaders,
	});

	const destination = `${import.meta.env.VITE_BACK}` + url;

	try {
		const response = await fetch(destination, {
			body: body ? JSON.stringify(body) : undefined,
			headers,
			method,
			mode: 'cors',
			...props,
		});

		if (!response.ok) {
			const error = await response.json();
			console.error(error);
			throw Error('Error during parsing');
		}

		return await response.json() as Response;
	} catch (err) {
		console.error(err);
		throw Error('Something went wrong');
	}
}
