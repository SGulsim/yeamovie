import styles from './styles.module.scss';
import {
	genres,
	countries,
	years,
	ages,
	productions,
} from '@shared/constants/info';
import Select from '@/shared/ui/Select/Select';
import SortControls from '@/features/sortControls/ui/SortControls/SortControls';

const FilterPanel = () => {
	return (
		<div className={styles.filters}>
			<Select options={genres} />
			<Select options={countries} />
			<Select options={years} />
			<Select options={ages} />
			<Select options={productions} />
			<SortControls />
		</div>
	);
};

export default FilterPanel;
