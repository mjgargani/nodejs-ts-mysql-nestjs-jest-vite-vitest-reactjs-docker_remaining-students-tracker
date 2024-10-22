import axios from 'axios';

const API = import.meta.env.REACT_APP_URL || 'http://localhost:3000';

const get = async () => await axios.get(API+"/students");
const post = async (data: any) => await axios.post(API+"/students", data);

export {
  get,
  post
}