import { USER_API_URL } from '../constants';
import http from './http';

export const fetchUser = () => http(`${USER_API_URL}`);
