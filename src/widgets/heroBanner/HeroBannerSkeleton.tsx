import styles from './styles.module.scss';

const HeroBannerSkeleton = () => {
	return (
		<section className={styles.bannerSkeleton}>
			<div className={styles.videoHero}>
				<div className={styles.statusSkeleton} />
				<div className={styles.titleSkeleton} />
				<div className={styles.descriptionSkeleton} />
				<div className={styles.buttonSkeleton} />
			</div>
			<div className={styles.image} />
		</section>
	);
};

export default HeroBannerSkeleton;
