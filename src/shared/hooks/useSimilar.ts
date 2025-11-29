import { useGetSimilarMoviesQuery } from '@/entities/video/api/api';

export const useSimilar = (id: string) => {
	const { data, isLoading, isError } = useGetSimilarMoviesQuery(id);

	if (!data) {
		return {
			items: [],
			isLoading,
			isError,
		};
	}

	return {
		items: data?.items || [],
		total: data?.total || 0,
		isLoading,
		isError,
	};
};
