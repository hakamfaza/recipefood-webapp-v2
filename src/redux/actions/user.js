/* eslint-disable semi */
import axios from 'axios';

export const getUser = () => {
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  // console.log(id, token);
  return {
    type: 'GET_DETAIL_USER',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/user/${id}`,
      headers: {
        token
      },
      method: 'GET'
    })
  };
};
