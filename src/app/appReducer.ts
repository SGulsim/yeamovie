import { videosReducer } from '@/entities/video/index';
import { videosApi } from '@/entities/video/api/api';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	videos: videosReducer,
	[videosApi.reducerPath]: videosApi.reducer,
});
