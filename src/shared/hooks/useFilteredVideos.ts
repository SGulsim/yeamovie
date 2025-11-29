import { useGetMoviesByFiltersQuery } from '@/entities/video/api/api';
import type { FilterParams } from '@/entities/video/model/types';

export const useFilteredVideos = (filters: FilterParams) => {
	const { data, isLoading, isError } = useGetMoviesByFiltersQuery(filters);

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
		totalPages: data?.totalPages || 0,
		isLoading,
		isError,
	};
};
