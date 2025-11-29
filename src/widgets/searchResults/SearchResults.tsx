import styles from './styles.module.scss';
import { useSearch } from '@/shared/hooks/useSearch';
import { useSearchParams } from 'react-router';
import VideoListSkeleton from '@/entities/video/ui/VideoList/VideoListSkeleton';
import SearchVideoCard from '../searchVideoCard/SearchVideoCard';

const SearchResults = () => {
	const [params] = useSearchParams();
	const query = params.get('query') ?? '';
	const { films, isLoading } = useSearch(query);

	if (isLoading) return <VideoListSkeleton count={12} />;
	if (!films.length) return <div>not found</div>;

	return (
		<ul className={styles.list}>
			{films.map(video => (
				<SearchVideoCard key={video.filmId} video={video} />
			))}
		</ul>
	);
};

export default SearchResults;
