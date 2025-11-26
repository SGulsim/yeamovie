import styles from './styles.module.scss';
import { Breadcrumbs } from '@/features/breadcrumbs';
import Tab from '@/shared/ui/Tab/Tab';
import Tabs from '@/shared/ui/Tabs/Tabs';
import VideoList from '../videoList/VideoList';
import { useNavigate } from 'react-router-dom';

const ContentCatalog = () => {
	const navigate = useNavigate();

	return (
		<section className={styles.content}>
			<Tabs defaultActiveIndex={0}>
				<Tab label='Популярные фильмы'>
					<VideoList limit={12} category={'TOP_POPULAR_MOVIES'} />
				</Tab>
				<Tab label='Популярные сериалы'>
					<VideoList limit={12} category={'POPULAR_SERIES'} />
				</Tab>
				<Tab label='Подборка фильмов'>
					<VideoList limit={12} category={'TOP_250_MOVIES'} />
				</Tab>
			</Tabs>
			<Breadcrumbs>
				<Breadcrumbs.Item children={'Смотреть все'} to={'movie'} />
			</Breadcrumbs>
			<VideoList limit={12} />
		</section>
	);
};

export default ContentCatalog;
