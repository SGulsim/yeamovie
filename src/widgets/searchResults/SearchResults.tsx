import styles from './styles.module.scss';
import { useSearch } from '@/shared/hooks/useSearch';
import { useState } from 'react';

const SearchResults = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const data = useSearch(searchQuery);
	console.log(data);

	return (
		<div>
			<input
				type='text'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			<div>{searchQuery}</div>
		</div>
	);
};

export default SearchResults;
