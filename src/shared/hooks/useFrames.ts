import { useGetFramesOfMovieQuery } from '@/entities/video/api/api';

export const useFrames = (id: string) => {
	const { data, isLoading, isError } = useGetFramesOfMovieQuery(id);

	if (!data)
		return {
			items: [],
			isLoading,
			isError,
		};

	return {
		items: data?.items || [],
		total: data?.total || 0,
		totalPages: data?.totalPages || 0,
		isLoading,
		isError,
	};
};
