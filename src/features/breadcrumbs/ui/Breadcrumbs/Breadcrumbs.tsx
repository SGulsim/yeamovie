import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Separator from '@/shared/ui/Separator/Separator';
import type { ReactNode } from 'react';
import type { DirectionType } from '@/shared/types/types';
interface BreadcrumbsProps {
	children: ReactNode;
	to: string;
	direction: DirectionType;
}
const Breadcrumbs = ({
	children,
	to,
	direction = 'next',
}: BreadcrumbsProps) => {
	return (
		<div
			className={`${styles.breadcrumbs} ${
				direction === 'next' ? styles.next : styles.back
			}`}
		>
			<Link to={to} className={styles.link}>
				{direction === 'back' && <Separator direction='back' />}
				{children}
				{direction === 'next' && <Separator direction='next' />}
			</Link>
		</div>
	);
};

export default Breadcrumbs;
