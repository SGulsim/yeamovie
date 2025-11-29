import styles from './styles.module.scss';
import type { Staff, Video } from '../../model/types';
import FactItem from '../FactItem/FactItem';
import {
	formatCountries,
	formatGenres,
	getActors,
	getProducer,
} from '../../lib/formatFacts';
import { useMemo } from 'react';

interface Props {
	video: Video;
	staff: Staff[];
}

const VideoFacts = ({ video, staff }: Props) => {
	const facts = useMemo(
		() => [
			{ label: 'Жанр', value: formatGenres(video.genres) },
			{ label: 'Страна', value: formatCountries(video.countries) },
			{ label: 'Год', value: video.year },
			{ label: 'Режиссер', value: getProducer(staff) },
			{ label: 'В главных ролях', value: getActors(staff) },
			{ label: 'Рейтинг', value: video.ratingKinopoisk },
		],
		[video, staff]
	);

	return (
		<div className={styles.facts}>
			<h3 className={styles.title}>О фильме</h3>
			<ul className={styles.list}>
				{facts.map(({ label, value }) => (
					<FactItem key={label} label={label} value={value} />
				))}
			</ul>
		</div>
	);
};

export default VideoFacts;
