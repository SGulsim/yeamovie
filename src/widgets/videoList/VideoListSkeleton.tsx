import styles from './styles.module.scss';

interface Props {
	count: number;
}

const VideoListSkeleton = ({ count }: Props) => {
	return (
		<ul className={styles.listSkeleton}>
			{Array.from({ length: count }, (_, i) => (
				<li key={i} className={styles.itemSkeleton} />
			))}
		</ul>
	);
};

export default VideoListSkeleton;
