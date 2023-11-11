import { useCallback, useState } from 'react';

import type { ProjectListResponse } from '../../types/projects';
import type { RegisterUserResponse, UserRegisterRequest } from '../types/user';

type RequestConfig = {
	body?: UserRegisterRequest;
	headers?: { [header: string]: string };
	method?: string;
	url: string;
};

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig: RequestConfig, applyData: (data: ProjectListResponse | RegisterUserResponse) => void) => {
		setIsLoading(true);
		setError(null);
		console.log(requestConfig);
		try {
			const response = await fetch(requestConfig.url, {
				body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
				headers: requestConfig.headers ? requestConfig.headers : {},
				method: requestConfig.method ? requestConfig.method : 'GET',
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();
			applyData(data);
		} catch (err) {
			if (err instanceof Error) {
				// setError(err.message || 'Something went wrong!');
				console.error('An error occurred:', err);
			}
		}
		setIsLoading(false);
	}, []);

	return {
		error,
		isLoading,
		sendRequest,
	};
};

export default useHttp;
