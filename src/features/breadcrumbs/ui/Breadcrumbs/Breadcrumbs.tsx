import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Separator from '@/shared/ui/Separator/Separator';

const Breadcrumbs = props => {
	return <div className={styles.breadcrumbs}>{props.children}</div>;
};

const Item = ({ children, to, direction = 'next' }) => {
	return (
		<Link to={to}>
			<div
				className={`${styles.breadcrumbsItem} ${
					direction === 'next' ? styles.next : styles.back
				}`}
			>
				{direction === 'back' && <Separator direction='left' />}
				{children}
				{direction === 'next' && <Separator direction='right' />}
			</div>
		</Link>
	);
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
