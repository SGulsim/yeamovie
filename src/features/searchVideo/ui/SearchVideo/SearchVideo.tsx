import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import searchIconUrl from '@shared/assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '@/shared/hooks/useDebounce';

const SearchVideo = () => {
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, 500);
	const navigate = useNavigate();

	useEffect(() => {
		if (debouncedQuery.trim()) {
			navigate(`/search?query=${debouncedQuery.trim()}`);
		}
	}, [debouncedQuery, navigate]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = () => {
		const value = query.trim();
		if (value) {
			navigate(`/search?query=${value}`);
		}
	};

	return (
		<div className={styles.searchWrapper}>
			<input
				type='text'
				placeholder='Поиск фильмов...'
				className={styles.searchInput}
				value={query}
				onChange={handleChange}
				onKeyDown={e => e.key === 'Enter' && handleSubmit()}
			/>
			<img
				className={styles.searchIcon}
				src={searchIconUrl}
				alt='поиск фильмов'
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default SearchVideo;
