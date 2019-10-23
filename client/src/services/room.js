import { ROOM_API_URL } from '../constants';
import http from './http';

export const fetchFilteredRooms = (options) => http.get(`${ROOM_API_URL}/search`, { params: { ...options } });
export const fetchAllRooms = () => http.get(`${ROOM_API_URL}`);
