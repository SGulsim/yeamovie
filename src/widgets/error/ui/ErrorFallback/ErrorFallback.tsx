import styles from './styles.module.scss';
import Button from '@/shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface ErrorFallbackProps {
	error?: Error;
	resetError?: () => void;
}

const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
		resetError?.();
	};

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Что-то пошло не так</h1>
				<p className={styles.message}>
					Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.
				</p>

				{error && (
					<details className={styles.details}>
						<summary>Подробности ошибки</summary>
						<pre className={styles.error}>{error.message}</pre>
					</details>
				)}

				<div className={styles.actions}>
					<Button onClick={handleReload} ariaLabel='Перезагрузить страницу'>
						Перезагрузить
					</Button>
					<Button
						onClick={handleGoHome}
						variant='outline'
						ariaLabel='Вернуться на главную'
					>
						На главную
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorFallback;
