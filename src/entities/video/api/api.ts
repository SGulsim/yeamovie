import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	Staff,
	Video,
	VideosApiResponse,
	SimilarFilmsResponse,
	SearchByKeywordResponse,
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
		getMovies: builder.query<VideosApiResponse, string>({
			keepUnusedDataFor: 0,
			query: category => ({
				url: `films/collections`,
				params: {
					type: category,
					page: 1,
				},
			}),
		}),
		getMovieById: builder.query<Video, string>({
			keepUnusedDataFor: 0,
			query: id => `films/${id}`,
		}),
		getStaffById: builder.query<Staff[], string>({
			keepUnusedDataFor: 0,
			query: id => ({
				url: `${STAFF_URL}/staff`,
				params: { filmId: id },
			}),
		}),
		getMovieBySearch: builder.query<SearchByKeywordResponse, string>({
			keepUnusedDataFor: 0,
			query: keyword => ({
				url: `${SEARCH_URL}/films/search-by-keyword`,
				params: { keyword },
			}),
		}),
		getSimilarMovies: builder.query<SimilarFilmsResponse, string>({
			keepUnusedDataFor: 0,
			query: id => ({
				url: `films/${id}/similars`,
				params: { filmId: id },
			}),
		}),
	}),
});

export const {
	useGetMoviesQuery,
	useGetMovieByIdQuery,
	useGetStaffByIdQuery,
	useGetSimilarMoviesQuery,
	useGetMovieBySearchQuery,
} = videosApi;
