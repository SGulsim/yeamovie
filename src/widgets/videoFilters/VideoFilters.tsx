import styles from './styles.module.scss';
import { FilterPanel } from '@/features';
import Title from '@/shared/ui/Title/Title';
import VideoListSkeleton from '@/entities/video/ui/VideoList/VideoListSkeleton';
import { VideoList } from '@/entities/video';
import { useState } from 'react';
import { useFilteredVideos } from '@/shared/hooks/useFilteredVideos';
import { useVideos } from '@/shared/hooks/useVideos';

const VideoFilters = () => {
	const [filters, setFilters] = useState({ genre: '', country: '' });

	const filteredVideos = useFilteredVideos(filters);
	const defaultVideos = useVideos();

	const { items, isLoading } =
		filters.genre || filters.country ? filteredVideos : defaultVideos;

	const handleFiltersChange = (newFilters: {
		genre: string;
		country: string;
	}) => {
		setFilters(newFilters);
	};

	if (isLoading) return <VideoListSkeleton count={8} />;

	return (
		<section className={styles.filters}>
			<Title>Фильмы по категориям</Title>
			<FilterPanel onFiltersChange={handleFiltersChange} />
			<VideoList limit={8} items={items} />
		</section>
	);
};

export default VideoFilters;
