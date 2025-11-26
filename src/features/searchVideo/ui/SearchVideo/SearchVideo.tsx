import styles from './styles.module.scss';
import searchIconUrl from '@shared/assets/icons/search.svg';

const SearchVideo = () => {
	return (
		<div className={styles.searchWrapper}>
			<input
				type='text'
				placeholder='Поиск фильмов...'
				className={styles.searchInput}
			/>
			<img
				className={styles.searchIcon}
				src={searchIconUrl}
				alt='поиск фильмов'
			/>
		</div>
	);
};

export default SearchVideo;
