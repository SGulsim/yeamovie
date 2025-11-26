import VideoDescription from '@/widgets/videoDescription/VideoDescription';
import { Breadcrumbs } from '@/features/breadcrumbs';
import VideoFrames from '@/widgets/videoFrames/ui/VideoFrames';
import VideoSimilar from '@/widgets/videoSimilar/VideoSimilar';

const VideoPage = () => {
	return (
		<main>
			<Breadcrumbs>
				<Breadcrumbs.Item to={'/'} direction='back'>
					Главная
				</Breadcrumbs.Item>
			</Breadcrumbs>
			<VideoDescription />
			<VideoFrames />
			<VideoSimilar />
		</main>
	);
};

export default VideoPage;
