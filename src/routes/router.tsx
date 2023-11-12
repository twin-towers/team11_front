import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { AppRoute } from '../constants';
import { EditPage } from './EditProfile/EditProfile';
import { LoginPage } from './Login/LoginPage';
import { MemoryGame } from './MemoryGame/MemoryGame';
import { PageNotFound } from './NotFound/NotFound';
import { PrivateRoute } from './Private/PrivateRoute';
import { PublicRoute } from './Public/PublicRoute';
import { SignUpPage } from './SignUpPage/SignUpPage';

export const router = createBrowserRouter([
	{
		children: [
			{
				children: [
					{ element: <EditPage />, path: AppRoute.EditProfile },
					{
						element: <MemoryGame />,
						index: true,
					},
				],
				element: <PrivateRoute />,
			},

			{
				children: [
					{
						element: <LoginPage />,
						path: AppRoute.Login,
					},
					{
						element: <SignUpPage />,
						path: AppRoute.SignUp,
					},
					{ element: <EditPage />, path: AppRoute.EditProfile },
				],
				element: <PublicRoute />,
			},
		],
		element: <Layout />,
		errorElement: <PageNotFound />,
	},
]);
