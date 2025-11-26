import styles from './styles.module.scss';
import FrameList from './FrameList/FrameList';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { useGetMovieByIdQuery } from '@/entities/video/api/api';
import { useParams } from 'react-router-dom';

const VideoFrames = () => {
	const { id } = useParams<{ id: string }>();
	const { data: video } = useGetMovieByIdQuery(id);

	return (
		<section className={styles.frames}>
			<h3 className={styles.title}>Кадры из фильма</h3>
			<Breadcrumbs>
				<Breadcrumbs.Item to='/' direction='next'>
					Смотреть все
				</Breadcrumbs.Item>
			</Breadcrumbs>
			<FrameList video={video} />
		</section>
	);
};

export default VideoFrames;
