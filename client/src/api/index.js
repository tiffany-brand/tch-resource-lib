import axios from 'axios';

export const getResources = () => axios.get("/api/resources");
export const createResource = (newResource) => axios.post("/api/resources", newResource);
