import styles from './styles.module.scss';
import { Breadcrumbs } from '@/features';
import Tab from '@/shared/ui/Tab/Tab';
import Tabs from '@/shared/ui/Tabs/Tabs';
import { useState } from 'react';
import { useVideos } from '@/shared/hooks/useVideos';
import { VideoList, type VideoCategory } from '@/entities/video';
import VideoListSkeleton from '@/entities/video/ui/VideoList/VideoListSkeleton';

const ContentCatalog = () => {
	const [activeCategory, setActiveCategory] = useState('TOP_POPULAR_MOVIES');
	const { items, isLoading } = useVideos(activeCategory as VideoCategory);

	if (isLoading) return <VideoListSkeleton count={12} />;

	return (
		<section className={styles.content}>
			<Tabs defaultActiveIndex={0}>
				<Tab
					label='Популярные фильмы'
					onClick={() => setActiveCategory('TOP_POPULAR_MOVIES')}
				/>
				<Tab
					label='Популярные сериалы'
					onClick={() => setActiveCategory('POPULAR_SERIES')}
				/>
				<Tab
					label='Подборка фильмов'
					onClick={() => setActiveCategory('TOP_250_MOVIES')}
				/>
			</Tabs>

			<Breadcrumbs to={'/movie'} direction='next'>
				Смотреть все
			</Breadcrumbs>
			<VideoList items={items} limit={12} />
		</section>
	);
};

export default ContentCatalog;
