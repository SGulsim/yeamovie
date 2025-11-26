import Logo from '@/shared/ui/Logo/Logo';
import styles from './styles.module.scss';
import Navigation from '@/widgets/navigation/Navigation';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<Navigation />
		</footer>
	);
};

export default Footer;
