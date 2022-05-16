/* eslint-disable semi */
import axios from 'axios';

export const register = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, body, {})
      .then((response) => {
        resolve(response);
        localStorage.setItem('token', response.data.token.token);
        localStorage.setItem('id', response.data.token.id);
        alert('login sucess');
      })
      .catch((err) => {
        reject(err);
      });
  });
};
