//import { beginRequest, endRequest, showError } from './notification.js';
import API from './api.js';

const endpoints = {
    MOVIES: 'data/movies',
    MOVIE_BY_ID: 'data/movies/'
};

const api = new API('CCEE4879-EB2F-FBFC-FF7A-FE936EF72D00', '53ED79C7-8C7E-4EB3-AFC9-D038E8661835');

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

export function checkResult(result) {
    if (result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }
}

export async function create(movie) {
    return await api.post(endpoints.MOVIES, movie);
}

export async function getAll() {
    return await api.get(endpoints.MOVIES);
}

export async function getById(id) {
    return await api.get(endpoints.MOVIE_BY_ID + id);
}

export async function edit(id, movie) {
    return await api.put(endpoints.MOVIE_BY_ID + id, movie);
}

export async function deleteMovie(id) {
    return await api.delete(endpoints.MOVIE_BY_ID + id);
}