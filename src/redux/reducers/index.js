/* eslint-disable semi */
import { combineReducers } from 'redux';
import detailReducer from './detail';
import myRecipeReducer from './myRecipe';
import recipeReducer from './recipe';
import getUserReducer from './user';

const rootReducers = combineReducers({
  recipe: recipeReducer,
  detail: detailReducer,
  myRecipe: myRecipeReducer,
  getUser: getUserReducer
});

export default rootReducers;
