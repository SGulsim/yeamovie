import styles from './styles.module.scss';
import { useGetSimilarMoviesQuery } from '@/entities/video/api/api';
import { useParams } from 'react-router-dom';
import VideoList from '../videoList/VideoList';

const VideoSimilar = () => {
	const { id } = useParams<{ id: string }>();
	const { data: similar } = useGetSimilarMoviesQuery(id);

	return (
		<section className={styles.similar}>
			<h3 className={styles.title}>Возможно, вам понравится</h3>
			<VideoList limit={4} />
		</section>
	);
};

export default VideoSimilar;
