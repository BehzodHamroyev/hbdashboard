import { useSelector } from 'react-redux';
import {
  getAlbums,
  getPhotos,
  getPosts,
  getTodos,
  getUsers,
} from '../datas/api';
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

export const setUsers = async (dispatch) => {
  setLoading(dispatch);
  const res = await getUsers();
  if (res.success) {
    const action = { type: SET_USERS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};

export const setAlbums = async (dispatch) => {
  setLoading(dispatch);
  const res = await getAlbums();
  if (res.success) {
    const action = { type: SET_ALBUMS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};
export const setPhotos = async (dispatch) => {
  setLoading(dispatch);
  const res = await getPhotos();
  if (res.success) {
    const action = { type: SET_PHOTOS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};

export const setPosts = async (dispatch) => {
  setLoading(dispatch);
  const res = await getPosts();
  if (res.success) {
    const action = { type: SET_POSTS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};
export const setTodos = async (dispatch) => {
  setLoading(dispatch);
  const res = await getTodos();
  if (res.success) {
    const action = { type: SET_TODOS, payload: res.data };
    dispatch(action);
  } else {
    setError(dispatch);
  }
};
export const clickSidbar = (dispatch) => {
  const action = { type: SET_SIDEBAR };
  dispatch(action);
};
export const setLoading = (dispatch) => {
  const action = { type: SET_LOADING };
  dispatch(action);
};
export const setError = (dispatch) => {
  const action = { type: SET_EROR };
  dispatch(action);
};
