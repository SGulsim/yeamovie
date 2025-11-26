import styles from './styles.module.scss';

const Select = ({ options }) => {
	return (
		<select className={styles.select}>
			{options?.map(option => (
				<option
					className={styles.option}
					key={option.value}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
