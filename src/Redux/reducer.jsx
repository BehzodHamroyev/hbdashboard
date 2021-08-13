import { initialState } from './initialState';
import {
  SET_ALBUMS,
  SET_EROR,
  SET_LOADING,
  SET_PHOTOS,
  SET_POSTS,
  SET_SIDEBAR,
  SET_TODOS,
  SET_USERS,
} from './typing';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload, loading: false, error: false };
    case SET_ALBUMS:
      return { ...state, albums: action.payload, loading: false, error: false };
    case SET_PHOTOS:
      return { ...state, photos: action.payload, loading: false, error: false };
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false, error: false };
    case SET_TODOS:
      return { ...state, todos: action.payload, loading: false, error: false };
    case SET_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar,
        loading: false,
        error: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_EROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};
