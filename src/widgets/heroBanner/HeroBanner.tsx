import styles from './styles.module.scss';
import VideoHero from '@/entities/video/ui/VideoHero/VideoHero';
import Image from '@/shared/ui/Image/Image';
import { useVideos } from '@/shared/hooks/useVideos';
import HeroBannerSkeleton from './HeroBannerSkeleton';

const HeroBanner = () => {
	const { items, isLoading } = useVideos('TOP_POPULAR_MOVIES');

	const data = items[0];

	if (isLoading) return <HeroBannerSkeleton />;

	return (
		<section className={styles.banner}>
			<VideoHero
				id={data.kinopoiskId}
				title={data.nameRu}
				description={
					data.shortDescription ? data.shortDescription : data.description
				}
			/>
			<Image src={data.posterUrl} alt={'banner'} type='banner' />
		</section>
	);
};

export default HeroBanner;
