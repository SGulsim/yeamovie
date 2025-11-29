import styles from './styles.module.scss';
import type { ReactNode } from 'react';
interface Props {
	children: ReactNode;
}

const Title = ({ children }: Props) => {
	return <h3 className={styles.title}>{children}</h3>;
};

export default Title;
