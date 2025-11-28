import styles from './styles.module.scss';
import type { ReactNode } from 'react';

interface Props {
	label: string;
	value: ReactNode;
}

const FactItem = ({ label, value }: Props) => {
	return (
		<li className={styles.item}>
			<p>{label}</p>
			<p>{value}</p>
		</li>
	);
};

export default FactItem;
