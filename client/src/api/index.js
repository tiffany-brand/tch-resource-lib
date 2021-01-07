import axios from 'axios';

export const getResources = () => axios.get("/api/resources");
