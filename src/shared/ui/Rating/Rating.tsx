import styles from './styles.module.scss';
import type { ReactNode } from 'react';
interface Props {
	children: ReactNode;
}

const Rating = ({ children }: Props) => {
	return (
		<span className={styles.rating} aria-label='Рейтинг'>
			⭐{children ? children : 0}/10
		</span>
	);
};

export default Rating;
