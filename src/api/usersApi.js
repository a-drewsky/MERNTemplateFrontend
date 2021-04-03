import axios from 'axios'

export const loginUser = (loginData) => axios.post("http://localhost:5000/user/login", loginData);

export const logoutUser = () => axios.get("http://localhost:5000/user/logout");

export const isUserLoggedIn = () => axios.get('http://localhost:5000/user/loggedin');

export const registerUser = (registerData) => axios.post("http://localhost:5000/user/create", registerData);