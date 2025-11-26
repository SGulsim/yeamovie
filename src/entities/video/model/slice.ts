import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Video } from './types';

interface State {
	videos: Video[];
}

const initialState: State = {
	videos: [],
};

export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		setVideos: (state, action: PayloadAction<Video[]>) => {
			state.videos = action.payload;
		},
	},
});

export default videosSlice.reducer;
