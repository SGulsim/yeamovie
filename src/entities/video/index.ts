export {
	videosApi,
	useGetMovieByIdQuery,
	useGetMovieBySearchQuery,
	useGetMoviesByCategoryQuery,
	useGetSimilarMoviesQuery,
	useGetStaffByIdQuery,
} from './api/api';

export { default as videosReducer } from './model/slice';
export { videosSlice } from './model/slice';
export type {
	Video,
	VideosApiResponse,
	SimilarFilm,
	SimilarFilmsResponse,
	Staff,
	SearchByKeywordResponse,
	VideoCategory,
} from './model/types';

export { default as VideoCard } from './ui/VideoCard/VideoCard';
export { default as VideoDetails } from './ui/VideoDetails/VideoDetails';
export { default as VideoFacts } from './ui/VideoFacts/VideoFacts';
export { default as VideoHero } from './ui/VideoHero/VideoHero';
export { default as VideoList } from './ui/VideoList/VideoList';
export { default as VideoMeta } from './ui/VideoMeta/VideoMeta';

export {
	formatGenres,
	formatCountries,
	getProducer,
	getActors,
} from './lib/formatFacts';
