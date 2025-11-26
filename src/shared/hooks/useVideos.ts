import { useGetMoviesQuery } from '@/entities/video';

export const useVideos = (limit: number, category?: string) => {
	const { data, isLoading, isError } = useGetMoviesQuery(category);

	if (!data) {
		return {
			items: [],
			isLoading,
			isError,
		};
	}

	if (limit) {
		const limitedItems = data?.items.slice(0, limit);
		return {
			items: limitedItems || [],
			total: data?.total || 0,
			totalPages: data?.totalPages || 0,
			isLoading,
			isError,
		};
	} else {
		return {
			items: data?.items || [],
			total: data?.total || 0,
			totalPages: data?.totalPages || 0,
			isLoading,
			isError,
		};
	}
};
