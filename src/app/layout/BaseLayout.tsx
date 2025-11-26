import { Header, Footer } from '@/widgets';
import '@styles/_global.scss';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
	return (
		<>
			<Header />

			<div className='container'>
				<Outlet />
			</div>

			<Footer />
		</>
	);
};

export default BaseLayout;
