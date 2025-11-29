import styles from './styles.module.scss';
import FrameList from './FrameList/FrameList';
import { Breadcrumbs } from '@/features';
import Title from '@/shared/ui/Title/Title';
import { useFrames } from '@/shared/hooks/useFrames';
import VideoListSkeleton from '@/entities/video/ui/VideoList/VideoListSkeleton';
interface Props {
	filmId: string;
}

const VideoFrames = ({ filmId }: Props) => {
	const { items, isLoading } = useFrames(filmId);

	if (isLoading) return <VideoListSkeleton count={6} />;

	const frames = items ?? [];

	if (frames.length === 0)
		return <h3 className={styles.noframes}>Доступных кадров нет(</h3>;

	return (
		<section className={styles.frames}>
			<Title>Кадры из фильма</Title>
			<Breadcrumbs to={'/'} direction='next'>
				Смотреть все
			</Breadcrumbs>
			<FrameList items={frames.slice(0, 6)} />
		</section>
	);
};

export default VideoFrames;
