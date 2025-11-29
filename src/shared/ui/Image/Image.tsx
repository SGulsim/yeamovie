import { useState } from 'react';
import styles from './styles.module.scss';
import ImageSkeleton from './ImageSkeleton';
interface Props {
	src: string;
	alt: string;
	type?: 'poster' | 'banner' | 'frame';
}

const Image = ({ src, alt = '', type = 'poster' }: Props) => {
	const [hasError, setHasError] = useState(false);

	if (!src || hasError) {
		return <ImageSkeleton />;
	}

	return (
		<img
			src={src}
			alt={alt}
			className={
				type === 'banner'
					? styles.banner
					: type === 'frame'
					? styles.frame
					: styles.poster
			}
			onError={() => setHasError(true)}
		/>
	);
};

export default Image;
