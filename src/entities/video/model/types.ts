export interface Genres {
	genre: string;
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

export interface Video {
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
	countries: string[];
	genres: Genres[];
	year: number;
	type: string;
}

export interface VideosApiResponse {
	total: number;
	totalPages: number;
	items: Video[];
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
