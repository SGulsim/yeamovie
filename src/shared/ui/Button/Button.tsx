import type { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
	children?: ReactNode;
	variant?: string;
	size?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	active?: boolean;
	onClick: () => void;
	className?: string;
	ariaLabel?: string;
}

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	type = 'button',
	disabled = false,
	active,
	onClick,
	className = '',
	ariaLabel,
}: Props) => {
	const buttonClasses = [
		styles.button,
		styles[variant],
		styles[size],
		active && styles.active,
		disabled && styles.disabled,
		className,
	]
		.filter(Boolean)
		.join(' ');
	return (
		<button
			type={type}
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			aria-pressed={active}
		>
			{children}
		</button>
	);
};

export default Button;
