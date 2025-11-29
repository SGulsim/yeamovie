import styles from './styles.module.scss';
import Year from '@/shared/ui/Year/Year';
import type { Video, VideoLike } from '../../model/types';
import Rating from '@/shared/ui/Rating/Rating';

const isFullVideo = (video: VideoLike): video is Video =>
	'kinopoiskId' in video;
interface Props {
	video: VideoLike;
}

const VideoMeta = ({ video }: Props) => {
	const title =
		video.nameRu || video.nameEn || video.nameOriginal || 'Без названия';

	const isMovie = isFullVideo(video);
	const year = isMovie ? video.year : undefined;
	const rating = isMovie ? video.ratingKinopoisk : undefined;

	return (
		<div className={styles.meta}>
			<div className={styles.info}>
				<h4 className={styles.title}>{title}</h4>
				<Year>{year}</Year>
			</div>
			<Rating>{rating}</Rating>
		</div>
	);
};

export default VideoMeta;
