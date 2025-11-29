import type { VideoCategory } from '@/entities/video';
import { useGetMoviesByCategoryQuery } from '@/entities/video/api/api';

export const useVideos = (category: VideoCategory = 'TOP_POPULAR_MOVIES') => {
	const { data, isLoading, isError } = useGetMoviesByCategoryQuery(category);

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
