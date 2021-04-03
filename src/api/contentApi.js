import axios from 'axios'

export const createContent = (content) => axios.post("http://localhost:5000/content/create", content);

export const getAllContent = () => axios.get("http://localhost:5000/content/getAll");