import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { AppRoute } from '../constants';
import { LoginPage } from './Login/LoginPage';
import { PageNotFound } from './NotFound/NotFound';
import { ProjectPage } from './Project/ProjectPage';
import { ProjectsPage } from './Projects/ProjectsList';
import { PublicRoute } from './Public/PublicRoute';
import { SignUpPage } from './SignUpPage/SignUpPage';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Navigate to={AppRoute.ProjectsNew} />,
				index: true,
			},
			{
				element: <ProjectPage />,
				path: AppRoute.ProjectsNew,
			},
			{
				element: <ProjectPage />,
				path: AppRoute.Project,
			},
			{
				element: <ProjectsPage />,
				path: AppRoute.Projects,
			},
			{
				element: <ProjectsPage />,
				path: AppRoute.ProjectsNew,
			},
			{
				element: <ProjectsPage />,
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
				],
				element: <PublicRoute />,
			},
		],
		element: <Layout />,
		errorElement: <PageNotFound />,
	},
]);
