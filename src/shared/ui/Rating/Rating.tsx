import styles from './styles.module.scss';

interface Props {
	ratingKinopoisk: number;
}

const Rating = ({ ratingKinopoisk }: Props) => {
	return (
		<span className={styles.rating} aria-label='Рейтинг'>
			⭐{ratingKinopoisk}/10
		</span>
	);
};

export default Rating;
