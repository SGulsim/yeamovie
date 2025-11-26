import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Image from '@/shared/ui/Image/Image';
import VideoMeta from '../VideoMeta/VideoMeta';
import type { Video } from '../../model/types';

interface VideoCardProps {
	video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
	return (
		<div className={styles.item}>
			<Link to={`/movie/${video.kinopoiskId}`}>
				<div className={styles.poster}>
					<Image src={video.posterUrlPreview} alt={video.nameRu} />
					<VideoMeta video={video} />
				</div>
			</Link>
		</div>
	);
};

export default VideoCard;
