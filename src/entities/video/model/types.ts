export interface Video {
	filmId: number;
	kinopoiskId: number;
	imdbId: string;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	posterUrl: string;
	posterUrlPreview: string;
	coverUrl: string;
	logoUrl: string;
	ratingKinopoisk: number;
	ratingImdb: number;
	description: string;
	shortDescription: string;
	countries: Country[];
	genres: Genre[];
	year: number;
	type: string;
}
export interface VideosApiResponse {
	total: number;
	totalPages: number;
	items: Video[];
}

export type VideoLike = Video | SimilarFilm;
export interface Genre {
	genre: string;
}
export interface Country {
	country: string;
}
export interface SimilarFilm {
	filmId: number;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	posterUrl: string;
	posterUrlPreview: string;
	relationType: string;
}
export interface SimilarFilmsResponse {
	total: number;
	items: SimilarFilm[];
}
export interface Staff {
	staffId: number;
	nameRu: string;
	nameEn: string;
	description: string;
	posterUrl: string;
	professionText: string;
	professionKey: string;
}
export interface SearchByKeywordResponse {
	keyword: string;
	pagesCount: number;
	searchFilmsCountResult: number;
	films: Video[];
}

export type VideoCategory =
	| 'TOP_POPULAR_MOVIES'
	| 'TOP_250_MOVIES'
	| 'POPULAR_SERIES';

export interface FramesMovieResponse {
	total: number;
	totalPages: number;
	items: Frame[];
}

export interface Frame {
	imageUrl: string;
	previewUrl: string;
}

export interface FilterParams {
	genre: string;
	country: string;
}
