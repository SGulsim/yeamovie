import styles from './styles.module.scss';
import type { ReactNode } from 'react';
interface Props {
	children: ReactNode;
}

const Year = ({ children }: Props) => {
	return <p className={styles.year}>{children}</p>;
};

export default Year;
