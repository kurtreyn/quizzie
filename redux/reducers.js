import { combineReducers } from 'redux';
import { SET_POSTS, SET_LOADING } from './actions';

const initialState = {
  posts: [],

  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Reducer,
});

export default rootReducer;
