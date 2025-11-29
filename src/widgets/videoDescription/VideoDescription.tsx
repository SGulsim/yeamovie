import styles from './styles.module.scss';
import Image from '@/shared/ui/Image/Image';
import VideoDescriptionSkeleton from './VideoDescriptionSkeleton';
import { useStaff } from '@/shared/hooks/useStaff';
import { useMovie } from '@/shared/hooks/useMovie';
import { VideoDetails, VideoFacts } from '@/entities/video';
interface Props {
	filmId: string;
}

const VideoDescription = ({ filmId }: Props) => {
	const { video, isLoading: videoLoading } = useMovie(filmId);
	const { staff, isLoading: staffLoading } = useStaff(filmId);

	if (videoLoading || staffLoading) return <VideoDescriptionSkeleton />;

	return (
		<section className={styles.info}>
			<Image src={video.posterUrl} alt={video.nameRu} />
			<article className={styles.description}>
				<VideoDetails
					id={filmId}
					title={video.nameRu}
					description={video.description}
				/>
				<VideoFacts video={video} staff={staff} />
			</article>
		</section>
	);
};

export default VideoDescription;
