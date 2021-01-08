import { CREATE, GET_ALL, GET_ONE } from '../constants/actionTypes';
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