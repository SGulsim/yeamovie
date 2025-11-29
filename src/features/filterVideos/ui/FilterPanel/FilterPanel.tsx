import styles from './styles.module.scss';
import { genres, countries } from '@/shared/constants/info';
import Button from '@/shared/ui/Button/Button';
import Select from '@/shared/ui/Select/Select';
import { useState } from 'react';
interface FilterPanelProps {
	onFiltersChange: (filters: { genre: string; country: string }) => void;
}

const FilterPanel = ({ onFiltersChange }: FilterPanelProps) => {
	const [genreValue, setGenreValue] = useState('');
	const [countryValue, setCountryValue] = useState('');

	const handleFilter = () => {
		const filters = {
			genre: genreValue,
			country: countryValue,
		};
		onFiltersChange(filters);
	};

	const handleReset = () => {
		setGenreValue('');
		setCountryValue('');
		onFiltersChange({ genre: '', country: '' });
	};

	return (
		<div className={styles.filters}>
			<Select
				value={genreValue}
				onChange={setGenreValue}
				options={[{ value: '', label: 'Все жанры' }, ...genres]}
			/>
			<Select
				value={countryValue}
				onChange={setCountryValue}
				options={[{ value: '', label: 'Все страны' }, ...countries]}
			/>
			<Button onClick={handleFilter} variant='outline'>
				Поиск
			</Button>
			{(genreValue || countryValue) && (
				<Button onClick={handleReset} variant='secondary'>
					Сбросить
				</Button>
			)}
		</div>
	);
};

export default FilterPanel;
