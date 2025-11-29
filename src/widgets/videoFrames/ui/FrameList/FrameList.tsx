import styles from './styles.module.scss';
import type { Frame } from '@/entities/video/model/types';
import Image from '@/shared/ui/Image/Image';
interface Props {
	items: Frame[];
}

const FrameList = ({ items }: Props) => {
	return (
		<ul className={styles.list}>
			{items.map(({ imageUrl, previewUrl }) => (
				<li key={imageUrl} className={styles.frame}>
					{
						<Image
							src={imageUrl || previewUrl}
							alt={'Кадры фильма'}
							type='frame'
						/>
					}
				</li>
			))}
		</ul>
	);
};

export default FrameList;
