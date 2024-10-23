import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const get = async () => await axios.get(API+"/students");
const post = async (data: unknown) => await axios.post(API+"/students", data);

export {
  get,
  post
}