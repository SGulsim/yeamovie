import styles from './styles.module.scss';

interface Props {
	src?: string;
	alt?: string;
	type?: string;
}

const Image = ({ src, alt, type = 'poster' }: Props) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`${styles.poster} ${
				(type === 'banner' && styles.banner) ||
				(type === 'frame' && styles.frame)
			}`}
		/>
	);
};

export default Image;
