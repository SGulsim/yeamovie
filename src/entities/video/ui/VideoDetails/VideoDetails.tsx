import styles from './styles.module.scss';
import Button from '@/shared/ui/Button/Button';

interface Props {
	title?: string;
	description?: string;
}

const VideoDetails = ({ title, description }: Props) => {
	return (
		<div className={styles.details}>
			<h1 className={styles.movieName}>{title}</h1>
			<p className={styles.description}>{description}</p>
			<div className={styles.btns}>
				<Button onClick={() => 'click'} ariaLabel='Добавить в избранное'>
					Избранное
				</Button>
			</div>
		</div>
	);
};

export default VideoDetails;
