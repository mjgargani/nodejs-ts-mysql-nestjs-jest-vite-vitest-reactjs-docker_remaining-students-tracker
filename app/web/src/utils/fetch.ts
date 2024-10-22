import axios from 'axios';

const API = import.meta.env.REACT_APP_URL || 'http://localhost:3000';

const get = async () => await axios.get(API+"/students");

export {
  get
}