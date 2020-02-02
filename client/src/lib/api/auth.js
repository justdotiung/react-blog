import axios from 'axios';

export const register = ({ name, password }) =>
axios.post('/api/auth/register', { name, password });