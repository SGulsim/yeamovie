import styles from './styles.module.scss';
import Image from '@/shared/ui/Image/Image';
import { VideoDetails, VideoFacts, type Video } from '@/entities/video';
import { useStaff } from '@/shared/hooks/useStaff';

interface Props {
	video: Video;
}

const SearchVideoCard = ({ video }: Props) => {
	const id = video.filmId.toString();
	const { staff } = useStaff(id);

	return (
		<div className={styles.searchCard}>
			<Image src={video.posterUrlPreview} alt={video.nameRu} />
			<div className={styles.info}>
				<VideoDetails
					id={id}
					title={video.nameRu}
					description={video.description}
				/>
				<VideoFacts video={video} staff={staff} />
			</div>
		</div>
	);
};

export default SearchVideoCard;
