import axios from 'axios';

export const getRecipe = (searchRecipe) => {
  const search = searchRecipe ? searchRecipe : '';
  const limit = searchRecipe ? 8 : 6;
  return {
    type: 'GET_LIST_RECIPE',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipe?sortType=DESC&sortField=date&limit=${limit}&search=${search}`,
      method: 'GET'
    })
  };
};

export const getDetail = (id) => {
  return {
    type: 'GET_DETAIL_RECIPE',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipe/${id}`,
      method: 'GET'
    })
  };
};

export const getMyRecipe = (getToken) => {
  return {
    type: 'GET_MY_RECIPE',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipeUser`,
      headers: {
        token: getToken
      }
    })
  };
};

export const insertRecipe = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/recipe`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteRecipe = (getIdRecipe, getToken) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/recipe/${getIdRecipe}`, {
        headers: {
          token: getToken
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
