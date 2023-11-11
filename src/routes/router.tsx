import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppRoute } from '../constants';
import { LoginPage } from './Login/LoginPage';
import { ProjectPage } from './Project/ProjectPage';
import { ProjectsPage } from './Projects/ProjectsList';
import { SignUpPage } from './SignUpPage/SignUpPage';

export const router = createBrowserRouter([
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
		element: <LoginPage />,
		path: AppRoute.Login,
	},
	{
		element: <SignUpPage />,
		path: AppRoute.SignUp,
	}
]);
