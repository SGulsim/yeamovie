import styles from './styles.module.scss';
import VideoCard from '@/entities/video/ui/VideoCard/VideoCard';
import type { VideoLike } from '../../model/types';
import { memo } from 'react';

interface VideoListProps {
	items: VideoLike[];
	limit: number;
}

const VideoList = memo(({ items, limit }: VideoListProps) => {
	const list = items.slice(0, limit);

	return (
		<ul className={styles.list}>
			{list.map(item => {
				const key =
					'kinopoiskId' in item && item.kinopoiskId
						? item.kinopoiskId
						: item.filmId;

				return <VideoCard key={key} video={item} />;
			})}
		</ul>
	);
});

export default VideoList;
