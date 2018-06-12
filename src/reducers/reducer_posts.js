import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// parameters: previous state, action to do
// default state as an object
export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      // ES5 Syntax
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // ES6 Syntax
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
