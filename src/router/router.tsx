import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { CreateProjectPage } from '../pages/CreateProjectPage/CreateProjectPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { ProjectPage } from '../pages/ProjectPage/ProjectPage'
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/projects',
				element: <ProjectsPage />,
			},
			{
				path: '/project/:id',
				element: <ProjectPage />,
			},
			{
				path: '/create-project',
				element: <CreateProjectPage />,
			},
		],
	},
])
