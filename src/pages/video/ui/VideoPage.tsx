import VideoDescription from '@/widgets/videoDescription/VideoDescription';
import { Breadcrumbs } from '@/features';
import VideoFrames from '@/widgets/videoFrames/ui/VideoFrames';
import VideoSimilar from '@/widgets/videoSimilar/VideoSimilar';
import { useParams } from 'react-router';

const VideoPage = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<main>
			<Breadcrumbs to={'/'} direction={'back'}>
				Главная
			</Breadcrumbs>
			<VideoDescription filmId={id!} />
			<VideoFrames filmId={id!} />
			<VideoSimilar filmId={id!} />
		</main>
	);
};

export default VideoPage;
