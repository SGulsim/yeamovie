import arrowLeft from '@shared/assets/icons/arrowLeft.svg';
import arrowRight from '@shared/assets/icons/arrowRight.svg';
import arrowDown from '@shared/assets/icons/arrowDown.svg';
import arrowUp from '@shared/assets/icons/arrowUp.svg';
import arrowSelect from '@shared/assets/icons/arrowSelect.svg';
import type { SeparatorType } from '@/shared/types/types';
interface Props {
	direction: SeparatorType;
}

const Separator = ({ direction }: Props) => {
	const icons = {
		back: arrowLeft,
		next: arrowRight,
		up: arrowUp,
		down: arrowDown,
		select: arrowSelect,
	};
	return <img src={icons[direction]} alt={direction} />;
};

export default Separator;
