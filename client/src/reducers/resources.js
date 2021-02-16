import { CREATE, GET_ALL, GET_ONE, SEARCH } from '../constants/actionTypes';

export default (resources = [], action) => {
    switch (action.type) {
        case GET_ALL:
        case SEARCH:
            return action.payload;
        case CREATE:
            return [...resources, action.payload]
        default:
            return resources;
    }
}