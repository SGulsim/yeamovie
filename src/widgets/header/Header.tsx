import styles from './styles.module.scss';
import Logo from '@/shared/ui/Logo/Logo';
import Search from '@/features/searchVideo/ui/SearchVideo/SearchVideo';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
		</header>
	);
};

export default Header;
