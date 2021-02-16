import { CREATE, GET_ALL, GET_ONE, SEARCH } from '../constants/actionTypes';
import * as api from '../api';

// Action creators - functions that return an action
export const getResources = () => async (dispatch) => {
    try {
        const { data } = await api.getResources();
        dispatch({ type: GET_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createResource = (resource) => async (dispatch) => {
    try {
        const { data } = await api.createResource(resource);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const searchResources = (query) => async (dispatch) => {
    try {
        const { data } = await api.searchResources(query);
        console.log(data);
        dispatch({ type: SEARCH, payload: data })
    } catch (error) {

    }
}