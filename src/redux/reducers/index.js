import { combineReducers } from 'redux';
import detailReducer from './detail';
import myRecipeReducer from './myRecipe';
import recipeReducer from './recipe';

const rootReducers = combineReducers({
  recipe: recipeReducer,
  detail: detailReducer,
  myRecipe: myRecipeReducer
});

export default rootReducers;
