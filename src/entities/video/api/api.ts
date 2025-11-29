import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	Staff,
	Video,
	VideosApiResponse,
	SimilarFilmsResponse,
	SearchByKeywordResponse,
	SearchParams,
	VideoCategory,
	FramesMovieResponse,
	FilterParams,
} from '../model/types';

const BASE_URL = import.meta.env.VITE_VIDEOS_BASE_URL;
const STAFF_URL = import.meta.env.VITE_VIDEOS_STAFF_URL;
const SEARCH_URL = import.meta.env.VITE_VIDEOS_SEARCH_URL;
const API_KEY = import.meta.env.VITE_VIDEOS_API_KEY;

export const videosApi = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: headers => {
			headers.set('X-API-KEY', API_KEY);
			headers.set('Content-Type', 'application/json');
			return headers;
		},
	}),
	endpoints: builder => ({
		getMoviesByCategory: builder.query<VideosApiResponse, VideoCategory>({
			keepUnusedDataFor: 60,
			query: category => ({
				url: `films/collections`,
				params: {
					type: category,
					page: 1,
				},
			}),
		}),
		getSimilarMovies: builder.query<SimilarFilmsResponse, string>({
			keepUnusedDataFor: 60,
			query: id => ({
				url: `films/${id}/similars`,
				params: { filmId: id },
			}),
		}),
		getFramesOfMovie: builder.query<FramesMovieResponse, string>({
			keepUnusedDataFor: 60,
			query: id => ({
				url: `films/${id}/images`,
				params: { type: 'STILL', page: 1 },
			}),
		}),
		getMoviesByFilters: builder.query<VideosApiResponse, FilterParams>({
			keepUnusedDataFor: 60,
			query: filters => ({
				url: `films`,
				params: {
					...(filters.genre && { genre: filters.genre }),
					...(filters.country && { country: filters.country }),
					page: 1,
				},
			}),
		}),
		getMovieById: builder.query<Video, string>({
			keepUnusedDataFor: 60,
			query: id => `films/${id}`,
		}),
		getStaffById: builder.query<Staff[], string>({
			keepUnusedDataFor: 60,
			query: id => ({
				url: `${STAFF_URL}staff`,
				params: { filmId: id },
			}),
		}),
		getMovieBySearch: builder.query<SearchByKeywordResponse, string>({
			keepUnusedDataFor: 60,
			query: keyword => ({
				url: `${SEARCH_URL}/films/search-by-keyword`,
				params: { keyword },
			}),
		}),
	}),
});

export const {
	useGetMovieByIdQuery,
	useGetMovieBySearchQuery,
	useGetMoviesByCategoryQuery,
	useGetSimilarMoviesQuery,
	useGetStaffByIdQuery,
	useGetFramesOfMovieQuery,
	useGetMoviesByFiltersQuery,
} = videosApi;
