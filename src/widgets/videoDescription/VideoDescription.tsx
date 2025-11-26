import styles from './styles.module.scss';
import Image from '@/shared/ui/Image/Image';
import VideoDetails from '../../entities/video/ui/VideoDetails/VideoDetails';
import VideoFacts from '../../entities/video/ui/VideoFacts/VideoFacts';
import { useParams } from 'react-router-dom';
import {
	useGetMovieByIdQuery,
	useGetStaffByIdQuery,
} from '../../entities/video/api/api';

const VideoDescription = () => {
	const { id } = useParams<{ id: string }>();
	const { data: video } = useGetMovieByIdQuery(id);
	const { data: staff } = useGetStaffByIdQuery(id);

	return (
		<>
			<section className={styles.info}>
				<Image src={video?.posterUrl} alt={video?.nameRu} />
				<article className={styles.description}>
					<VideoDetails
						title={video?.nameRu}
						description={video?.description}
					/>
					<VideoFacts video={video} staff={staff} />
				</article>
			</section>
		</>
	);
};

export default VideoDescription;
