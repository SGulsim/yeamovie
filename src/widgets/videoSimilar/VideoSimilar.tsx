import Title from '@/shared/ui/Title/Title';
import { useSimilar } from '@/shared/hooks/useSimilar';
import VideoListSkeleton from '@/entities/video/ui/VideoList/VideoListSkeleton';
import { VideoList } from '@/entities/video';
interface Props {
	filmId: string;
}

const VideoSimilar = ({ filmId }: Props) => {
	const { items, isLoading } = useSimilar(filmId);

	if (isLoading) return <VideoListSkeleton count={4} />;
	if (!items.length) return null;

	return (
		<section>
			<Title>Возможно, вам понравится</Title>
			<VideoList items={items} limit={4} />
		</section>
	);
};

export default VideoSimilar;
