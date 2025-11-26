import styles from './styles.module.scss';
import Button from '@/shared/ui/Button/Button';
import { useNavigate } from 'react-router';

interface Props {
	id: number;
	title?: string;
	description?: string;
}

const VideoHero = ({ id, title, description }: Props) => {
	const navigate = useNavigate();

	return (
		<article className={styles.hero}>
			<h3 className={styles.status}>уже в кино</h3>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
			<Button
				onClick={() => navigate(`/movie/${id}`)}
				ariaLabel='Смотреть фильм'
			>
				Смотреть
			</Button>
		</article>
	);
};

export default VideoHero;
