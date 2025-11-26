import styles from './styles.module.scss';
import { useState, type ReactNode } from 'react';
import Button from '../Button/Button';

interface Props {
	children: ReactNode;
	defaultActiveIndex: number;
}

const Tabs = ({ children, defaultActiveIndex = 0 }: Props) => {
	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
	const tabs = Array.isArray(children) ? children : [children];

	return (
		<div className={styles.container}>
			<div className={styles.tabs}>
				{tabs.map((tab, index) => (
					<Button
						key={index}
						onClick={() => setActiveIndex(index)}
						variant='secondary'
						active={activeIndex === index}
					>
						{tab.props.label}
					</Button>
				))}
			</div>

			<div className={styles.content}>{tabs[activeIndex]}</div>
		</div>
	);
};

export default Tabs;
