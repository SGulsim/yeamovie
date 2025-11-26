import styles from './styles.module.scss';
import type { Video } from '@/entities/video';
import Image from '@/shared/ui/Image/Image';

interface Props {
	video?: Video;
}

const FrameList = ({ video }: Props) => {
	return (
		<ul className={styles.list}>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
			<li className={styles.frame}>
				{
					<Image
						src={video?.posterUrlPreview}
						alt={video?.nameRu}
						type='frame'
					/>
				}
			</li>
		</ul>
	);
};

export default FrameList;
