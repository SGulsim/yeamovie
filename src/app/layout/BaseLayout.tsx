import { Header, Footer } from '@/widgets';
import '@styles/_global.scss';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function BaseLayout() {
	return (
		<>
			<Header />

			<div className='container'>
				<ScrollRestoration />
				<Outlet />
			</div>

			<Footer />
		</>
	);
}
