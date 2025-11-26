import styles from './styles.module.scss';

const Year = ({ year }) => {
	return (
		<div>
			<p className={styles.year}>{year}</p>
		</div>
	);
};

export default Year;
