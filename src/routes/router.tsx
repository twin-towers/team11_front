import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { AppRoute } from '../constants';
import { EditPage } from './EditProfile/EditProfile';
import { LoginPage } from './Login/LoginPage';
import { MemoryGame } from './MemoryGame/MemoryGame';
import { PageNotFound } from './NotFound/NotFound';
import { PrivateRoute } from './PrivateRoute';
import { ProjectPage } from './Project/ProjectPage';
import { ProjectsPage } from './Projects/ProjectsList';
import { PublicRoute } from './Public/PublicRoute';
import { SignUpPage } from './SignUpPage/SignUpPage';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <MemoryGame />,
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
				children: [{ element: <EditPage />, path: AppRoute.EditProfile }],
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
				],
				element: <PublicRoute />,
			},
		],
		element: <Layout />,
		errorElement: <PageNotFound />,
	},
]);
