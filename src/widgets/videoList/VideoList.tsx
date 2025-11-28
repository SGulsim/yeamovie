import styles from './styles.module.scss';
import VideoCard from '@/entities/video/ui/VideoCard/VideoCard';
import { useVideos } from '@/shared/hooks/useVideos';
import VideoListSkeleton from './VideoListSkeleton';

interface Props {
	limit: number;
	category?: string;
}

const VideoList = ({ limit, category = 'TOP_POPULAR_MOVIES' }: Props) => {
	const { items, isLoading } = useVideos(limit, category);

	if (isLoading) {
		return <VideoListSkeleton count={limit} />;
	}

	return (
		<ul className={styles.list}>
			{items &&
				items.map(video => <VideoCard key={video.kinopoiskId} video={video} />)}
		</ul>
	);
};

export default VideoList;
