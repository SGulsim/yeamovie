import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Image from '@/shared/ui/Image/Image';
import VideoMeta from '../VideoMeta/VideoMeta';
import type { Video, VideoLike } from '../../model/types';
import { memo } from 'react';

const isFullVideo = (video: VideoLike): video is Video =>
	'kinopoiskId' in video;

const getVideoId = (video: VideoLike) =>
	isFullVideo(video) ? video.kinopoiskId : video.filmId;

const getVideoTitle = (video: VideoLike) =>
	video.nameRu || video.nameEn || video.nameOriginal || 'Без названия';
interface VideoCardProps {
	video: VideoLike;
}

const VideoCard = memo(({ video }: VideoCardProps) => {
	return (
		<div className={styles.item}>
			<Link to={`/movie/${getVideoId(video)}`}>
				<div className={styles.poster}>
					<Image
						src={
							video.posterUrlPreview ??
							(isFullVideo(video) ? video.posterUrl : undefined)
						}
						alt={getVideoTitle(video)}
					/>
					<VideoMeta video={video} />
				</div>
			</Link>
		</div>
	);
});

export default VideoCard;
