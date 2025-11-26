import styles from './styles.module.scss';
import { FilterPanel } from '@/features/filterVideos';
import VideoList from '../videoList/VideoList';

const VideoFilters = () => {
	return (
		<section className={styles.filters}>
			<h3 className={styles.title}>Фильмы по категориям</h3>
			<FilterPanel />
			<VideoList limit={12} />
		</section>
	);
};

export default VideoFilters;
