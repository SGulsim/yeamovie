export { videosApi, useGetMoviesQuery } from './api/api';

export { default as videosReducer } from './model/slice';
export { videosSlice } from './model/slice';
export type { Video, VideosApiResponse } from './model/types';

export { default as VideoCard } from './ui/VideoCard/VideoCard';
export { default as VideoHero } from './ui/VideoHero/VideoHero';
export { default as VideoMeta } from './ui/VideoMeta/VideoMeta';
export { default as VideoFacts } from './ui/VideoFacts/VideoFacts';
export { default as VideoDetails } from './ui/VideoDetails/VideoDetails';
