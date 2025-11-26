import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './appReducer';
import { videosApi } from '@/entities/video/api/api';
import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(videosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
