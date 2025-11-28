import styles from './styles.module.scss';

const VideoDescriptionSkeleton = () => {
	return (
		<section className={styles.infoSkeleton}>
			<div className={styles.imageSkeleton}></div>
			<div className={styles.detailsSkeleton}>
				<h1 className={styles.movieNameSkeleton}></h1>
				<p className={styles.descriptionSkeleton}></p>
				<div className={styles.btnsSkeleton}></div>
			</div>
		</section>
	);
};

export default VideoDescriptionSkeleton;
