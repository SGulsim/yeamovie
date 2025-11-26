import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link to={'/'}>Главная</Link>
			<Link to={'/popular-movies'}>Популярные фильмы</Link>
			<Link to={'/popular-series'}>Популярные сериалы</Link>
		</nav>
	);
};

export default Navigation;
