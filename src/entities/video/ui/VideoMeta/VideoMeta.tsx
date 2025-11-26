import styles from './styles.module.scss';
import Year from '@/shared/ui/Year/Year';
import Rating from '@/shared/ui/Rating/Rating';
import Title from '@/shared/ui/Title/Title';
import type { Video } from '../../model/types';

interface Props {
	video: Video;
}

const VideoMeta = ({ video }: Props) => {
	return (
		<div className={styles.meta}>
			<div className={styles.info}>
				<Title title={video.nameRu} />
				<Year year={video.year} />
			</div>
			<Rating ratingKinopoisk={video.ratingKinopoisk} />
		</div>
	);
};

export default VideoMeta;
