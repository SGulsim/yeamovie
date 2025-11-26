import styles from './styles.module.scss';

interface Props {
	title: string;
}

const Title = ({ title }: Props) => {
	return (
		<div>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};

export default Title;
