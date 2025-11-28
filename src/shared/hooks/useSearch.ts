import { useGetMovieBySearchQuery } from '@/entities/video/api/api';

export const useSearch = (keyword: string) => {
	const { data, isLoading, isError } = useGetMovieBySearchQuery(keyword);

	if (!data) {
		return {
			films: [],
			keyword: '',
			pagesCount: 0,
			searchFilmsCountResult: 0,
			isLoading,
			isError,
		};
	}

	return {
		keyword: data.keyword,
		pagesCount: data.pagesCount,
		searchFilmsCountResult: data.searchFilmsCountResult,
		films: data.films,
		isLoading,
		isError,
	};
};
