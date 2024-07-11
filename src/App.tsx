import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	ErrorPage,
	Root,
	PatternCreateView,
} from './routes';
import { newPattern } from './routes/patterns/pattern-utils';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <PatternCreateView pattern={newPattern()} />,
				}
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export { App };
