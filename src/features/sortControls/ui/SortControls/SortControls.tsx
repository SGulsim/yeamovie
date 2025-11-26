import Button from '@/shared/ui/Button/Button';
import Separator from '@/shared/ui/Separator/Separator';

const SortControls = () => {
	return (
		<Button variant='icon' ariaLabel='Сортировка'>
			<Separator direction='down' />
			<Separator direction='up' />
		</Button>
	);
};

export default SortControls;
