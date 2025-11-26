import styles from './styles.module.scss';
import type { Staff, Video } from '../../model/types';

interface Props {
	video: Video;
	staff: Staff[];
}

const VideoFacts = ({ video, staff }: Props) => {
	return (
		<div className={styles.facts}>
			<h3 className={styles.title}>О фильме</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p>Жанр</p>
					<p>
						{video?.genres.map(({ genre }) => (
							<>
								<span key={video.kinopoiskId}>{genre}</span>&nbsp;
							</>
						))}
					</p>
				</li>
				<li className={styles.item}>
					<p>Страна</p>
					<p>
						{video?.countries.map(({ country }) => (
							<>
								<span key={video.kinopoiskId}>{country}</span>
							</>
						))}
					</p>
				</li>
				<li className={styles.item}>
					<p>Год</p>
					<p>{video?.year}</p>
				</li>
				<li className={styles.item}>
					<p>Режиссер</p>
					<p>
						{staff?.find(item => item.professionText === 'PRODUCER')?.nameRu}
					</p>
				</li>
				<li className={styles.item}>
					<p>В главных ролях</p>
					<p>{staff?.find(item => item.professionText === 'ACTOR')?.nameRu}</p>
				</li>
			</ul>
		</div>
	);
};

export default VideoFacts;
