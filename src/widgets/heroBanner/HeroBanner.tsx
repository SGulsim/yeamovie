import styles from './styles.module.scss';
import VideoHero from '@/entities/video/ui/VideoHero/VideoHero';
import { useVideos } from '@/shared/hooks/useVideos';
import Image from '@/shared/ui/Image/Image';
import HeroBannerSkeleton from './HeroBannerSkeleton';

const HeroBanner = () => {
	const { items, isLoading } = useVideos(1);
	const { kinopoiskId, nameRu, description, shortDescription, posterUrl } =
		items?.[0] || {};

	if (isLoading) {
		return <HeroBannerSkeleton />;
	}

	return (
		<section className={styles.banner}>
			<VideoHero
				id={kinopoiskId}
				title={nameRu}
				description={shortDescription ? shortDescription : description}
			/>
			<Image src={posterUrl} alt={'banner'} type='banner' />
		</section>
	);
};

export default HeroBanner;
