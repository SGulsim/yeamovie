import { useNavigate } from 'react-router';
import styles from './styles.module.scss';
import Button from '@/shared/ui/Button/Button';
interface Props {
	id: string;
	title: string;
	description: string;
}

const VideoDetails = ({ id, title, description }: Props) => {
	const navigate = useNavigate();
	return (
		<div className={styles.details}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
			<div className={styles.btns}>
				<Button
					variant='outline'
					onClick={() => navigate(`/movie/${id}`)}
					ariaLabel='Смотреть фильм'
				>
					Смотреть
				</Button>
				<Button
					variant='secondary'
					onClick={() => navigate(`/movie/${id}`)}
					ariaLabel='Добавить в избранное'
				>
					Избранное
				</Button>
			</div>
		</div>
	);
};

export default VideoDetails;
