import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'localhost';
const API_PORT = import.meta.env.VITE_API_PORT || 3000;
const API = ["http://", API_URL, ":", API_PORT].join("");

const get = async () => await axios.get(API+"/students");
const post = async (data: unknown) => await axios.post(API+"/students", data);

export {
  get,
  post
}