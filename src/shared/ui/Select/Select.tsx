import type { ChangeEvent } from 'react';
import styles from './styles.module.scss';
import type { Option } from '@/shared/types/types';
interface Props {
	options: Option[];
	value: string;
	onChange: (value: string) => void;
}

const Select = ({ options, value, onChange }: Props) => {
	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value);
	};
	return (
		<select
			className={styles.select}
			value={value}
			onChange={handleSelectChange}
		>
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
