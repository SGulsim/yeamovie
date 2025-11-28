import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import { MainPage } from '@/pages/home';
import { VideoPage } from '@/pages/video';
import { SearchPage } from '@/pages/search';

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout />,
		errorElement: <div>Error</div>,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/movie/:id',
				element: <VideoPage />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
		],
	},
]);
