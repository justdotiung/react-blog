import axios from 'axios';

export const registser = ({ name, password }) =>
axios.post('/api/auth/registser', { name, password });