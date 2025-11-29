import './index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './appStore';
import { appRouter } from './appRouter';
import { ErrorBoundary } from '@/widgets/error';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<RouterProvider router={appRouter} />
			</Provider>
		</ErrorBoundary>
	</StrictMode>
);
