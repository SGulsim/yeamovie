import { useGetMovieByIdQuery } from '@/entities/video/api/api';

export const useMovie = (id: string) => {
	const { data, isLoading, isError } = useGetMovieByIdQuery(id);

	if (!data) {
		return {
			video: {
				filmId: 0,
				kinopoiskId: 0,
				imdbId: '',
				nameRu: '',
				nameEn: '',
				nameOriginal: '',
				posterUrl: '',
				posterUrlPreview: '',
				coverUrl: '',
				logoUrl: '',
				ratingKinopoisk: 0,
				ratingImdb: 0,
				description: '',
				shortDescription: '',
				countries: [],
				genres: [],
				year: 0,
				type: '',
			},
			isLoading: false,
			isError: true,
		};
	}

	return { video: data, isLoading, isError };
};
