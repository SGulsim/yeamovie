import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Logo = () => {
	return (
		<Link to={'/'}>
			<h2 className={styles.logo}>kinomonster</h2>
		</Link>
	);
};

export default Logo;
