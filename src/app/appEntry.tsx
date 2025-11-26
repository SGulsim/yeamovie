import '@styles/index.scss';
import { MainPage } from '@/pages/home';
import { VideoPage } from '@/pages/video';
import { SearchPage } from '@/pages/search';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import { Provider } from 'react-redux';
import { store } from './appStore';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<BaseLayout />}>
						<Route index element={<MainPage />} />
						<Route path='movie/:id' element={<VideoPage />} />
						<Route path='search' element={<SearchPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
