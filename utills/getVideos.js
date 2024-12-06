 
import 'server-only';

const videos = () => import('../data/videos.json').then((module) => module.default);

export const getVideos = async () => videos();
